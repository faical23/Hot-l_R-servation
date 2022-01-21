const UserState = {
    Inscription:false,
    Login:false,
    UserData:{},
}

const StoreReducer = (state = UserState, action) =>{
    if(action.type === 'OPEN_CONNEXION')
        return{...UserState,Inscription : true,Login : false}
    if(action.type === 'OPEN_LOGIN')
        return{...UserState,Inscription : true,Login : true}
    if(action.type === 'CLOSE_CONNEXION')
        return{...UserState,Inscription : false,Login : false}
    return state
}

export default StoreReducer