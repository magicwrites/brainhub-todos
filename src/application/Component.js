import React from 'react'
import Footer from './footer/Component'
import AddTodo from './addTodo/ContainerComponent'
import VisibleTodoList from './visibleTodoList/ContainerComponent'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App
