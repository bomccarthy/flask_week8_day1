import React, { Component } from 'react'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './views/Home';
import Login from './views/Login';
import Signup from './views/Signup';
import Chart from './views/Chart';
import List from './views/List';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      confirmPw: ''
    };
    console.log('construction is done')
  }

  componentDidMount = () => {
    console.log('first rendering is complete')
  }

  render() {
    console.log('rendering is about to happen')
    return (

      <Router>
        <div>
          <Nav />

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/login' element={<Login />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='/list' element={<List />} />

          </Routes>
          
          <Footer />
        </div>
      </Router>
    )
  }
}
