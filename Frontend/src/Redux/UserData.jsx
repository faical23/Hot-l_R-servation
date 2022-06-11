const UserState = {
}
export default function UserData(state = UserState, action) {
    switch (action.type) {        
    case 'SET_USERDATA':
        const data = action.payload;
        return{...state,data}
    case 'CLEAR_USERDATA':
        return{...state,data}
      default:
        return state
    }
  }