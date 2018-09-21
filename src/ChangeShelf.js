import React, { Component } from 'react';
import Book from './Book';

class ChangeShelf extends Component {
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          onChange={(event) => this.props.changeShelf(this.props.book,event.target.value)}
          value={this.props.shelf}
        >
          <option value="move" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ChangeShelf;
