import {createStore} from 'redux'

const initialState ={
  name: 'risano'
}
const rootReducer = (state = initialState, action)=>{
  return state
}


const store = createStore(rootReducer)

export default store