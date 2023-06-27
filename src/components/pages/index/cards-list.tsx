import React from 'react';
import { useRouter } from 'next/router';

// Assets
import { MainField } from './cards-list.style';

// Component
import CardComponent from '@/components/template/card';
import Pagination from '@/components/template/pagination';

const CardsList = ({ data }: any) => {
    const router = useRouter();

    const paginationHandler = (e: any, currentPage: number) => {
        router.push(`/?page=${currentPage}`);
    };

    return (
        <>
            <MainField>
                <header>
                    <h3>آگهی های ویژه</h3>
                </header>
                <ol>
                    {data.result.map((item: any) => (
                        <li key={`residence_card_list_${item.id}`}>
                            <CardComponent data={item} />
                        </li>
                    ))}
                </ol>
            </MainField>
            <Pagination
                count={data.totalCount}
                current={router.query?.page ? parseInt(router.query?.page as string) : 1}
                handler={paginationHandler}
            />
        </>
    );
};

export default CardsList;
