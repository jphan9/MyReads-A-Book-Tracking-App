import React from 'react';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
      books: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  changeShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
        <MainPage books={this.state.books} changeShelf={this.changeShelf} />
      </div>
    )
  }
}

export default BooksApp
