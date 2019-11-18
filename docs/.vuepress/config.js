module.exports = {
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'PHP', link: '/php/' },
            { text: 'JS', link: '/js/' },
            { text: 'GitHub', link: 'https://github.com/Gummibeer/eg-guidelines' },
        ],
        sidebar: {
            '/php/': [
                '',
                '/php/laravel/',
            ],
            '/js/': [
                '',
                '/js/vue/',
            ],
        }
    }
};