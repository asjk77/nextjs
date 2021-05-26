/*
 * File Name      : layout.jsx 
 * Created Date   : Saturday, May 8th 2021, 8:11:28 pm
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

// layout을 정의합니다.

import React from "react";
import Footer from "./footer";
import Styles from "./layout.module.css";
import NavBar from './navbar';

export default function Layout({ children }) {

    return <div className={Styles.container}>
        <header className={Styles.header}>
            <NavBar/>
        </header>

        <div className={Styles.separator}></div>
        <div className={Styles.main}>
            {children}
        </div>
        <Footer/>
    </div> 
}
