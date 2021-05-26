import Link from 'next/link';
import React from 'react';
import AnimationContainer from '../../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../../components/animation/animationElement";
import Layout from '../../components/layout';
import Styles from '../../styles/tech.module.css'
import Image from 'next/image'

export default () => (
    <Layout>
        <AnimationContainer>
            <AnimationDropLeft className={Styles.title}>sh-clientServer</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                노드 js 로 만든 첫번째 서버 프로그램이다. express 프레임 워크를 사용한다.

                Mongoose, fastest-validator 등을 사용한다. 간단한 로그인 로그아웃 회원가입, 글쓰기 기능이 있으며
                기능은 별로 없지만 Jest로 테스팅 되었다.

                express 와 node를 이용한 첫  프로젝트라서 코드가 난잡한 감이 조금 있다.
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.title}>핵심 코드</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                각 API에 대한 라우터를 정의하였으며 라우터는 해당 로직을 controller로 위임한다.
                <div><Image src="/sh_server/1.png" width={632} height={593} /></div>
                각 컨트롤러에서는
                가독성을 위해 `async await` 를 사용한다. 에러 처리를 위해서 asyncHandler로 감싸 주었다.
            </AnimationDropLeft>

            <AnimationDropRight className={Styles.stack}>
                각 컨트롤러에서는 해당 API에 맞는 스키마를 정의후 유효성 검사를 진행한다. 
                그후 각 요청에 맞는 일을 처리한다.
                <div><Image src="/sh_server/2.png" width={1430} height={855} /></div>

                요청 처리 라이브러리로는 `fastest-validator`를 사용하였다.
                초기에 작성하여서 코드가 엉망이다.validate에 실패했는
            </AnimationDropRight>

            <AnimationDropLeft className={Styles.stack}>
                또한 데이터 처리를 위해서 DB를 정의하였다.. DB는 Mongoose를 이용한다.
                <div><Image src="/sh_server/3.png" width={1285} height={748} /></div>
                mongoose 의 각 스키마를 저장하였다.
            </AnimationDropLeft>
            <AnimationDropLeft className={Styles.title}>...</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>
                해당 프로젝트의 전체 소스 코드는 <a style={{color: "blue"}} href="https://github.com/asjk77/sh-server" >여기</a> 에 있다
                또한 해당 API를 래핑한 소스 코드는 <a style={{color: "blue"}} href="https://github.com/asjk77/sh-server-api" >여기</a> 에 있다
                
            </AnimationDropLeft>
        </AnimationContainer>
    </Layout>
)
