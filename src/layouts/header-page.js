import React from 'react';
import Link from 'gatsby-link';
import logo from './logo-page.png';

export function HeaderPage() {
    return (
        <div className="banner banner__page">
            <Link to="/">
                <img src={logo} alt="Archfirst" className="logo" />
            </Link>
        </div>
    );
}
