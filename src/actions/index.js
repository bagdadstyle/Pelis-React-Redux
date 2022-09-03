export const ADD_MOVIE_FAVORITE = 'ADD_MOVIE_FAVORITE';
export const GET_MOVIES = 'GET_MOVIES';
export const GET_MOVIE_DETAIL = 'GET_MOVIES_DETAILS';
export const REMOVE_MOVIE_FAVORITE = 'REMOVE_MOVIE_FAVORITE';
export const API_KEY = 'cbc083c0';


export function addMovieFavorite(payload){
  
  
  return {type: ADD_MOVIE_FAVORITE, payload}
};

export function getMovies(title) {
    return function(dispatch) {
      return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${title}`)
        .then(response => response.json())
        .then(json => {
          dispatch({ type: GET_MOVIES, payload: json });
         //  console.log(json.Search)
        });
    };  
  };
// export function getMovieDetail(payload){
//     return {type: GET_MOVIE_DETAIL, payload}
// };
export function getMovieDetail(id) {
  return function(dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(response => response.json())
      .then(detail => {dispatch({ type: GET_MOVIE_DETAIL, payload: detail });
      //   console.log(detail);
      });
  };
};
  
export function removeMovieFavorite(id){
    return {type: REMOVE_MOVIE_FAVORITE, id}
};