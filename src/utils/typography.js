import Typography from 'typography';
import archfirstTheme from './typography-theme-archfirst';

archfirstTheme.overrideThemeStyles = () => ({
    // Prevent underline on image links
    'a.gatsby-resp-image-link': {
        border: 'none'
    }
});

const typography = new Typography(archfirstTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
