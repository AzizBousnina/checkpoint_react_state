import React, { Component } from "react";
import image from "./pic.jpg";

export default class Profile extends Component {

    constructor(props) {
        super(props);
  this.Profile= {fullName:"Aziz Bousnina", 
        bio:"Hello everybody my name is Aziz, im 22 years old I am a musician playing guitar for 8 years and im Fullstack Js Developper",
        profession:"Web Developper, Musician",
        img: image
        }

        this.state={count:0}
      }

      componentDidMount(){
       setInterval(()=>{
  this.setState(prevState=>({count: prevState.count+1}))},1000)
    }
      render() {
  return (
    <div>
      <img
        src={this.Profile.img} alt="pic"style={{width: "200px",display: "flex",margin: "auto",borderRadius: "100px"}}/>
        <div style={{ color: " rgb(154, 148, 148)", textAlign: "center" }}>
        <h1>{this.Profile.fullName}</h1>
        <h3>{this.Profile.bio}</h3>
        <h4>{this.Profile.profession}</h4>
      <h2>{this.state.count} Seconds</h2>
      </div>
    </div>
  )
}
}