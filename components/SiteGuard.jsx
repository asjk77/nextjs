/*
 * File Name      : SiteGuard.jsx 
 * Created Date   : Wednesday, May 12th 2021, 6:48:49 am
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */
// SiteGuard 입니다.

import AnimationContainer from "./animation/animationContainer";
import { AnimationElement, AnimationDropRight, AnimationDropLeft } from './animation/animationElement';

import Styles from './SiteGuard.module.css';

import Layout from "./layout";

export default function SiteGuard(){

    return(
        <AnimationContainer className={Styles.container} >
            <AnimationDropLeft className={Styles.photo} > 안녕하세요 신입 개발자 황산호를 소개합니다. </AnimationDropLeft>
            <AnimationDropLeft className={Styles.subTitle}> 개발자로서의 성장과정</AnimationDropLeft>

            <AnimationDropLeft className={Styles.text}>
                <span style={{ fontSize: 80 }}>어</span>릴때부터 꿈이 게임 프로그래머였다. 
                어렸을때부터 게임 만드는 것을 좋아했다. 하지만 어렸을때 만들었던 게임은 게임 툴에 의존하여서 제작한 것이였다. 좀더 제대로 된 게임을 제작하기 위해서
                중학교 3학년때 코딩을 배우기 시작했다. 다양한 언어들 중에 C언어를 골랐다. 왜냐하면 게임은 C언어로 만든다고 어디서 들었기 때문이다.
                Microsoft 사의 Visual Studio IDE로 처음 입문하였다. 게임을 제작해야 하는데 생각보다 결과는 참담했다.
                프레임마다 화면이 깜박이는 것이 맘에 들지 않았다. 그리고 알수 없는 버그들이 있었다. 나는 게임 만드는 것을 포기할 수 없었다. 3D게임을 만들어보고 싶었다.
                인터넷에 3dGame을 만들기 위한 것을 검색해서 Opengl을 조금 공부하였다. 공부를 하였지만 그렇지만 게임을 만드는 일은 쉽지 않았다.
                어느덧 시간이 지나 고등학교를 졸업하였다. 다른사람들이 조언하기로는 개발자로 취업을 하기 위해서는 대학교는 무조건 가야지 취업할 수 있다라더라. 하지만 나는 그때
                시험 성적은 좋지 못했을 뿐만 아니라. 대학교를 가면 이미 배웠던 것들을 다시 배워야 한다는 사실이 싫었던것 같다. 나는 굳이 돌아가고 싶지 않았다.
                고등학교 를 졸업하고 간단한 컴퓨터 수리 업체에 취업을 했다. 하지만 프로그래머 가 되겠다는 꿈을 위해서 컴퓨터 수리 업체를 그만두고 집에서 공부를 시작하였다
                어느덧 시간이 지나 군대에 가게 되었다. 군대에서 나는 틈틈히 기술 관련 서적들을 공부하였다. UML,DirectX,EffectC++ 공부하였다. 군대에서는 컴퓨터를 이용할 수 있는
                시간이 제한되어서 잊어 먹은 것들이 많이 있었다. 어느덧 시간이 지나 군대를 전역했다.
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.text} >
                <h2>MacOs로의 전환</h2>
                군대를 전역하고 나서 맥북을 중고로 45만원에 구입하였다. MacOs에서는 기존의 C++코딩 조차 쉽지 않은것이 없었다.
                기존에 WindowsAPI들을 쓸수 없고 Liunx API를 다시 배워야 했기 떄문이다. 커맨드 라인 인터페이스도 익숙치 않았다.
                또한 Window에서 작성한 코드가 MacOs에서도 동일하게 동작하게 하고 싶었다. 어떻게 하면 MacOs,와 Linux, Window 등을
                코드를 동일하게 유지 할수 있을까? WindowAPI SDL 을 사용하고 Makefile 대신 CMake 라는 빌드 스크립트라는 것을 배우게 된다.
            </AnimationDropRight>

            <AnimationDropLeft className={Styles.text}>
                <h2>javascript로의 전환</h2>
                군대를 전역하고 한동한 C++ 에 대하여 공부하였다. 집에서는 걱정이 이만 저만이 아니였다. 군대를 전역하고 취업을 할줄 알았던 부모님은
                집에서 노는 것으로 보였고 나의 목표는 C++로 게임을 개발해서 성공하자 인데.. 정작 실제 게임은 개발 못하고 공부만 하고 있으니 말이다..
                취업을 하기 위해서는 무언가 결과를 내놓아야 만 했다. 하지만 프로젝트를 완성하여 서비스를 운행한다 해도 불안정할 뿐만 아니라  성공할 보장도 없었고 그렇다고 취업을 해도
                C++개발자는 어중간한 포트폴리오를 작성하여서 취업이 안될 것 같았다.
                시간만 충내서 나중에 경력도 없고 나이만 먹어서 아무것도 안될것 같은 불안감이 엄습하였다. "우선 프로그래머가 되고 보자.." 라고 다짐하였다.
                Web쪽으로 시선을 돌리기 시작하였다.
                웹 쪽으로 시선을 돌리기 시작하였지만.. python기반의 Django프로젝트도 해보고 javascript 기반의 express 도 해봤다. 
                나는 한번 배우면 FullStack 개발이 가능한 javascript 를 두번째 언어로 채택 하였다. 다행히 C/C++을 공부한 덕에 javascript 언어는 그다지 어렵지 않았다.

                이제는 진짜 취업을 할때
                Javascript로 진로를 바꾸면서 새로운 기술들을 배우며 시간을 지내고 있었다. 그리고 이제 진짜 취업할때가 되었다..
            </AnimationDropLeft>
            <AnimationDropRight className={Styles.subTitle}> 단점 </AnimationDropRight>
            <AnimationDropRight className={Styles.text}> 실제로 서비스를 개발하여 운영해본 적이 없다. 실제로 현업에서 일하시는 분들의 Tip을 얻고싶다. </AnimationDropRight>

            
            <AnimationDropLeft className={Styles.subTitle}>그럼에도 불구하고 개발자 황산호를 뽑아야 하는 이유 </AnimationDropLeft>
            <AnimationDropRight className={Styles.text}> 앞서 설명한 다양한 플랫폼과 다양한 경험들이 존재한다. 새로운 솔루션에 맞게 개발을 진행 할 수 있다. </AnimationDropRight>
            <AnimationDropRight className={Styles.text}> 또한 주어진 문제의 해결책을 찾기 위해 노력 할 것을 보장한다. </AnimationDropRight>
            <AnimationDropRight className={Styles.text}> 뽑아주신다면 열심히 하겠습니다.</AnimationDropRight>
                
        </AnimationContainer>
    );
}

