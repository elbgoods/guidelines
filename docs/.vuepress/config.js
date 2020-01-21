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
        [
            'link',
            {
                rel: 'shortcut icon',
                href: '/favicon.ico',
            }
        ], [
            'link',
            {
                rel: 'stylesheet',
                href: '/prism-nord-theme.css',
            }
        ],
    ],
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Git', link: '/git/'},
            {text: 'PHP', link: '/php/'},
            {text: 'JS', link: '/js/'},
            {text: 'API', link: '/api/'},
        ],
        sidebarDepth: 3,
        sidebar: {
            '/git/': [
                '',
            ],
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
        repo: 'elbgoods/guidelines',
        docsDir: 'docs',
        editLinks: true,
    }
};
