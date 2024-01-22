import React, { Component } from "react";
import {ListGroup,ListGroupItem} from "reactstrap";
import './SideBar.css';


export default class SideBar extends Component {
    style={
      backgroundColor:"#883BFF",
      color:"white",
      border:"0px",
      
    }

  render() {
    return (
      <div>
        <ListGroup>
          <ListGroupItem style={this.style} >Bootstrap Side Bar</ListGroupItem>
          <ListGroupItem style={this.style} >Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem style={this.style} >Morbi leo risus</ListGroupItem>
          <ListGroupItem style={this.style} >Porta ac consectetur ac</ListGroupItem>
          <ListGroupItem style={this.style} >Vestibulum at eros</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
