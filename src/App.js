import React, { Component } from 'react'
import Profile from './components/Profile';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {affiche: false}; 
  }
  toggle =() => {
    this.setState({affiche: !this.state.affiche})
  }
  render() {
    return (
      <div>
      <h1>click the button</h1>
      <button onClick={this.toggle}>click here !</button>
     {this.state.affiche ? <Profile /> : null }
    
      </div>
    )
  }
}
