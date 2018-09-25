import React, { Fragment } from 'react';
import 'typeface-domine';
import 'typeface-open-sans';
import 'typeface-roboto-mono';
import { HeaderHome } from './header-home';
import { HeaderPage } from './header-page';

import 'prismjs/themes/prism-okaidia.css';
import './layout.css';

class Template extends React.Component {
    render() {
        const { location, children } = this.props;
        const rootPath = `${__PATH_PREFIX__}/`;
        let header;

        if (location.pathname === rootPath) {
            header = <HeaderHome />;
        } else {
            header = <HeaderPage />;
        }
        return (
            <Fragment>
                {header}
                <div className="content">{children}</div>
            </Fragment>
        );
    }
}

export default Template;
