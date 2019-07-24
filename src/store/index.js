//暂未搭建
import { createStore } from 'redux'
import {TESTDATE} from './types'

const defaultState = {
  inputVal : '122'
}

const reducer =  (state = defaultState, action) => {

    const newState =  JSON.parse(JSON.stringify(state))
    switch (action.type){
      case TESTDATE:
        newState.inputVal = action.inputVal
        break 
    }
    return newState
  };

const store = createStore(reducer)

export default store