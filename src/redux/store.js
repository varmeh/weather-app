import promise from 'redux-promise'
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'

import rootReducer from './reducers/rootReducer'

const middlewareProd = [ promise ]

const middlewareDev = [ ...middlewareProd, logger ]

const middleware = process.env.NODE_ENV === 'production' ? middlewareProd : middlewareDev

export default createStore(rootReducer, applyMiddleware(...middleware))

