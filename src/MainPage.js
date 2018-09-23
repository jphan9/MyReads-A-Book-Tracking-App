import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

class MainPage extends Component {
  state = {
      shelfTitle: ["Currently Reading", "Want to Read", "Read"],
      shelf: ["currentlyReading", "wantToRead", "read"]
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelfTitle={this.state.shelfTitle[0]}
              shelf={this.state.shelf[0]}
              books={this.props.books.filter(book => book.shelf === "currentlyReading")}
              changeShelf={this.props.changeShelf}
            />
            <BookShelf
              shelfTitle={this.state.shelfTitle[1]}
              shelf={this.state.shelf[1]}
              books={this.props.books.filter(book => book.shelf === "wantToRead")}
              changeShelf={this.props.changeShelf}
            />
            <BookShelf
              shelfTitle={this.state.shelfTitle[2]}
              shelf={this.state.shelf[2]}
              books={this.props.books.filter(book => book.shelf === "read")}
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}

export default MainPage;
