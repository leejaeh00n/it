import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';

const customer = {
  'name': '홍길동',
  'birthday': '96.12.15',
  'gender': '남자',
  'job': '직장인'

}

class App extends Component {
  render() {
    return (
     <Customer 
        name={}
        birthday={}
        gender={}
        job={}
     />
     );
  }
}

export default App;
