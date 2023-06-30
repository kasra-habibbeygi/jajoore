import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

// Assets
import { CommentMainField } from './comments.style';

// MUI
import { Rating } from '@mui/material';

// Component
import Pagination from '@/components/template/pagination';
import Button from '@/components/form-group/button';
import MuiRtlWraper from '@/components/mui-rtl-wraper';

// Tools
import Tools from '@/utils/tools';

const Comment = ({ data }: any) => {
    const router = useRouter();

    const paginationHandler = (e: any, currentPage: number) => {
        router.push(`/?page=${currentPage}`);
    };

    return (
        <CommentMainField>
            <h3>نظر مهمانان ({data?.totalItems} نظر)</h3>
            <ul className='comment_list'>
                {data?.result?.map((item: any, index: number) => {
                    return (
                        <li key={`comment_list_${index}`}>
                            <div className='header'>
                                <div className='avatar_field'>
                                    <Image src={`${process.env.IMAGE_URL}${item.userProfileImage}`} alt='' width={500} height={300} />
                                    <span>
                                        <p>{item.userName}</p>
                                        <small>{Tools.changeTimeStampToHumanReadAble(parseInt(item.createDate))}</small>
                                    </span>
                                </div>
                                <div className='rate_field'>
                                    <MuiRtlWraper>
                                        <Rating name='size-small' readOnly defaultValue={item.rating} precision={0.5} size='small' />
                                    </MuiRtlWraper>
                                </div>
                            </div>
                            <p className='comment'>{item.content}</p>
                            {item.commentAnswer && (
                                <div className='answer'>
                                    <div className='avatar_field'>
                                        <Image
                                            src={`${process.env.IMAGE_URL}${item.commentAnswer.userProfileImage}`}
                                            alt=''
                                            width={500}
                                            height={300}
                                        />
                                        <span>
                                            <p>{item.commentAnswer.userName}</p>
                                            <small>{Tools.changeTimeStampToHumanReadAble(parseInt(item.commentAnswer.createDate))}</small>
                                        </span>
                                    </div>

                                    <p className='comment'>{item.commentAnswer.content}</p>
                                </div>
                            )}
                        </li>
                    );
                })}
            </ul>
            <Pagination
                count={data.totalCount}
                current={router.query?.page ? parseInt(router.query?.page as string) : 1}
                handler={paginationHandler}
            />

            <div className='form_group'>
                <textarea name='' placeholder='نظر خود را تایپ کنید ...'></textarea>
                <Button color='primary' type='filled'>
                    ثبت نظر
                </Button>
            </div>
        </CommentMainField>
    );
};

export default Comment;
