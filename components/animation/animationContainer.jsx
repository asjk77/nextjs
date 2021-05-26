/*
 * File Name      : animatior.jsx 
 * Created Date   : Monday, May 10th 2021, 5:27:00 am
 * Author         : Hwang SanHo 
 * Email          : tksgh1000@naver.com 
 * Copyright (c) 2021 San Form Co. 
 */

// animator컴포넌트입니다
import React, { cloneElement, Component, createRef } from "react";
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import Styles from './animationContainer.module.css';

class AnimationContainer extends Component
{
    constructor(props) {
        super(props);
        this.childrenRefs = [];
    }

    componentDidMount() {
        this.activateScrollElement();
        // 스크롤 이벤트를 등록한다.
        this.setupScrollEvent(
            this.activateScrollElement
            );
    }
    componentWillUnmount() {
        const result = window.removeEventListener('scroll', this.activateScrollElement );
    }

    activateScrollElement = () => {
        this.childrenRefs = this.childrenRefs.map( element=>{
            if (element?.getBoundingTopPosition() < window.innerHeight / 2 + 200) {
                element.activateElement();
                return;
            }
            return element;
        } );
       console.log('activationScrollElement')
    }

    setupScrollEvent( func ) {
        // console.log 스크롤 이벤트를 등록합니다.
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', func );
        }
    }

    getChildrenWithRef() {
        var refCnt = 0;
        return React.Children.map( this.props.children,
            ( child, index ) => (
                React.cloneElement( child,
                child.type.displayName == 'AE' ? {
                    ref: (node) => {
                        this.childrenRefs[refCnt++] = node;
                    }
                } : { }
                )
            )
            );
    }

    render() {
        // 자식 노드에 만약 자식 노드가 AE의 displayName이 'AE'일경우 REF를 붙여서 랜더링합니다.

        const _classnames = classnames( this.props.className, Styles.container );
        return(
            <div {... this.props} className={_classnames} >
                {this.getChildrenWithRef()}
            </div>
        );

    }
}

export default AnimationContainer;