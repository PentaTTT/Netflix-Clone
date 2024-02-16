import {
    createListFailed, createListStart, createListSuccess,
    deleteListFailed, deleteListStart, deleteListSuccess,
    getListsFailed, getListsStart, getListsSuccess,
    updateListFailed, updateListStart, updateListSuccess
} from "./ListAction";
import axios from "axios";
import 'dotenv/config';

//fetch movie
export const getLists = async (dispatch) => {
    dispatch(getListsStart());
    try {
        const res = await axios.get("http://localhost:8080/api/list", {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        })

        dispatch(getListsSuccess(res.data))
    } catch (error) {
        dispatch(getListsFailed())
    }
}

//delete movie
export const deleteList = async (id, dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("http://localhost:8080/api/list/" + id, {
            headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
        });

        dispatch(deleteListSuccess(id))
    } catch (error) {
        dispatch(deleteListFailed());
    }
}

//create movie
// export const createMovie = async (movie, dispatch) => {
//     dispatch(createMovieStart());
//     try {
//         const res = await axios.post("http://localhost:8080/api/movie/", movie, {
//             headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
//         });

//         dispatch(createMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(createMovieFailed());
//     }

// }

//update movie
// export const updateMovie = async (movie, dispatch) => {
//     dispatch(updateMovieStart());
//     try {
//         const res = axios.put("http://localhost:8080/api/movie/" + movie.id, movie, {
//             headers: { token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken }
//         });

//         dispatch(updateMovieSuccess(res.data))
//     } catch (error) {
//         dispatch(updateMovieFailed())
//     }
// }