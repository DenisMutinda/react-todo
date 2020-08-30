import React, { Component } from 'react';
import Todos from './todos';
import AddTodo from './addTodo';


class App extends Component {
  state = {
    todos: [
      {id:1,  content: 'Use the app on my phone to plan week ahead'},
      {id:2,  content: 'Do Laundry'},
    ]
  }

  deleteTodo = (id) => {
    
    //Filters out if the returned value is false
    const todos = this.state.todos.filter(
      todo => {
        return todo.id !== id
      }
    );
    this.setState({
      todos: todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo]
    this.setState ({
      todos: todos
    })
  }

  render(){
    return(
      <div className="todo-app container">
        <h1 className="center-blue-text">To-Do Tasks</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
