import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieFavorite, getMovies } from "../../actions";
import "./Buscador.css";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div className="hero">
        <div className="buscador-container">
          <form
            className="form-container"
            onSubmit={(e) => this.handleSubmit(e)}
          >
            <h2>Buscador</h2>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
            <button type="submit">BUSCAR</button>
          </form>
          <div className="list-group">
            <ul>
              {this.props.movies &&
                this.props.movies.map((movie, i) => {
                  return (
                    <li key={i}>
                      <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
                      <button
                        className="fav-button"
                        onClick={() => {
                          this.props.addMovieFavorite({
                            title: movie.Title,
                            id: movie.imdbID,
                            year: movie.Year,
                          });
                        }}
                      >
                        <img
                          src="https://t3.ftcdn.net/jpg/01/78/93/96/240_F_178939613_sVSxc9vAxesWklgJzCG16a8wgP8rN1o6.jpg"
                          alt=""
                        />
                      </button>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    movies: state.moviesLoaded,
    moviesFavourites: state.moviesFavourites,
  };
}
export function mapDispatchToProps(dispatch) {
  return {
    addMovieFavorite: (movie) => dispatch(addMovieFavorite(movie)),
    getMovies: (title) => dispatch(getMovies(title)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Buscador);

//export default Buscador;
