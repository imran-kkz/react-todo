import React from 'react'

function ToDoItem (props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.check}/>
            <p>{props.text}</p>
        </div>
    )
}

export default ToDoItem