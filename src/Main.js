import React, { Component } from 'react'

export default class Main extends Component {

  style={
    position: "absolute",
    marginTop:"-40%",
    marginLeft:"26%"
  };

  style2={
    position: "absolute",
    marginTop:"-60%",
    marginLeft:"80%",
    fontSize:"140px"
  };



  render() {
    return (
      <div style={this.style}>
        <img style={{width:"70%",display:"flex"}} src='https://cdn.icon-icons.com/icons2/2389/PNG/512/react_logo_icon_144942.png'></img>
        <p style={this.style2}>reactstrap</p>
        <p style={{fontSize:"70px",position:"absolute",width:"250%",marginLeft:"-80px"}}>Responsive Sidebar Template</p>
      </div>
    )
  }
}
