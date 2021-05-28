module.exports = {
    base: '/', // 路由basePath
    dest: 'uma', // 输出目录
    title: 'UMajs 文档', // 标题
    markdown: { // markdown配置
        lineNumbers: true,
    },
    themeConfig: {
        repo: 'https://github.com/Umajs/Umajs', // github链接配置
        repoLabel: 'Git',
        nav: [ // 导航栏配置
            {
                text: '介绍',
                link: '/新手指南/框架介绍'
            },
            {
                text: 'QuickStart',
                link: '/新手指南/快速开始'
            },
            {
                text: 'React+SSR',
                link: '服务端渲染/React-ssr',
            },
        ],
        sidebar: [ // 侧边栏配置
            {
                title: '新手指南',
                collapsable: false,
                children: [
                    '新手指南/框架介绍',
                    '新手指南/Uma',
                    '新手指南/快速开始',
                ],
            },
            {
                title: '基础功能',
                collapsable: false,
                children: [
                    '基础功能/Uma 对象',
                    '基础功能/Router',
                    '基础功能/Controller',
                    '基础功能/Result',
                    '基础功能/Service',
                    '基础功能/Plugin',
                    '基础功能/IOC',
                    '基础功能/AOP',
                    '基础功能/Config',
                    '基础功能/Middleware',
                    '基础功能/Decorator',
                ],
            },
            {
                title: '插件',
                collapsable: true,
                children: [
                    '插件/Status',
                    '插件/Static',
                    '插件/Views',
                    '插件/i18n',
                    '插件/Logger',
                    '插件/Session',
                ],
            },
            {
                title: '其它',
                collapsable: true,
                children: [
                    'other/path',
                    'other/ArgDecorator',
                    'other/断点调试',
                    'other/错误处理',
                    'other/渐进迁移'
                ],
            },
            {
                title: '服务端渲染',
                collapsable: true,
                children: [
                    '服务端渲染/React-ssr',
                ],
            },

        ],
    },
};
