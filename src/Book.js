import React, { Component } from 'react';
import ChangeShelf from './ChangeShelf';

class Book extends Component {
  render() {
    let thumbnail;
    // If there is no thumnail show nothing else show the thumbnail image.
    if(this.props.book.imageLinks === undefined) {
      thumbnail = '';
    } else {
      thumbnail = this.props.book.imageLinks.thumbnail;
    }

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${thumbnail}")` }}></div>
          <ChangeShelf book={this.props.book} changeShelf={this.props.changeShelf} shelf={this.props.shelf}/>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
}

export default Book;
