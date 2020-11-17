import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"

import MyNav from "./components/MyNav"
import Latest from "./components/Latest"
import MyFooter from "./components/MyFooter"
import Home from "./components/Home"

class App extends React.Component {
  state = {
    genre: ["fantasy", "horror", "scifi", "history", "romance"],
  }

  render() {
    return (
      <>
        <MyNav />
        <Home />
        <Latest title="LATEST RELEASES" genre={this.state.genre[3]} />
        <MyFooter />
      </>
    )
  }
}

export default App
