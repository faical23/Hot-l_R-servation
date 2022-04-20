const UserState = {
    Inscription:false,
    Login:false,
    UserData:{},
    Réserve:false,
    CityHotels:null,
    TypeHotels:null
}

const StoreReducer = (UserState, action) =>{
    if(action.type === 'OPEN_CONNEXION')
        return{...UserState,Inscription : true,Login : false}
    if(action.type === 'OPEN_LOGIN')
        return{...UserState,Inscription : true,Login : true}
    if(action.type === 'OPEN_RESERVE')
        return{...UserState,Réserve : true}
    if(action.type === 'CLOSE_POPUP')
        return{...UserState,Inscription : false,Login : false,Réserve:false}
    if(action.type === 'GET_HOTELS_BY_CITY'){
        return{...UserState,CityHotels:action.Data}
    }
    if(action.type === 'GET_HOTELS_BY_TYPE'){
        console.log(action.Data)
    }
}

export default StoreReducer