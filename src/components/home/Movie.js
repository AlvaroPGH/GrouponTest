import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchMovie, setLoading } from '../../actions/searchActions';

import Spinner from '../layout/Spinner';

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }
  render() {
    const { loading, movie } = this.props;

    let movieInfo = (

      <div class="page-single">
        <div class="container">
          <div class="row ipad-width2">
            <div class="col-md-4 col-sm-12 col-xs-12">
              <div class="movie-img">
              <img src={movie.Poster} alt="Poster"/>
              </div>
            </div>
            <div class="col-md-8 col-sm-12 col-xs-12">
              <div class="movie-single-ct main-content">
                <h1 class="bd-hd">{movie.Title}<span>{movie.Year}</span></h1>
            
                <div class="social-btn">
                  <a href="#" class="parent-btn"><i class="ion-heart"></i> Add to Favorite</a>
                </div>

            <div class="movie-tabs">
            <div class="tabs">
              <ul class="tab-links tabs-mv">
                <li class="active"><a href="#overview">Overview</a></li>
              </ul>
            <div class="tab-content">
              <div id="overview" class="tab active">
                <div class="row">
                  <div class="col-md-8 col-sm-12 col-xs-12">
                    <p>{movie.Plot}</p>
                    <hr />
                    <a
                      href={'https://www.imdb.com/title/' + movie.imdbID}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      View on IMDB
                    </a>
                  
                    <Link to="/" className="btn btn-default text-light">
                      Go Back To Search
                    </Link>
                  </div>
                
                <div class="col-md-4 col-xs-12 col-sm-12">
                  <div class="sb-it">
                    <h6 class="text-white">Director: </h6>
                   <p><a href="#">{movie.Director}</a></p>
                  </div>
                  <div class="sb-it">
                    <h6 class="text-white">Writer: </h6>
                    <p>{movie.Writer}</p>
                  </div>
                  <div class="sb-it">
                    <h6 class="text-white">Stars: </h6>
                    <p>{movie.Actors}</p>
                  </div>
                  <div class="sb-it">
                    <h6 class="text-white">Genres:</h6>
                    <p>{movie.Genre}</p>
                  </div>
                  <div class="sb-it">
                    <h6 class="text-white">Release Date:</h6>
                    <p>{movie.Released}</p>
                  </div>
                  <div class="sb-it">
                    <h6 class="text-white">MMPA Rating:</h6>
                    <p>{movie.Rated}</p>
                  </div>
                </div>
              </div>
            </div>

            </div>
            </div>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>

      
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div style={{padding:'100px'}}>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
