// Fetch movie
export const getMoviesStart = () => ({
    type: "GET_MOVIES_START"
});
export const getMoviesSuccess = (movies) => ({
    type: "GET_MOVIES_SUCCESS",
    payload: movies
});
export const getMoviesFailed = () => ({
    type: "GET_MOVIES_FAILED"
});

// Delete movie
export const deleteMovieStart = () => ({
    type: "DELETE_MOVIE_START"
});
export const deleteMovieSuccess = (id) => ({
    type: "DELETE_MOVIE_SUCCESS",
    payload: id
});
export const deleteMovieFailed = () => ({
    type: "DELETE_MOVIE_FAILED"
});

// Create movie
export const createMovieStart = () => ({
    type: "CREATE_MOVIE_START"
});
export const createMovieSuccess = (movie) => ({
    type: "CREATE_MOVIE_SUCCESS",
    payload: movie
});
export const createMovieFailed = () => ({
    type: "CREATE_MOVIE_FAILED"
});

// Update movie
export const updateMovieStart = () => ({
    type: "UPDATE_MOVIE_START"
});
export const updateMovieSuccess = (movie) => ({
    type: "UPDATE_MOVIE_SUCCESS",
    payload: movie
});
export const updateMovieFailed = () => ({
    type: "UPDATE_MOVIE_FAILED"
});