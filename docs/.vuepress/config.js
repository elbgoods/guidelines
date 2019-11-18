module.exports = {
    base: process.env.BASE || '/',
    title: 'Elbgoods Guidelines',
    head: [
        ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'PHP', link: '/php/' },
            { text: 'JS', link: '/js/' },
            { text: 'API', link: '/api/' },
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
            '/api/': [
                '',
            ],
        }
    }
};