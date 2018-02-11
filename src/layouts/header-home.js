import React from 'react';
import logo from './logo-home.png';

export function HeaderHome() {
    return (
        <div className="banner banner__home">
            <img src={logo} alt="Archfirst" className="logo" />
            <div className="banner-message">
                Archfirst is a place for software developers to learn technology
                best practices through real-world examples.
            </div>
            <div className="banner-hook">No theoretical BS.</div>
        </div>
    );
}
