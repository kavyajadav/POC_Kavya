import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants';

class Actions {

  searchMovies(movie) {
    // console.log("Inside search movies")
    AppDispatcher.dispatch({
      actionType: Constants.SEARCH_MOVIES,
      movie: movie
    })
  }

  showMovieResults(movies) {
    AppDispatcher.dispatch({
      actionType: Constants.SHOW_MOVIE_RESULTS,
      movies: movies
    })
  }
}

export default new Actions();