
import './App.css';
import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid';

import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {

  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value
    })
  }

  handleAdd = (e) => {
    e.preventDefault();

    const newItem = {
      id: this.state.id,
      title: this.state.item
    }

    const updatedItem = [...this.state.items, newItem]
    this.setState({
      items: updatedItem,
      item: '',
      editItem: false,
      id: uuidv4()
    }, () => {
      console.log(this.state)
    })
  }

  clearList = () => {
    this.setState({
      items: []
    })
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    })
  }
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    const selectedItem = this.state.items.find(item => item.id === id);
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
  }


  componentDidUpdate() {
    localStorage.setItem('todoItems', JSON.stringify(this.state.items));
  }


  componentDidMount() {
    const storedItems = JSON.parse(localStorage.getItem('todoItems'));
    if (storedItems) {
      this.setState({ items: storedItems });
    }
  }
  render() {

    return (
      <div className='container'>
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput item={this.state.item} handleChange={this.handleChange} handleAdd={this.handleAdd} editItem={this.state.editItem} />
            <TodoList items={this.state.items} clearList={this.clearList} handleEdit={this.handleEdit} handleDelete={this.handleDelete} />
          </div>

        </div>

      </div>
    )
  }
}
