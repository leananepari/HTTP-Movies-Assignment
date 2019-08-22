import React, { Component } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

export default class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      update: false
    };
  }

  addMovie = () => {
    this.props.history.push('/add-movie');
  }

  render() {
    return (
      <div>
        <button onClick={this.addMovie} style={{width: '90px', height: '30px', display: 'block', margin: '0 auto'}}>
                 ADD MOVIE
        </button>
        <div className="movie-list">
          {this.props.movies.map(movie => (
            <MovieDetails key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`} >
      <MovieCard movie={movie} />
    </Link>
  );
}
