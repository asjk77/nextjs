/*
 * File Name      : animationElement.jsx 
 * Created Date   : Thursday, May 13th 2021, 12:39:35 pm
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

import React, { Component, createRef, forwardRef } from "react";
import classname from "classnames";
import ReactDOM from 'react-dom';
import Styles from './animationElement.module.css';

export class AnimationElement extends Component {
    static displayName = 'AE'; // Animation Element

    /**
     * activeStyle 및 unActiveStyle을 override 하세요!
     */
    activeStyle = null;
    unActiveStyle = null;

    constructor( props ) {
        super(props);
        // initState
        this.state = {
            isActivated: false
        };
        this.ref = createRef();
    }

    getBoundingTopPosition() {
        return this.ref.current?.getBoundingClientRect().top;
    }

    setBackgroundRedColor() {
        console.log( '활성화 되었습니다.' );
        return 0;
    }

    activateElement() {
        this.setState( (state) => {
            return {...state, isActivated: true};
        });
    }

    render() {
        const _classnames = classname(
            this.state.isActivated ? this.activeStyle : this.unActiveStyle,
            this.props.className
        )
        return (
        <div ref={this.ref} {... this.props} className={_classnames}>
            {this.props.children}</div>
        );
    } 
    
}

export class AnimationDropRight extends AnimationElement {
    activeStyle = Styles.AnimationDropRight_on
    unActiveStyle = Styles.AnimationDropRight_off
}

export class AnimationDropLeft extends AnimationElement {
    activeStyle = Styles.AnimationDropLeft_on
    unActiveStyle = Styles.AnimationDropLeft_off
}