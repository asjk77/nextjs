/*
 * File Name      : home.jsx 
 * Created Date   : Wednesday, May 12th 2021, 6:39:48 am
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

// homePage를 정의합니다.!

import React from "react";
import Layout from "../components/layout";
import SiteGuard from "../components/SiteGuard";

export default function Home() {
    return (
        <Layout>
            <SiteGuard/>
        </Layout>
    )
}