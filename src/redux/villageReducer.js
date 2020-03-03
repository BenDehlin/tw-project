const SET_VILLAGE = 'SET_VILLAGE'
const SET_VILLAGES = 'SET_VILLAGES'

const initialState = {
  village: {},
  villages: []
}

export function setVillage(payload){
  console.log('hit setVillage')
  return {type: SET_VILLAGE, payload}
}

export function setVillages(payload){
  console.log('hit setVillages')
  return {type: SET_VILLAGES, payload}
}

export default function villageReducer(state = initialState, action){
  const {type, payload} = action
  switch(type){
    case SET_VILLAGE:
      return {...state, village: payload}
    case SET_VILLAGES:
      return {...state, villages: payload}
    default:
      return state
  }
}