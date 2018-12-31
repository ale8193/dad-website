const jQuery = window.jQuery;

export const BREAKPOINTS = {
    desktop: {
        size: -1, // Means infinite
        code: 'D'
    },
    tablet: {
        size: 840,
        code: 'T'
    },
    mobile: {
        size: 600,
        code: 'M'
    }
}

export const getScreenType = () => {
    const screenWidth = jQuery(window).width();
    let type = '';
    
    if (screenWidth < BREAKPOINTS.mobile.size) {
        type = BREAKPOINTS.mobile.code;
    } else if (screenWidth < BREAKPOINTS.tablet.size) {
        type = BREAKPOINTS.tablet.code;
    } else {
        type = BREAKPOINTS.desktop.code;
    }

    return type;
}