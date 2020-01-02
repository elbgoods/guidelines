const moment = require('moment');

module.exports = {
    plugins: [
        [
            '@vuepress/last-updated',
            {
                transformer: (timestamp, lang) => moment(timestamp).format('YYYY-MM-DD HH:mm'),
            }
        ]
    ],
    base: process.env.BASE || '/',
    title: 'Elbgoods Guidelines',
    head: [
        ['link', {rel: "shortcut icon", href: "/favicon.ico"}],
    ],
    themeConfig: {
        sidebarDepth: 2,
        nav: [
            { text: 'Home', link: '/' },
            { text: 'PHP', link: '/php/' },
            { text: 'JS', link: '/js/' },
            { text: 'API', link: '/api/' },
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
        },
        lastUpdated: 'Last Updated',
        repo: 'Gummibeer/eg-guidelines',
        docsDir: 'docs',
        editLinks: true,
    }
};
