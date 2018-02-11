import React from 'react';
import 'typeface-domine';
import 'typeface-open-sans';
import 'typeface-roboto-mono';
import { HeaderHome } from './header-home';
import { HeaderPage } from './header-page';

import 'prismjs/themes/prism-okaidia.css';
import './layout.css';

export default class Template extends React.Component {
    render() {
        const { location, children } = this.props;

        let rootPath = `/`;
        if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
            rootPath = __PATH_PREFIX__ + `/`;
        }

        return (
            <div>
                {location.pathname === rootPath ? (
                    <HeaderHome />
                ) : (
                    <HeaderPage />
                )}
                <div className="content">{children()}</div>
            </div>
        );
    }
}
