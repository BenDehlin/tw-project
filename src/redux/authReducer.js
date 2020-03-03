const SET_PLAYER = 'SET_PLAYER'

const initialState = {
  player: {
    player_id: '',
    username: '',
    email: ''
  }
}

export function setPlayer(payload){
  return{type: SET_PLAYER, payload}
}

export default function authReducer(state = initialState, action){
  const {type, payload} = action
  switch (type){
    case SET_PLAYER:
      return {...state, player: payload}
    default:
      return state
  }
}