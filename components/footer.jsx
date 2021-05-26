/**
 * footer Component 를 정의합니다.
 */
import Link from 'next/link';
import React from 'react';
import Styles from './footer.module.css'


export default function Footer() {
    return (
        <footer className={Styles.container}>
            <p className={Styles.copyright}>Copyright 2021 Hwang Sanho. All right reserved.</p>
            <div className={Styles.subNav}>
                <li><Link href='/portfolio/this-site'><a>이 사이트에 대하여</a></Link></li>
                <li><Link href='/detail'><a>정보</a></Link></li>
            </div>
        </footer>
    );
}