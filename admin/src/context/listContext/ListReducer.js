

const ListReducer = (state, action) => {
    switch (action.type) {
        case "GET_LISTS_START":
            return {
                lists: [],
                isFetching: true,
                error: false
            }
        case "GET_LISTS_SUCCESS":
            return {
                lists: action.payload,
                isFetching: false,
                error: false
            }
        case "GET_LISTS_FAILED":
            return {
                lists: [],
                isFetching: false,
                error: true
            }

        //delete
        case "DELETE_LIST_START":
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case "DELETE_MOVIE_SUCCESS":
            return {
                lists: state.lists.filter((list) => list._id !== action.payload),
                isFetching: false,
                error: false
            }
        case "DELETE_MOVIE_FAILED":
            return {
                ...state,
                isFetching: false,
                error: true
            }

        // //create
        // case "CREATE_MOVIE_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false
        //     }
        // case "CREATE_MOVIE_SUCCESS":
        //     return {
        //         movies: [...state.movies, action.payload],
        //         isFetching: false,
        //         error: false
        //     }
        // case "CREATE_MOVIE_FAILED":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true
        //     }

        // //update
        // case "UPDATE_MOVIE_START":
        //     return {
        //         ...state,
        //         isFetching: true,
        //         error: false
        //     }
        // case "UPDATE_MOVIE_SUCCESS":
        //     return {
        //         movies: state.movies.map(
        //             movie => movie._id === action.payload.movie.id && action.payload
        //         ),
        //         isFetching: false,
        //         error: false
        //     }
        // case "UPDATE_MOVIE_FAILED":
        //     return {
        //         ...state,
        //         isFetching: false,
        //         error: true
        //     }

        default:
            return { ...state }
    }
}

export default ListReducer;