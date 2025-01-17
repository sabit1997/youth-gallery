import React from 'react';
import styles from './PostModal.module.css';
import { useNavigate } from 'react-router-dom';

function PostModal({ values, propFunc, post_id, link }) {
    const navigate = useNavigate();

    const setButton = (value, navigate, propFunc) => {
        switch (value) {
            case '설정 및 개인정보':
                //설정 및 개인정보 페이지 이동
                break;
            case '로그아웃':
                //로그아웃 모달 열기
                propFunc(true);
                break;
            case '삭제':
                //삭제 모달 띄우기
                propFunc(true);
                break;
            case '수정':
                //수정 페이지로 이동
                navigate(`/post/edit/${post_id}`);
                break;
            case '신고하기':
                //신고 모달 띄우기
                propFunc(true);
                break;
            case '웹사이트에서 상품보기':
                window.open(link, '_blank');
                console.log(link);
                break;
            case '상품 수정':
                navigate(`/edit/product/${post_id}`);
                break;
            default:
                console.log('error: value를 다시 확인해주세요.');
        }
    };
    return (
        <ul className={styles.modal_lists}>
            {values.map((value, i) => {
                return (
                    <li className={styles.modal_list} key={i}>
                        <button
                            className={styles.modal_listBtn}
                            onClick={() => {
                                setButton(value, navigate, propFunc);
                            }}
                        >
                            {value}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}

export default PostModal;
