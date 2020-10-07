import React from "react";
import { Card, Image, Col } from "react-bootstrap";
import propTypes from "prop-types"

// import useravatar from "./user.jpg";

import "./UserCard.css";

const UserCard = ({person}) => {
  
  return (
    <div className="profile-card">
      <Card
        style={{
          width: "18rem",
          height: "25rem",
          marginRight: "30px",
          marginBottom: "20px",
          marginTop: "30px",
          backgroundColor: "white",
          borderRadius: "8px",
          border: "transparent",
          boxShadow: "0 10px 10px 0 rgba(0,0,0,0.2)"
        }}
      >
        <Card.Header
          style={{
            borderTopRightRadius: "8px",
            borderTopLeftRadius: "8px",
            backgroundColor: "#277fa5",
            height: "13rem"
          }}
        />
        <Col>
          <Image
            src={person.src}
            roundedCircle
            style={{
              height: "150px",
              width: "150px",
              position: "relative",
              bottom: "80px",
              border: "10px solid white",
              backgroundColor: "transparent"
            }}
          />
        </Col>
        <Card.Body style={{ position: "relative", bottom: "90px" }}>
          <Card.Title style={{ margin: "0", color: "#505151" }}>
            {person.name}
          </Card.Title>
          <Card.Text style={{ fontSize: "small", color: "#4baed4" }}>
            {person.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};


UserCard.defaultProps={
    name : 'Mohamed',
    email : 'mohamed@gmil.com',
    phone: '0000000000',
    // children : <h1>Hello</h1>
}

UserCard.propTypes={
    name: propTypes.string,
    email : propTypes.string,
    // phone : propTypes.number,
    // children : propTypes.node.isRequired
}

export default UserCard
