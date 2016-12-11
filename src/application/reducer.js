import { combineReducers } from 'redux'
import todos from './visibleTodoList/reducer'
import visibilityFilter from './filterLink/reducer'

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
