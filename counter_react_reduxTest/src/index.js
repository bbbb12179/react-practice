import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux'
import { Provider } from 'react-redux'
import Counter from './components/Counter'
import defaultReducer from './reducers'
import logger from 'redux-logger'

const store = createStore(defaultReducer, applyMiddleware(logger))
const rootEl = document.getElementById('root')


render(
  <Provider store={store}>
    <Counter />
  </Provider>,
  rootEl
)
// store.subscribe(render)
