// nuxtjs 配置文件

module.exports = {
    router:{
        linkActiveClass:'active',
        // 自定义路由表规则
        extendRoutes (routes, resolve) {
            // 清除nuxtjs 基于pages目录生成的默认路由表规则
            routes.splice(0)
            routes.push(...[
                {
                    path:'/',
                component: resolve
                (__dirname, 'pages/layout/'),
                children:[
                    {
                        path:'', //默认子路由
                        name: 'home',
                        component: resolve(__dirname, 'pages/home/')
                    },
                    {
                        path:'/login',
                        name: 'login',
                        component:resolve(__dirname, 'pages/login')
                    },
                    {
                        path:'/register',
                        name: 'register',
                        component:resolve(__dirname, 'pages/login')
                    },
                    {
                        path:'/profile/:username',
                        name: 'profile',
                        component:resolve(__dirname, 'pages/profile')
                    },
                    {
                        path:'/setting',
                        name: 'setting',
                        component:resolve(__dirname, 'pages/setting')
                    },
                    {
                        path:'/editor',
                        name: 'editor',
                        component:resolve(__dirname, 'pages/editor')
                    },
                    {
                        path:'/article/:slug',
                        name: 'article',
                        component:resolve(__dirname, 'pages/article')
                    }
                ]
                }
            ])
        }
    },

    server:{
        host:'0.0.0.0',  //监听所有的网卡地址，通过外网地址也可以访问到
        port:3001
    },

    // 注册插件
    plugins:[
        '~/plugins/request.js',
        '~/plugins/dayjs.js'
    ]
}