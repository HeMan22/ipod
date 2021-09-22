import React from 'react';
import './Control.css';
import ZingTouch from 'zingtouch';

const Controls = () => {
    return (

        <div className="main-div">

            <div className="menu"> <span>MENU</span></div>
            <div className="backward-div"><i class="fa fa-fast-backward" aria-hidden="true"></i></div>
            <div className="center-div"></div>
            <div className="forward-div"><i class="fa fa-fast-forward" aria-hidden="true"></i></div>
            <div className="play-pause"><i class="fa fa-pause" aria-hidden="true"></i></div>
        </div >

    )
}

export default Controls;
