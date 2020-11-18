import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
import fantasy from "./my_books/fantasy.json"
import history from "./my_books/history.json"
import horror from "./my_books/horror.json"
import romance from "./my_books/romance.json"
import scifi from "./my_books/scifi.json"

import MyNav from "./components/MyNav"
import Latest from "./components/Latest"
import MyFooter from "./components/MyFooter"
import Home from "./components/Home"

class App extends React.Component {
  state = {
    genre: [fantasy, history, horror, romance, scifi],
  }

  get_books_by_genre = (genre) => {
    let all_books = [...fantasy, ...history, ...horror, ...romance, ...scifi]
    return all_books.find((g) => g === genre)
  }

  //TODO
  render() {
    return (
      <>
        <MyNav getBooks={this.get_books_by_genre} />
        <Home />
        <Latest title="LATEST RELEASES" genre={this.get_books_by_genre()} />
        <MyFooter />
      </>
    )
  }
}

export default App
