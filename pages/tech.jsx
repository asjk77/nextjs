import React from 'react';
import AnimationContainer from '../components/animation/animationContainer';
import { AnimationDropLeft, AnimationDropRight} from "../components/animation/animationElement";
import Layout from '../components/layout';
import Styles from '../styles/tech.module.css'

export default () => (
    <Layout>
        <AnimationContainer>
            <AnimationDropRight className={Styles.title}>Web</AnimationDropRight>
            <AnimationDropLeft className={Styles.stack}>HTML</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>CSS</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>Javascript</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>NodeJs</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>NoSql(MongoDB, Mongoose)</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>React</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>React-native</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>redux</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>Nextjs</AnimationDropLeft>
            <AnimationDropRight className={Styles.title}>C++</AnimationDropRight>
            <AnimationDropLeft className={Styles.stack}>cmake</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>Opengl</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>STL</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>WinApi</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>SDL</AnimationDropLeft>
            <AnimationDropRight className={Styles.title}>기타</AnimationDropRight>
            <AnimationDropLeft className={Styles.stack}>Git</AnimationDropLeft>
            <AnimationDropLeft className={Styles.stack}>Bash</AnimationDropLeft>
            
        </AnimationContainer>
    </Layout>
)
