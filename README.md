# MyReads Project

This is a fork of the MyReads starter template for the final assessment project for Udacity's React Fundamentals course. 

## TL;DR

To run the project:

* install all project dependencies (react-router-dom, prop-types, escape-string-regexp) with `npm install`
* start the development server with `npm start`

## What You're Getting
```bash
├── CONTRIBUTING.md
├── README.md - This file is updated with project information.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app. Initial commit.
├── package.json # npm package manager file. Initial commit.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish. Initial commit.
│   └── index.html # DO NOT MODIFY Initial commit.
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire. Initial commit.
    ├── App.js # Refactor with new features.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required. Initial commit.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below. Initial commit.
    ├── icons # Helpful images for your app. Use at your discretion. Initial commit.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here. Initial commit.
    ├── index.js # You should not need to modify this file. It is used for DOM rendering only. Initial commit.
    ├── ListBooks.js # New component to render the bookshelf of Currently Read, Want to Read, and Read books.
    └── SearchBooks.js # New component to render the search of books
```

## Future Improvements

Future improvements to the app, as suggested by the instructor, are listed below:

* myreads/src/App.js
- Add 'react-throttle' or 'debounce from lodash' to the search API (line 23) to minimize API calls and make the app more efficient. Attempted to incorporate this but kept running into errors.
- Add <Switch> from 'react-router-dom' and create a component for when no pages match, it will redirect to a 404 error page.

* myreads/src/ListBooks.js
- Create 2 components, Shelf and Book. 'Shelf' will share a single responsibility of displaying books, and 'Book' will render only the books. These 2 components were created and attempted but had issue with updating 'shelf' state from Book Component up to the parent component App.js. 

* myreads/src/SearchBooks.js
- Create 2 components, Shelf and Book. 'Shelf' will share a single responsibility of displaying books, and 'Book' will render only the books. These 2 components were created and attempted but had issue with updating 'shelf' state from Book Component up to the parent component App.js. 
