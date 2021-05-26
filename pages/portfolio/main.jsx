import Link from 'next/link';
import React from 'react';
import AnimationContainer from '../../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../../components/animation/animationElement";
import Layout from '../../components/layout';
import Styles from '../../styles/common.module.css'


export default () => (
    <Layout>
        <AnimationContainer >
            <AnimationDropLeft className={Styles.title_link}>
                <Link href="/portfolio/sh-server" > * SH-server</Link>
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.content}>
                express 를 기반으로 동작하는 간단한 restful 서버이다.
                로그인, 로그아웃, 회원가입, 글쓰기, 글 보기 등을 제공한다. 
                해당 서버는 jest로 테스트 되어있다.
            </AnimationDropRight>

            <AnimationDropLeft className={Styles.title_link}>
                <Link href="/portfolio/sh-client-mobile"> * SH-client-mobile </Link>
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.content}>
                expo, react-native를 이용한 cross-platform application이다.
                SH-Server의 클라이언트 역활을 한다.
            </AnimationDropRight>

            <AnimationDropLeft className={Styles.title_link}>
                <Link href="/portfolio/this-site"> * this-site </Link>
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.content}>
                next js 로 구현되고 vercel로 배포된 현제 페이지이다.
            </AnimationDropRight>

            <AnimationDropLeft className={Styles.title_link}>
                <Link href="/portfolio/c++_template"> * C++_project_framework </Link>
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.content}>
                직접 만든 C++ 프레임 워크이다. 크로스 플랫폼을 지원하며 기본적으로 gtest, boost를 라이브러리를 포함하고 있다
            </AnimationDropRight>
        </AnimationContainer>
    </Layout>
)
