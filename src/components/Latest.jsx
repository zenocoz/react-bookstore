import React from "react"
import fantasy from "../my_books/fantasy.json"
import history from "../my_books/history.json"
import horror from "../my_books/horror.json"
import romance from "../my_books/romance.json"
import scifi from "../my_books/scifi.json"

import { Card, Button, Row } from "react-bootstrap"

const Latest = (props) => {
  console.log("fantasy", fantasy)
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
