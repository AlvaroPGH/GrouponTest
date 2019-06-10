import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (

      <div className="col-md-3 mb-5">
        <div className="movie-item text-center h-100">
          <img className="mv-img" src={movie.Poster} alt="Movie Cover" />
          <div class="title-in">
            <h6><a href="#">{movie.Title} - {movie.Year}</a></h6>
          </div>
          <Link className="hvr-inner text-white" to={'/movie/' + movie.imdbID}>
            View
          </Link>
        </div>
      </div>



    );
  }
}

export default MovieCard;
