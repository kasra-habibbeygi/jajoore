import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

// Assets
import { MainField } from './attributes.style';
import Angle from '@/assets/images/icons/angle.svg';

// Component
import TitleField from '@/components/template/title';
import Button from '@/components/form-group/button';

// Types
interface ComponentTypes {
    title: string;
    attribute: any;
    availableItems?: number[];
    name?: string;
}

const Attributes = ({ title, attribute, availableItems, name }: ComponentTypes) => {
    const [ulStatus, setUlStatus] = useState<boolean>(false);
    const [height, setHeight] = useState(0);
    const ref: any = useRef(null);

    useEffect(() => {
        setHeight(ref.current.clientHeight);
    }, []);

    return (
        <MainField ulStatus={ulStatus} count={attribute.length} height={height}>
            <TitleField title={title} />
            <ul ref={ref}>
                {attribute.map((item: any) => (
                    <li key={`${name}_items_${item.id}`}>
                        <div className={availableItems?.includes(item.id) ? '' : 'removed'}>
                            <Image src={`${process.env.IMAGE_URL}${item.icon}`} alt='' width={100} height={60} />
                            <p>{item.name}</p>
                        </div>
                    </li>
                ))}
                <span className='layout'></span>
            </ul>
            <div className='show_more'>
                <Button handler={() => setUlStatus(!ulStatus)}>
                    {!ulStatus ? 'بیشتر' : 'کم تر'}
                    <Image src={Angle} alt='' />
                </Button>
            </div>
        </MainField>
    );
};

export default Attributes;
