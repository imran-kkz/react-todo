import React from 'react'

function ToDoItem (props){
    return (
        <div className="todo-item">
            <input type="checkbox" checked={props.item.check} onChange={() => props.handleClick(props.item.id)}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default ToDoItem