import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends React.Component {
  static propTypes = {
    bookShelf: PropTypes.array.isRequired
}

handleChange = (book, shelf) => {
  this.setState({shelf: event.target.shelf})
  if(book.shelf !== shelf) {
      if (this.props.onListShelfUpdate)
          this.props.onListShelfUpdate(book, shelf)
  }
}

    render() {
      const { bookShelf } = this.props
      
        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {bookShelf.filter( book => book.shelf === 'currentlyReading').map( book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          {book.hasOwnProperty('imageLinks') === true ? 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div> : 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`}}></div>}
                          <div className="book-shelf-changer">
                            <select key={book.shelf} value={book.shelf} onChange={(event) => this.handleChange(book, event.target.value)}>
                              <option value="moveTo" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                          </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div> 
                      </div>
                    </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {bookShelf.filter( book => book.shelf === 'wantToRead').map( book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          {book.hasOwnProperty('imageLinks') === true ? 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div> : 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`}}></div>}
                          <div className="book-shelf-changer">
                            <select key={book.shelf} value={book.shelf} onChange={(event) => this.handleChange(book, event.target.value)}>
                              <option value="moveTo" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                          </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div> 
                      </div>
                    </li>
                    ))}
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {bookShelf.filter( book => book.shelf === 'read').map( book => (
                    <li key={book.id}>
                      <div className="book">
                        <div className="book-top">
                          {book.hasOwnProperty('imageLinks') === true ? 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})`}}></div> : 
                          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(http://via.placeholder.com/128x193?text=No%20Cover)`}}></div>}
                          <div className="book-shelf-changer">
                            <select key={book.shelf} value={book.shelf} onChange={(event) => this.handleChange(book, event.target.value)}>
                              <option value="moveTo" disabled>Move to...</option>
                              <option value="currentlyReading">Currently Reading</option>
                              <option value="wantToRead">Want to Read</option>
                              <option value="read">Read</option>
                              <option value="none">None</option>
                            </select>
                          </div>
                          </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors ? book.authors.join(', ') : ''}</div>                          
                      </div>
                    </li>
                    ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search"
              to="/search">Add a book</Link>
            </div>
            </div>
        )
    }
} 

export default ListBooks
