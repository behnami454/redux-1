import React from 'react'
import  ReactDOM  from 'react-dom'
import { createStore } from 'redux'
import Counter from './components/Counter'
import counter from './reducers'
import './components/Counter.css'

const store = createStore(counter)
const rootElement = document.getElementById('root')

const render = () => ReactDOM.render(
    <Counter 
    value = {store.getState()}
    onIncrease = {()=> store.dispatch({ type: 'INCREASE' })}
    onDecrease = {()=> store.dispatch({ type: 'DECREASE' })}
    />,rootElement
)
render()
store.subscribe(render)