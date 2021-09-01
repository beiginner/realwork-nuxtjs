const cookieparser = process.serve ? require('cookieparser') : undefined
export const state = () => {
    return {
        user: undefined
    }
}

export const mutations = {
    setUser(state, data){
        state.user = data
    }
}

export const actions = {
    // nuxt特殊的action方法， 会在服务端渲染期间自动调用
    // 作用： 初始化容器数据， 传递数据给客户端使用
    nuxtServeInit({commit}, {req}){
         let user = null

        //  如果请求头有cookie
        if(req.headers.cookie){
            const parsed = cookieparser.parse(req.header.cookie)
            try{
                user = JSON.parse(parsed.user)
            }catch(err){

            }
        }

        commit('setUser', user)
    }
}