import Image from 'next/image';
import React from 'react';

// Assets
import { MainField } from './story.style';
import StoryBGMoc from '@/assets/images/moc/story.jpg';
import Logo from '@/assets/images/mobile-logo.png';

const Story = () => {
    return (
        <MainField>
            <h3>تفریحاتتو تو این ویلا استوری کن</h3>
            <ul>
                <li>
                    <Image src={Logo} alt='' />
                    <p>افزودن</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
                <li>
                    <Image src={StoryBGMoc} alt='' />
                    <p>کسری حبیب بیگی</p>
                </li>
            </ul>
        </MainField>
    );
};

export default Story;
