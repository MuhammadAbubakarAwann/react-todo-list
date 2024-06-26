import React, { Component } from 'react'
import TodoItem from './TodoItem'



export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="List-group my-5">
        <h3 className='text-capitalize text-center'><b>todo-list</b></h3>
        {items.map(item => {
          return (
            <TodoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)} />

          )
        })}
        <button type="button" className="form-control btn btn-danger btn-block text-uppercase mt-5" onClick={clearList}>clear list</button>
      </ul>
    )
  }
}
