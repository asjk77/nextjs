import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AnimationContainer from '../../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../../components/animation/animationElement";
import Layout from '../../components/layout';
import Styles from '../../styles/tech.module.css'

export default () => (
    <Layout>
        <AnimationContainer>
            <AnimationDropLeft className={Styles.title}> sh-client-mobile</AnimationDropLeft>

            <AnimationDropRight className={Styles.stack}>
                해당 프로젝트는 expo, React-native, react-navigation, redux, react-redux 를 사용하여 제작하였다.
                sh_server의 클라이언트 역활을 하는 프로그램이다.
                <div><Image src="/sh_client_mobile/4.gif" width={320} height={493} /></div>
                </AnimationDropRight>

            <AnimationDropLeft className={Styles.stack}><h2>무한 스클롤 구현</h2></AnimationDropLeft>
            <AnimationDropRight className={Styles.stack}> react Native 의 flat_list를 이용한 무한 스크롤이다. 각 Item 는 react 의 pure Component로 구성되어서 성능을 향상시켰다. </AnimationDropRight>
            <AnimationDropRight> <div><Image src="/sh_client_mobile/2.gif" width={320} height={493} /></div></AnimationDropRight>

            <AnimationDropLeft className={Styles.stack} > 로그인 로그아웃이 구현되어 있다. <div><Image src="/sh_client_mobile/1.gif" width={320} height={493} /></div></AnimationDropLeft>
            <AnimationDropLeft> <div><Image src="/sh_client_mobile/3.gif" width={320} height={493} /></div></AnimationDropLeft>

            <AnimationDropLeft className={Styles.stack} > 글쓰기 , 회원가입 등도 구현되어 있다.
                해당 프로젝트의 전체 소스 코드는 <a style={{color: "blue"}} href="https://github.com/asjk77/sh-client-mobile" >여기</a> 에 있다
             </AnimationDropLeft>
        </AnimationContainer>
    </Layout>
)
