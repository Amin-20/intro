import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import "./SideBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faFile, faImage, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faHome,
  faInfo,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";

export default class SideBar extends Component {
  style = {
    backgroundColor: "#7386d7",
    color: "white",
    border: "0px",
    width: "23%",
    borderRadius: "0px",
    fontSize: "20px",
    cursor:'pointer',
    textAlign:"left",
    fontWeight:"bold",
    height:"50px"
  };

  style2 = {
    width: "23%",
    backgroundColor: "#6d7fcc",
    textAlign: "left",
    color: "white",
    height: "200px",
  };

  styleIcon={
    paddingRight:"20px"
  }

  render() {
    return (
      <div>
        <div style={this.style2}>
          <h1 style={{ marginLeft: "30px", paddingTop: "40px"}}>Bootstrap</h1>
          <h1 style={{ marginLeft: "30px" }}>Sidebar</h1>
        </div>
        <ListGroup>
          <ListGroupItem style={this.style} id="first">
            Dummy Heading
          </ListGroupItem>
          <ListGroupItem style={this.style}><FontAwesomeIcon style={this.styleIcon} icon={faHome} /> Home <FontAwesomeIcon style={{marginLeft:"230px"}} icon={faCaretDown} /></ListGroupItem>
          <ListGroupItem style={this.style}><FontAwesomeIcon style={this.styleIcon} icon={faInfo} /> About</ListGroupItem>
          <ListGroupItem style={this.style}><FontAwesomeIcon style={this.styleIcon} icon={faFile} />  Pages <FontAwesomeIcon style={{marginLeft:"240px"}} icon={faCaretDown} /></ListGroupItem>
          <ListGroupItem style={this.style}><FontAwesomeIcon style={this.styleIcon} icon={faImage} /> Portfolio</ListGroupItem>
          <ListGroupItem style={this.style}><FontAwesomeIcon style={this.styleIcon} icon={faQuestion} /> FAQ</ListGroupItem>
          <ListGroupItem style={this.style} id="last"><FontAwesomeIcon icon={faPaperPlane} /> Contact</ListGroupItem>
        </ListGroup>
      </div>
    );
  }
}
