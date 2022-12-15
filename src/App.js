import './App.css';
import React, { Component } from 'react';
import MoviesResults from './components/MoviesResults';
import SearchForm from './components/SearchForm';

class App extends Component { 

  constructor(props) {
    super(props);
    this.state={
      movies:''
    }
  }

render() {
  var movieResults = '';
  if(this.state.movies === '') {
    movieResults = '';
  } else {
    movieResults = <MoviesResults movies={this.state.movies}/>;
  }
  return (
    <div className="container album py-5 bg-light">
      <h1 className="text-center">Movies</h1>
      <div>
        <SearchForm />
      </div>
      <div className="container pull-down">
        {movieResults}
      </div>
    </div>
  );
}
}

export default App;
