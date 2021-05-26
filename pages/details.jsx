import React from 'react';
import AnimationContainer from '../components/animation/animationContainer';
import Layout from '../components/layout';

export default class Detail extends React.Component {
    render() {
    return ( 
        <Layout>
                <div style={{ fontSize: 40, margin: 20, justifyContent: 'center'}}>
                    나이 : 1998 년생 (군필)
                    <br/>
                    학력 : 고등학교 졸업
                    <br/>
                    사용 가능언어 : C/C++, javascript, python, bash, cmake
                    <br/>
                    개발환경 : Vim, Vscode, MacOs
                    <br/>
                    각오: 뽑아주시면 진짜 열심히 하겠습니다.!
                    <br/>
                    연락처: 010 2186 6711
                </div>
        </Layout>
    )
    }
    
}
