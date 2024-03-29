/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Axios from '@/configs/axios';
import { useDispatch } from 'react-redux';
import { locationListHandler } from '@/state-manager/reducer/map';

// Assets
import { DoubleCol } from '@/assets/styles/main';
import TrustSymbol from '@/assets/images/layout/trust-symbol.png';

// Component
import LayoutProvider from '@/components/layout/layout-provider';
import IndexHeader from '@/components/pages/index/header';
import VipSlider from '@/components/pages/index/vip-slider';
import CardsList from '@/components/pages/index/cards-list';
import ArticleSlider from '@/components/pages/index/article-slider';
import Filter from '@/components/template/filters/filter';
import DestinationCard from '@/components/pages/index/destination-card';
import AboutUs from '@/components/pages/index/about-us';
import SideBarCardList from '@/components/pages/index/sidebar-card-list';
import SearchHeader from '@/components/pages/index/search-header';
const Map = dynamic(() => import('@/components/template/map/map'), { ssr: false });

// Utils
// import { filterGetter } from '@/utils/filter-handler';

const objectProvider = (item: any) => {
    return {
        imageGalleries: item.imageGalleries,
        title: item.title,
        numberOfRoom: item.numberOfRoom,
        areaOfFloor: item.areaOfFloor,
        numberOfFloor: item.numberOfFloor,
        vip: item.vip,
        discountedPrice: item.discountedPrice,
        price: item.price,
        totalScores: item.totalScores,
        numberOfComments: item.numberOfComments,
        instant: item.instant,
        lng: item.lng,
        lat: item.lat,
        id: item.id,
        maxCapacity: item.maxCapacity
    };
};

const Index = ({ article, vipsResidence, Residence, popularDestinations, instants, filtersItem, lastMinute }: any) => {
    const dispatch = useDispatch();

    useEffect(() => {
        let data: any[] = [];

        vipsResidence.result.map((item: any) => {
            data = [...data, objectProvider(item)];
        });
        Residence.result.map((item: any) => {
            data = [...data, objectProvider(item)];
        });
        instants.result.map((item: any) => {
            data = [...data, objectProvider(item)];
        });

        dispatch(locationListHandler(data));
    }, []);

    return (
        <LayoutProvider>
            <Filter filtersItem={filtersItem.result} popularDestinations={popularDestinations.result} />
            <main className='container'>
                <SearchHeader />
                <IndexHeader pageName='search' />
                <DoubleCol>
                    <aside className='aside'>
                        <Map />
                        <div className='symbol_field'>
                            <Image src={TrustSymbol} alt='' />
                            <Image src={TrustSymbol} alt='' />
                        </div>
                        <DestinationCard data={popularDestinations} />
                        <SideBarCardList title='آگهی های رزرو آنی' data={instants} />
                        <SideBarCardList title='آگهی های لحظه آخری' data={lastMinute} />
                    </aside>
                    <div className='content_field'>
                        <VipSlider data={vipsResidence} />
                        <CardsList data={Residence} />
                    </div>
                </DoubleCol>
                <ArticleSlider data={article} />
                <AboutUs />
            </main>
        </LayoutProvider>
    );
};

export default Index;

export async function getServerSideProps({ query }: any) {
    let residenceQuery = '?PageSize=12';

    if (query.page) {
        residenceQuery += `&PageIndex=${query.page}`;
    }

    const [article, vipsResidence, Residence, popularDestinations, instants, filtersItem, lastMinute] = await Promise.all([
        Axios.get('blog'),
        Axios.get('residence/vips'),
        Axios.get(`residence/${residenceQuery}`),
        Axios.get('residence/popularDestinations'),
        Axios.get('residence/instants?pageSize=4'),
        Axios.get('residence/preperForFilter'),
        Axios.get('residence/lastMinute?pageSize=4')
    ]);

    return {
        props: {
            article: article.data,
            vipsResidence: vipsResidence.data,
            Residence: Residence.data,
            popularDestinations: popularDestinations.data,
            instants: instants.data,
            filtersItem: filtersItem.data,
            lastMinute: lastMinute.data
        }
    };
}
