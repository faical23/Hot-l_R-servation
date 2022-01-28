const UserState = {
    Inscription:false,
    Login:false,
    UserData:{},
    Réserve:false
}

const StoreReducer = (state = UserState, action) =>{
    if(action.type === 'OPEN_CONNEXION')
        return{...UserState,Inscription : true,Login : false}
    if(action.type === 'OPEN_LOGIN')
        return{...UserState,Inscription : true,Login : true}
    if(action.type === 'OPEN_RESERVE')
        return{...UserState,Réserve : true}
    if(action.type === 'CLOSE_POPUP')
        return{...UserState,Inscription : false,Login : false,Réserve:false}
    return state
}

export default StoreReducer