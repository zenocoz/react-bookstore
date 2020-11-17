import React, { Component } from "react"
import { Container, Row, Col, Jumbotron } from "react-bootstrap"

class Home extends Component {
  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-3">
          <Col xs={6}>
            <h1>React bookstore</h1>
            <p className="lead">Check it out</p>
            <hr className="my-2" />
            <Jumbotron fluid>
              <Container>
                <h1>Welcome to the React bookstore</h1>
                <p>
                  Beautiful books, books the likes of which the world has never
                  seen,
                </p>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
