const UserState = {
    Inscription:false,
    Login:false,
    UserData:{},
    Réserve:false,
    CityHotels:null,
    TypeHotels:null
}
export default function TogglePopup(state = 0, action) {
    switch (action.type) {
    case 'OPEN_CONNEXION':
        console.log("open")
        return{...state,Inscription : true,Login : false}
    case 'OPEN_LOGIN':
        return{...state,Inscription : true,Login : true}
    case 'OPEN_RESERVE':
        return{...state,Réserve : true}
    case 'CLOSE_POPUP':
        return{...state,Inscription : false,Login : false,Réserve:false}
      default:
        return state
    }
  }