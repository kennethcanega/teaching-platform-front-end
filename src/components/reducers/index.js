import { combineReducers } from 'redux'
import {SET_CONTENTS} from "../actions/actions";


const initialState = {
    contents: [],
}


const contentReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CONTENTS:
            return {
                ...state,
                contents: action.payload,
            }
        default:
            return state
    }
}


export default combineReducers({
    contentReducer: contentReducer
})
