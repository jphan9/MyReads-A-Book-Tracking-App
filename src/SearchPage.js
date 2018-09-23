import React, { Component } from 'react';
import Book from './Book';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class SearchPage extends Component {
  state={
    query: '',
    booksSearched: []
  }

  // Updates the booksSearched array when there is a query.
  updateQuery = (query) => {
    this.setState({query: query})
    this.updateBooks(query);
  }

  // Checks to see if there is a query. If there is a query show the books that match the query or show nothing it it does not match.
  updateBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then((booksSearched) => {
        // If there is an error show nothing else show the books that match.
        if(booksSearched.error) {
          this.setState({booksSearched: []});
        } else {
          this.setState({booksSearched: booksSearched})
        }
      })
    } else {
      this.setState({booksSearched: []});
    }
  }

  // Clears the query and booksSearched array.
  clearSearch = () => {
    this.setState({
      query: '',
      booksSearched: []
    })
  }

  render () {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" onClick={this.clearSearch}>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
          {
            this.state.booksSearched.map(booksSearched => {
              let selectedOption = "none";

              this.props.books.map(book => (
                // If the ids match set the selectedOption, else do nothing.
                book.id === booksSearched.id ?
                selectedOption = book.shelf : ""
              ));

              return (
                <li key={booksSearched.id}>
                  <Book book={booksSearched} changeShelf={this.props.changeShelf} shelf={selectedOption}/>
                </li>
              )
            })
          }
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
