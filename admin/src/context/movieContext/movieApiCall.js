import {
    createMovieFailed, createMovieStart, createMovieSuccess,
    deleteMovieFailed, deleteMovieStart, deleteMovieSuccess,
    getMoviesFailed, getMoviesStart, getMoviesSuccess,
    updateMovieFailed, updateMovieStart, updateMovieSuccess
} from "./MovieAction";
import axios from "axios";
import 'dotenv/config';

//fetch movie
export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart());
    try {
        const res = await axios.get("http://localhost:8080/api/movie", {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        })

        dispatch(getMoviesSuccess(res.data))
    } catch (error) {
        dispatch(getMoviesFailed())
    }
}

//delete movie
export const deleteMovie = async (id, dispatch) => {
    dispatch(deleteMovieStart());
    try {
        await axios.delete("http://localhost:8080/api/movie/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });

        dispatch(deleteMovieSuccess(id))
    } catch (error) {
        dispatch(deleteMovieFailed());
    }
}

//create movie
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
        const res = await axios.post("http://localhost:8080/api/movie/", movie, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });

        dispatch(createMovieSuccess(res.data))
    } catch (error) {
        dispatch(createMovieFailed());
    }

}

//update movie
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
        const res = axios.put("http://localhost:8080/api/movie/" + movie.id, movie, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });

        dispatch(updateMovieSuccess(res.data))
    } catch (error) {
        dispatch(updateMovieFailed())
    }
}