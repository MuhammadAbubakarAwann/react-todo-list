
import './App.css';
import React, { Component } from 'react'
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className="row">
          <TodoInput/>
          <TodoList/>
        </div>
        
      </div>
    )
  }
}
