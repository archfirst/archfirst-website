// Based on the following theme:
// https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-wordpress-2016/src/index.js
//
// With following font replacements:
//     Merriweather ---> Domine    (Serif)
//     Montserrat   ---> Open Sans (Sans Serif)
import gray from 'gray-percentage';
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants';

const theme = {
    title: 'Archfirst Theme',
    baseFontSize: '16px',
    baseLineHeight: 1.75,
    scaleRatio: 5 / 2,
    headerFontFamily: ['Domine', 'serif'],
    bodyFontFamily: ['Open Sans', 'sans-serif'],
    bodyColor: 'hsla(0,0%,0%,0.9)',
    headerWeight: 700,
    bodyWeight: 400,
    boldWeight: 700,
    overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
        blockquote: {
            ...scale(1 / 5),
            color: gray(41),
            fontStyle: 'italic',
            paddingLeft: rhythm(13 / 16),
            marginLeft: rhythm(-1),
            borderLeft: `${rhythm(3 / 16)} solid ${gray(10)}`
        },
        'blockquote > :last-child': {
            marginBottom: 0
        },
        'blockquote cite': {
            ...adjustFontSizeTo(options.baseFontSize),
            color: options.bodyColor,
            fontWeight: options.bodyWeight
        },
        'blockquote cite:before': {
            content: '"— "'
        },
        ul: {
            listStyle: 'disc'
        },
        [MOBILE_MEDIA_QUERY]: {
            'ul,ol': {
                marginLeft: rhythm(1)
            },
            blockquote: {
                marginLeft: rhythm(-3 / 4),
                marginRight: 0,
                paddingLeft: rhythm(9 / 16)
            }
        },
        'h1,h2,h3,h4,h5,h6': {
            marginTop: rhythm(2)
        },
        h1: {
            fontSize: '34px'
        },
        h2: {
            fontSize: '26px'
        },
        h3: {
            fontSize: '22px'
        },
        h4: {
            fontSize: '20px',
            letterSpacing: '0.140625em',
            textTransform: 'uppercase'
        },
        h5: {
            fontSize: '16px'
        },
        h6: {
            fontSize: '14px',
            fontStyle: 'italic'
        },
        a: {
            color: '#026ed2',
            textDecoration: 'none',
            fontWeight: 600
        },
        'a:hover,a:active': {
            color: '#296298',
            borderBottom: '3px solid #eeeeee'
        },
        'mark,ins': {
            background: '#026ed2',
            color: 'white',
            padding: `${rhythm(1 / 16)} ${rhythm(1 / 8)}`,
            textDecoration: 'none'
        },
        'code,kbd,pre,samp': {
            fontSize: '13px',
            fontFamily: 'Roboto Mono, monospace',
            lineHeight: 1
        }
    })
};

export default theme;
