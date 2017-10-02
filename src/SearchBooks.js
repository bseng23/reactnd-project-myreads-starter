import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'

class SearchBooks extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired
    }

    state = {
        query: ''
    }
    
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
        if (query !== '') {
            if (this.props.onBookSearch)
                this.props.onBookSearch(query)
        }
    }

    handleChange = (book, shelf) => {
        this.setState({shelf: event.target.shelf})
        if(book.shelf !== shelf) {
            if (this.props.onSearchShelfUpdate)
                this.props.onSearchShelfUpdate(book, shelf)
        }
      }

    refreshBookList = () => {
        if (this.props.onRefreshBookList)
            this.props.onRefreshBookList()

    }
    
    render() {
        const { books } = this.props
        const { query } = this.state

        let showBooks
        if (query.length > 0) {
            const match = new RegExp(escapeRegExp(query), 'i')
            showBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
        } else {
            showBooks = []
        }

        return(
            <div className="app">
                <div className="search-books">
                    <div className="search-books-bar" >
                    <Link className="close-search"
                    onClick={this.refreshBookList}
                    
                        to={{
                            pathname: "/" 
                        }}                        
                        >Close</Link>
                    <div className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author"
                        onChange={(event) => this.updateQuery(event.target.value)}/>
                    </div>
                    </div>
                    <div className="search-books-results">
                    <ol className="books-grid">
                        {showBooks.map((book) => (
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
        )
    }
}

export default SearchBooks
