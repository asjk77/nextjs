/*
 * File Name      : home.jsx 
 * Created Date   : Wednesday, May 12th 2021, 6:39:48 am
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

// homePage를 정의합니다.!

import React from 'react';
import AnimationContainer from '../../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../../components/animation/animationElement";
import Layout from '../../components/layout';
import Styles from '../../styles/tech.module.css'
import Image from 'next/image'

export default () => (
    <Layout>
        <AnimationContainer>
            <AnimationDropLeft className={Styles.title}>About This Site</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                해당 페이지는 nextJs기반으로 제작되었고 vercel로 배포되었다.
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.title}>개발 목적</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                자기소개서 겸 포트폴리오 제작하기 위해 다양한 애니메이션 구현하여 좀더 다채로운 사이트를 구성하고 싶었다.
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.title}>핵심 코드</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                `AnimationContainer` 라는 부모 컴포넌트를 설계하였다. 그리고 각 효과 에 맞는 `Animation`클래스를 를
                AnimationContainer에 추가하는 식으로 동작한다. 예를들어 이 페이지는 다음과 같다.
                <Image src="/this_site/1.png" width={1222} height={280} />
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
            아래와 같이 구현하기 위해서는
            `AnimationContainer`클래스는 자식 클래스를 알고 있어야 한다.
            `AnimationContainer` 의 자식으로  Animation의 자식들의 Ref를 가지고 있다.
            <div><Image src="/this_site/2.png" width={358} height={103} /></div>
            </AnimationDropLeft>

            <AnimationDropLeft className={Styles.stack}>
            AnimationConatiner가 생성될때 Animation자식 클래스의 참조 변수를 구한다. 또한
            스크롤링을 위한 CallBack 함수를 등록한다.
            만약 스크롤이벤트가 발생되었다면 해당 CallBack 함수가 실행될 것이다.

            <div><Image src="/this_site/3.png" width={1655} height={235} /></div>
            위의 `activateScrollElement`함수는 scroll이벤트에 등록된 CallBack 함수이다.
            CallBack 함수의 내부에서는 `AnimationConatiner`의 Children 컴포넌트 들을 순회하여
            해당 임기점이 넘을 경우 애니메이션을 발동한다.
            </AnimationDropLeft>

            <AnimationDropLeft className={Styles.stack}>
            이제 `Animation` 객체를 정의할 차례이다. Animation객체로 대표되는 `AnimationElement` 클래스를 정의한다.
            그리고 `AnimationElement` 클래스를 상속받아서 다양한 효과를 가진 클래스를 만들 수 있다.
            <div><Image src="/this_site/4.png" width={1492} height={335} /></div>
            각 클래스는 activateStyle 및 unActivateStyle이라는 클래스 이름을 오버라이딩 하여 사용한다.

            `AnimationElement`클래스를 상속받아 Style만 오버라이딩 하여 새로운 효과들을 손쉽게 만들 수 있다.
            </AnimationDropLeft>

            <AnimationDropLeft className={Styles.stack}>
            `AnimationElement`의 내용은 간단하다.
            <div><Image src="/this_site/5.png" width={1492} height={335} /></div>
            현제 정의된 style (className)을 컴포넌트에 지정해준다.
            </AnimationDropLeft>

            <AnimationDropLeft className={Styles.stack}>
            `AnimationElement`의 내용은 간단하다.
            <div><Image src="/this_site/5.png" width={1492} height={335} /></div>
            현제 정의된 style (className)을 컴포넌트에 지정해 준다.
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.title}>...</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                앞서 설명된 부분들은 전체 코드가 아니여서 난해 할수 있다. 이해를 돕기 위해서 
                해당 프로젝트의 전체 소스 코드는 <a style={{color: "blue"}} href="https://github.com/asjk77/nextjs" >여기</a> 에 있다
            </AnimationDropLeft>
        </AnimationContainer>
    </Layout>
)
