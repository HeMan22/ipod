import React, { useRef, useState } from 'react';
import './Control.css';
import ZingTouch from 'zingtouch';

const Controls = () => {

    let rotatable = useRef()
    let touchSense = useRef();
    let currentAngle = 15;
    const touch = () => {

        let region = new ZingTouch.Region(rotatable);
        region.bind(rotatable, 'rotate', function (e) {

            currentAngle += e.detail.distanceFromLast;
            console.log(e);
            console.log(currentAngle);

        })
    }

    return (

        <div className="main-div" ref={touchSense}>
            <div className="menu"> <span>MENU</span></div>
            <div className="center" ref={rotatable}>
                <div className="backward-div"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>
                <div className="center-div"></div>
                <div className="forward-div"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>
            </div>
            <div className="play-pause"><i class="fa fa-pause" aria-hidden="true"></i></div>
            <div className="interaction"></div>
        </div >

    )
}

export default Controls;
