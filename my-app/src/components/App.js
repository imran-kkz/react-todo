import React from 'react'
import ToDoItem from './ToDoItem'
import todoData from './todoData'
import "./styles.css"

function App (){

    const todoList = todoData.map(item=> <ToDoItem key={item.id} text={item.text} check={item.completed}/>)
    return(
        <div className="todo-list">
            {todoList}
        </div>
    )
}
export default App