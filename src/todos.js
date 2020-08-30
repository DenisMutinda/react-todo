import React from 'react';

const Todos = ({ todos, deleteTodo }) => {

    const todoList = todos.length ? 
        (
            todos.map(todo => {
                return (
                    <div className="collection-item" key={todo.id} >
                        <span>
                            {todo.content}
                            <button className="btn waves-effect waves-light right" type="submit" name="action" onClick={() =>{deleteTodo(todo.id)}}>
                                Delete
                                <i className="material-icons right">delete_forever</i>
                            </button>
                        </span>
                    </div>
                )
            })
        ) : (
            <p className="center">You are free.... YaY!!!</p>
        );

    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos;