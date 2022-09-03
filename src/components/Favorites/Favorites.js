import React, { Component } from "react";
import { connect } from "react-redux";
//import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div className="details-container">
        <h2>Películas Favoritas</h2>
        <div className="fav-container">
          <ul>
            {this.props.movies &&
              this.props.movies.map((movie, i) => {
                return (
                  <li key={i}>
                    {movie.title} {movie.year}
                    <button
                      onClick={() => this.props.removeMovieFavorite(movie.id)}
                    >
                      X
                    </button>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesFavourites,
  };
}

export default connect(mapStateToProps, { removeMovieFavorite })(ConnectedList);
