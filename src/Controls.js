import React, { useRef, useState } from 'react';
import './Control.css';
import ZingTouch from 'zingtouch';

const Controls = () => {

    const touch = () => {
        let target = useRef('touch-sense');
        let region = new ZingTouch.Region(target);
    }

    return (

        <div className="main-div" ref="touch-sense">
            <div className="menu"> <span>MENU</span></div>
            <div className="center">
                <div className="backward-div"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>
                <div className="center-div"></div>
                <div className="forward-div"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>
            </div>
            <div className="play-pause"><i class="fa fa-pause" aria-hidden="true"></i></div>
        </div >

    )
}

export default Controls;
