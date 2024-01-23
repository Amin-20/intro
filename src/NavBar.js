import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  style = {
    position: "absolute",
    marginLeft:"24%",
    marginTop:"14px",
    width:"75.5%",
    border:"3px solid"

    
  };

  style2={
    backgroundColor:"#47a3b9",
    padding:"15px"

  };


  render() {
    return (
      <div style={this.style}>
        <Navbar className="my-1" >
          <NavbarBrand href="/">
            <div style={this.style2}>
           <FontAwesomeIcon icon={faAlignLeft} style={{color:"#fff"}}/>
              
            </div>
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
