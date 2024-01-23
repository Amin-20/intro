import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  style = {
    position: "absolute",
    marginLeft:"24%",
    marginTop:"14px",

    
  };

  render() {
    return (
      <div style={this.style}>
        <Navbar className="my-1" color="dark" dark>
          <NavbarBrand href="/">
          <FontAwesomeIcon icon={faAlignLeft} />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
