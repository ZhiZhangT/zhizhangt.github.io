import ReactGA from 'react-ga4';

export const handleSocialClick = (platform) => {
    ReactGA.event({
        category: 'Social Links',
        action: 'Click',
        label: platform,
    });
};

export const handleProjectClick = (project) => {
    ReactGA.event({
        category: 'Projects',
        action: 'Click',
        label: project,
    });
};

export const handleNavClick = (dest) => {
    ReactGA.event({
        category: 'Navigation',
        action: 'Click',
        label: dest,
    });
};