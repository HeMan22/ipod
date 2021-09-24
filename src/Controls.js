import React, { useRef, useState } from 'react';
import './Control.css';
import ZingTouch from 'zingtouch';

const Controls = () => {

    let rotate = useRef('rotatable')
    let target = useRef('touch-sense');
    let currentAngle = 15;
    const touch = () => {

        let region = new ZingTouch.Region(target);
        region.bind(target, 'rotate', function (e) {

            currentAngle += e.detail.distanceFromLast;
        })
    }

    return (

        <div className="main-div" ref="touch-sense">
            <div className="menu"> <span>MENU</span></div>
            <div className="center" ref="rotatable">
                <div className="backward-div"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>
                <div className="center-div"></div>
                <div className="forward-div"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>
            </div>
            <div className="play-pause"><i class="fa fa-pause" aria-hidden="true"></i></div>
        </div >

    )
}

export default Controls;
