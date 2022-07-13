import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'

function MovieCards(props) {
  return (
     <>
    {props.MovieArray &&
    props.MovieArray.map((item, index) => (
        <Col key={index} style={{"padding":"20px"}}>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} style={{"width":"100%","height":"300px"}} />
          <Card.Body>
            <Card.Title style={{"fontSize":"18px"}}>{item.title}</Card.Title>
            <Card.Text  style={{"width":"100%","height":"200px"}}>
            {item.description.length>200 ? (`${item.description.substring(0,200)}...`):item.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card></Col>
      )
    )}</>
  )
}

export default MovieCards