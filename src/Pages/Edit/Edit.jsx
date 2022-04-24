import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import image from "../Home/Artist1.jpeg"; 
import "../Artists/Artists.css";
import { Link } from "react-router-dom";

export const Edit = () => {
  return (
      <div>
          <div className="container">
    <div className="card">
        <div className="info"> <span>Edit form</span> <button id="savebutton">edit</button> </div>
        <div className="forms">
            <div className="inputs"> <span>First Name</span> <input type="text" readonly value=""/> </div>
            <div className="inputs"> <span>Last Name</span> <input type="text" readonly value=""/> </div>
            <div className="inputs"> <span>Email</span> <input type="text" readonly value=""/> </div>
            <div className="inputs"> <span>UserName</span> <input type="text" readonly value=""/> </div>
            {/* <div className="inputs"> <span>Country</span> <input type="text" readonly value="United States"/> </div> */}
        </div>
    </div>
</div>

      </div>
  )}