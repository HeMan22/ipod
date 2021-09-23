import React from 'react';
import './Screen.css';

class Screen extends React.Component {
    render() {
        return (
            <div className="screen1">
                <ul>
                    <li>Cover Flow</li>
                    <li>Music</li>
                    <li>Games</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }
}

export default Screen;