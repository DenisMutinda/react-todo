import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (event) =>{
        this.setState({
            content: event.target.value
        })
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addTodo(this.state);
        event.target.reset();
    }
    
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <label >Add new item:</label>
                    <input type="text" onChange={this.handleChange} />
                </form>

            </div>
        )
    }
}

export default AddTodo;