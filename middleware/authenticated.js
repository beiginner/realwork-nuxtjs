// 用来校验是否登录的中间件
export default function({store, redirect}){
    if(!store.state.user){
        return redirect('/login')
    }
}