import React, { Component } from 'react'
import Nav from './Nav';
import Footer from './Footer'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      fname: '',
      lname: '',
      email: '',
      username: '',
      password: '',
      confirmPw: ''
      };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('construction is done')
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state.fname);
    console.log(this.state.lname);
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    console.log(this.state.password === this.state.confirmPw);
    event.preventDefault();
  }

  componentDidMount = () => {
    console.log('first rendering is complete')
  }

  render() {
    console.log('rendering is about to happen')
    return (
      <div className="jumbotron vertical-center bg-dark text-light">
        <Nav />
        <form onSubmit={this.handleSubmit}>
          <div className="container align-middle">
            <div className="row m-1">
              <div className="col text-right">
                <label>First Name:</label>
              </div>
              <div className="col">
                <input name="fname" type="value" value={this.state.fname} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label>Last Name:</label>
              </div>
              <div className="col">
                <input name="lname" type="value" value={this.state.lname} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label>Email:</label>
              </div>
              <div className="col">
                <input name="email" type="value" value={this.state.email} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label>Username:</label>
              </div>
              <div className="col">
                <input name="username" type="value" value={this.state.username} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label>Password:</label>
              </div>
              <div className="col">
                <input name="password" type="value" value={this.state.password} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label>Confirm Password:</label>
              </div>
              <div className="col">
                <input name="confirmPw" type="value" value={this.state.confirmPw} onChange={this.handleInputChange} />
              </div>
            </div>
            <div className="row m-1">
              <div className="col text-right">
                <label> </label>
              </div>
              <div className="col">
                <input type="submit" value="Submit" />
              </div>
            </div>
          </div>
        </form>
        <Footer />
      </div>
    )
  }
}
