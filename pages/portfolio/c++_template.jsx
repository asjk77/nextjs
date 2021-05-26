import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import AnimationContainer from '../../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../../components/animation/animationElement";
import Layout from '../../components/layout';
import Styles from '../../styles/tech.module.css';

export default () => (
    <Layout>
        <AnimationContainer>
            <AnimationDropLeft className={Styles.title}> c++_template </AnimationDropLeft>

            <AnimationDropRight className={Styles.stack}>
                프로젝트를 생성할때 조금더 쉽게 프로젝트를 시작할 수 있도록 만든 프로젝트 템플릿이다.
                <div><Image src="/project_template/1.png" width={895} height={328} /></div>
                </AnimationDropRight>

            <AnimationDropRight className={Styles.stack}>
                해당 탬플릿의 소스 코드 소스 코드는 <a style={{color: "blue"}} href="https://github.com/asjk77/project_template" >여기</a> 에 있다
            </AnimationDropRight>

        </AnimationContainer>
    </Layout>
)
