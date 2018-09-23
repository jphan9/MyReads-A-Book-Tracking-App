import React, { Component } from 'react';
import Book from './Book';

const ChangeShelf = (props) => {
  return (
    <div className="book-shelf-changer">
      <select onChange={(event) => props.changeShelf(props.book,event.target.value)} value={props.shelf} >
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
}

export default ChangeShelf;
