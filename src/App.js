import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './MainPage';
import SearchPage from './SearchPage';
import * as BooksAPI from './BooksAPI';
import './App.css';

class BooksApp extends React.Component {
  state = {
      books: [],
  }

  // Grabs all the books from BooksAPI.
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books: books})
    })
  }

  // Updates the book shelf and when a book changes shelf.
  changeShelf = (book,shelf) => {
    BooksAPI.update(book,shelf);
    this.componentDidMount();
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <MainPage books={this.state.books} changeShelf={this.changeShelf} />
        )} />

        <Route path="/search" render={() => (
          <SearchPage changeShelf={this.changeShelf} books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
