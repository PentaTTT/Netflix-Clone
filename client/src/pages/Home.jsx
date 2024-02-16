import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import MovieList from '../components/MovieList'
import { useSelector } from 'react-redux'

const Home = ({ type }) => {
    // const movies = [
    //     {
    //         "title": 'Big Buck Bunny',
    //         "description": "Three rodents amuse themselves by harassing creatures of the forest. However, when they mess with a bunny, he decides to teach them a lesson.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    //         "thumbnailUrl": "https://upload.wikimedia.org/wikipedia/commons/7/70/Big.Buck.Bunny.-.Opening.Screen.png",
    //         "genre": "Comedy",
    //         "duration": "10 minutes"
    //     },
    //     {
    //         "title": "Sintel",
    //         "description": "A lonely young woman, Sintel, helps and befriends a dragon, whom she calls Scales. But when he is kidnapped by an adult dragon, Sintel decides to embark on a dangerous quest to find her lost friend Scales.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    //         "thumbnailUrl": "http://uhdtv.io/wp-content/uploads/2020/10/Sintel-3.jpg",
    //         "genre": "Adventure",
    //         "duration": "15 minutes"
    //     },
    //     {
    //         "title": "Tears of Steel",
    //         "description": "In an apocalyptic future, a group of soldiers and scientists takes refuge in Amsterdam to try to stop an army of robots that threatens the planet.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    //         "thumbnailUrl": "https://mango.blender.org/wp-content/uploads/2013/05/01_thom_celia_bridge.jpg",
    //         "genre": "Action",
    //         "duration": "12 minutes"
    //     },
    //     {
    //         "title": "Elephant's Dream",
    //         "description": "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    //         "thumbnailUrl": "https://download.blender.org/ED/cover.jpg",
    //         "genre": "Sci-Fi",
    //         "duration": "15 minutes"
    //     },
    //     {
    //         "title": "Elephant's Dream",
    //         "description": "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    //         "thumbnailUrl": "https://download.blender.org/ED/cover.jpg",
    //         "genre": "Sci-Fi",
    //         "duration": "15 minutes"
    //     },
    //     {
    //         "title": "Elephant's Dream",
    //         "description": "Friends Proog and Emo journey inside the folds of a seemingly infinite Machine, exploring the dark and twisted complex of wires, gears, and cogs, until a moment of conflict negates all their assumptions.",
    //         "videoUrl": "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    //         "thumbnailUrl": "https://download.blender.org/ED/cover.jpg",
    //         "genre": "Sci-Fi",
    //         "duration": "15 minutes"
    //     },

    // ]
    const [lists, setLists] = useState([]);
    const [movies, setMovies] = useState({})
    const [genre, setGenre] = useState(null);
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken)

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:8080/api/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`,
                    {
                        headers: {
                            token:
                                "Bearer " + accessToken
                        }
                    }
                )

                setLists(res.data)

            } catch (error) {
                console.log(error)
            }
        };
        getRandomLists();
    }, [type, genre]);

    //fetch random movie
    useEffect(() => {
        const getRandomMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/movie`,
                    {
                        headers: {
                            token: 'Bearer ' + accessToken
                        }
                    }
                )
                setMovies(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getRandomMovie()
    }, [])

    return (
        <div className='homepage overflow-x-hidden'>
            <Navbar />
            <Hero movies={movies} type={type} />

            <div className='pb-40'>
                {lists && lists.length > 0 &&
                    lists.map((list, index) => {
                        return (
                            <MovieList
                                key={index}
                                title={list.title}
                                movieData={list.content}
                            />
                        )
                    })
                }
            </div>
        </div >
    )
}

export default Home