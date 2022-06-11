const UserState = {
}
export default function HotelsStore(state = UserState, action) {
    switch (action.type) {
    case 'SET_HOTELS':
        const hotels = action.payload
        return{...state,hotels}
    case 'CLEAR_HOTELS':
        return{...state,hotels}
    default:
        return state
    }
  }