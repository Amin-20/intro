import { faAlignLeft } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NavBar extends Component {
  style = {};

  render() {
    return (
      <div>
        <Navbar className="my-1" color="dark" dark>
          <NavbarBrand href="/">
          <FontAwesomeIcon icon={faAlignLeft} />
          </NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
