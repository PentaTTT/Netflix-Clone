

const MovieReducer = (state, action) => {
    switch (action.type) {
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            }
        case "GET_MOVIES_SUCCESS":
            return {
                movies: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_MOVIES_FAILED":
            return {
                movies: [],
                isFetching: false,
                error: true
            }

        //delete
        case "DELETE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_MOVIE_SUCCESS":
            return {
                movies: state.movies.filter((movie) => movie._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_MOVIE_FAILED":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        //create
        case "CREATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "CREATE_MOVIE_SUCCESS":
            return {
                movies: [...state.movies, action.payload],
                isFetching: false,
                error: false
            }
        case "CREATE_MOVIE_FAILED":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        //update
        case "UPDATE_MOVIE_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "UPDATE_MOVIE_SUCCESS":
            return {
                movies: state.movies.map(
                    movie => movie._id === action.payload.movie.id && action.payload
                ),
                isFetching: false,
                error: false
            }
        case "UPDATE_MOVIE_FAILED":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        default:
            return { ...state }
    }
}

export default MovieReducer;