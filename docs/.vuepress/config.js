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
            {text: 'DB', link: '/db/'},
            {text: 'JS', link: '/js/'},
            {text: 'API', link: '/api/'},
            {text: 'Planning', link: '/planning/'},
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
            '/db/': [
                '',
            ],
            '/js/': [
                '',
                '/js/vue/',
            ],
            '/api/': [
                '',
            ],
            '/planning/': [
                '',
                '/planning/external/',
            ],
        },
        lastUpdated: 'Last Updated',
        repo: 'elbgoods/guidelines',
        docsDir: 'docs',
        editLinks: true,
        algolia: {
            apiKey: '3926566425942c14a55f065f8c8a5a93',
            indexName: 'elbgoods_guidelines'
        }
    }
};
