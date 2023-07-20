import React from 'react';
import Image from 'next/image';

//Assets
import { CommentStyle } from '@/assets/styles/profile/comments.style';
import userImage from '@/assets/images/profile/aside/userImage.jpeg';

// Component
import ProfileLayoutProvider from '@/components/layout/profile-layout-provider';
import LayoutProvider from '@/components/layout/layout-provider';
import TextArea from '@/components/form-group/textarea';
import Button from '@/components/form-group/button';

const Commnets = () => {
    return (
        <LayoutProvider>
            <ProfileLayoutProvider>
                <CommentStyle>
                    <h2>مشاهده و پاسخ نظرات</h2>
                    <div className='user_pic'>
                        <Image src={userImage} alt='' />
                        <span>حمیدرضا محمدی </span>
                    </div>
                    <p className='firstComment'>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                        روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                        ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد
                        تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد
                        کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد
                        نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                    </p>
                    <div className='answerBox'>
                        <h3>پاسخ شما</h3>
                        <p>ممنون از نطر شما</p>
                    </div>
                    <div className='answerBox'>
                        <h3>پاسخ شما</h3>
                        <p>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                            روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                            بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان
                            را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان
                            فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
                            پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
                            استفاده قرار گیرد.
                        </p>
                    </div>
                    <div className='repley'>
                        <h3>پاسخ شما</h3>
                        <TextArea value='پاسخ خود را بنویسید...' name='' onChange={() => {}} placeholder='پاسخ خود را بنویسید...' />
                    </div>
                    <Button color='green' type='filled'>
                        ارسال
                    </Button>
                </CommentStyle>
            </ProfileLayoutProvider>
        </LayoutProvider>
    );
};

export default Commnets;
