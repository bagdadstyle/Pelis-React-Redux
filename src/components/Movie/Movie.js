import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

// const movieId = this.props.match.params.id;
class Movie extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
    this.state = { movieId: this.props.match.params.id };
  }

  componentDidMount = () => {
    this.props.getMovieDetail(this.state.movieId);
  };

  render() {
    return (
      <div className="movie-detail">
        <h1>Detalles de la pelicula</h1>

        <h2>{this.props.movieDetail.Title}</h2>
        <img
          src={
            this.props.movieDetail.Poster !== "N/A"
              ? this.props.movieDetail.Poster
              : null
          }
          alt=""
        />
        <div className="sinopsis">
          <p>
            {this.props.movieDetail.Plot !== "N/A"
              ? this.props.movieDetail.Plot
              : "No se ha encontrado una descripción"}
          </p>

          <p>
            {this.props.movieDetail.Director &&
              `Director: ${this.props.movieDetail.Director}`}
          </p>
          <br />

          <p>
            {" "}
            {this.props.movieDetail.Actors &&
              `Reparto: ${this.props.movieDetail.Actors}`}
          </p>
        </div>
        {console.log(this.props.movieDetail)}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movieDetail: state.movieDetail,
  };
}

export default connect(mapStateToProps, { getMovieDetail })(Movie);
