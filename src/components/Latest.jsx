import React from "react"
import { Card, Button, Row } from "react-bootstrap"

const Latest = (props) => {
  console.log(props.genre)

  return (
    <>
      <h1>{props.title}</h1>
      <Row>
        {props.genre.map((book) => (
          <Card style={{ width: "12rem" }}>
            <Card.Img variant="top" src={book.img} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>{book.category}</Card.Text>
              <Button variant="primary">Buy</Button>
            </Card.Body>
          </Card>
        ))}
        )
      </Row>
    </>
  )
}

export default Latest
