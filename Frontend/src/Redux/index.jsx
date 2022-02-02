import {useFetch} from "../Helpers"
const UserState = {
    Inscription:false,
    Login:false,
    UserData:{},
    Réserve:false,
    CityHotels:[]
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
        const GetHotel =  async() =>{
            const Data = await useFetch(action.Méthode,action.EndPoint)
            console.log("Data",Data)
            return{...UserState,CityHotels:['113','736']}
        }
        GetHotel()
        // return{...UserState,CityHotels:['bahsis','faical']}
    }
}

export default StoreReducer