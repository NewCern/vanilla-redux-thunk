import { combineReducers } from "redux"
import axios from  "axios"

// utilizing the REQUEST, SUCESS, and FAILURE PATTERN
const initialApiState = {
    api:[],
    loading: false,
    error: null
}

// ACTIONS
// Redux Thunk Will be implemented Here.
// Thunk permits asyncronous API calls to be placed within an action
export const fetchApi = () => async(dispatch, getState) => {
    dispatch({ type: "FETCH_API" })

    try {
        const {data} = await axios.get("https://www.fishwatch.gov/api/species");
        // if successfull
        dispatch({
            type: "FETCH_SUCCESS", 
            payload: data,
        })

    } catch (error) {
        // if request failed
        dispatch({
            type: "FETCH_FAILURE",
            error: error,
        })

    }
}

// REDUCER
const apiReducer = (state = initialApiState, action) => {
    switch(action.type){
        case "FETCH_API":
            return {
                ...state,
                loading: true,
                error: null,
            }

        case "FETCH_SUCCESS":
            return {
                ...state,
                loading: false,
                api: action.payload,
            }

        case "FETCH_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.error,
            }
        
        default:
            return state;
    }
}

const rootReducers = combineReducers({
    apiReducer: apiReducer,
})

export default rootReducers;

