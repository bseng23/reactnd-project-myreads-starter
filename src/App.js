import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {


  state = {
    bookShelf: [],
    books: []
  }


  componentDidMount() {
    BooksAPI.getAll().then((bookShelf) => {
      this.setState({ bookShelf })
    })
  }
  
  bookSearch(bookQuery) {
    BooksAPI.search(bookQuery, 20).then((results) => {
      const checkBookShelf = results.map(book => {
        book.shelf = "none"
        this.state.bookShelf.forEach(b => {
          if (book.id === b.id) {
            book.shelf = b.shelf
          }
        })
        return book
      })
      this.setState({ books: checkBookShelf })
    })
  }   

  searchShelfUpdate(book, shelf) {
    var bookID = book.id
    this.listShelfUpdate(book, shelf)
    this.setState((prevBooks) => ({
      books: prevBooks.books.map((book) => {
        if (book.id === bookID) {
          BooksAPI.update(book, shelf)
          book.shelf = shelf;
        }
        return book;
      })
    }))
    console.log(this.state.books)
  }

  listShelfUpdate(book, shelf) {
    var bookID = book.id
      this.setState((prevBooks) => ({
        bookShelf: prevBooks.bookShelf.map((book) => {
          if (book.id === bookID) {
            BooksAPI.update(book, shelf)
            book.shelf = shelf;
          }
          return book;
        })
      }))
    console.log(this.state.books)
  }


  render() {
    return (
      <div>
        <Route exact path="/" render={() => (
          <ListBooks 
          bookShelf={this.state.bookShelf}
          onListShelfUpdate={(book, shelf) => {
            this.listShelfUpdate(book, shelf)
          }}
          />  
        )}/>
        <Route path="/search" render={( {history} ) => (
          <SearchBooks 
          books={this.state.books}
          onBookSearch={(bookQuery) => {
            this.bookSearch(bookQuery)
          }}
          onSearchShelfUpdate={(book, shelf) => {
            this.searchShelfUpdate(book, shelf)
          }}
          />
        )}
        />
    </div>
    )
  }
}

export default BooksApp
