import types from '../actions/types'

export default (state = [], action) => {
    switch(action.type) {
        case types.FETCH_WEATHER:
            if (action.payload.data !== undefined)
                return [ action.payload.data, ...state ]
            else
                return state

        default:
            return state
    }
}


