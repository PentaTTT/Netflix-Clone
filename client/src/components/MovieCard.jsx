import React, { useEffect, useState } from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import { SlLike } from "react-icons/sl";
import { FaChevronDown, FaPlus } from "react-icons/fa6";
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const MovieCard = (props) => {
    const { data } = props;
    const accessToken = useSelector(state => state.auth.login.currentUser.accessToken)

    const [movie, setMovie] = useState({});
    const [isPlay, setIsPlay] = useState(false)

    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/movie/find/` + data,
                    {
                        headers: {
                            token: "Bearer " + accessToken
                        }
                    }
                )
                if (res && res.status === 200) {
                    setMovie(res.data)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getMovie()
    }, [data]);

    return (
        <div className='
                        relative group
                        min-w-[50%] md:min-w-[33.3333%] lg:min-w-[25%]
                        h-[24vw] md:h-[16vw] lg:h-[12vw]
                        px-1 bg-zinc-900 aspect-video'

            onMouseEnter={() => setIsPlay(true)}
            onMouseLeave={() => setIsPlay(false)}
        >
            <img
                className='
                    cursor-pointer
                    object-cover
                    transition
                    duration
                    shadow-xl
                    group-hover:opacity-90
                    sm:group-hover:opacity-0
                    delay-200
                    w-full
                    h-full
                    md:h-[16vw] lg:h-[12vw]
                '
                src={movie.img} alt={movie.title}
            />

            {/* --hover-- */}
            <div
                className='
                    opacity-0
                    absolute
                    top-0
                    shadow-md
                    transition
                    duration-200
                    z-40
                    delay-[250ms]
                    ease-in-out
                    w-full
                    scale-0
                    group-hover:scale-100
                    group-hover:-translate-y-[6vw]
                    group-hover:-translate-x-[0.3vw]
                    group-hover:opacity-100
                '
            >
                {isPlay ?
                    <Link to="/watch" state={movie}>
                        <video
                            className='
                            cursor-pointer
                            object-cover
                            transition
                            shadow-xl
                            rounded-t-md
                            w-full
                            h-[22vw]
                            md:h-[12vw]
                        '
                            autoPlay
                            muted
                            loop
                            poster={movie?.img}
                            src={movie?.trailer} alt={movie?.title}
                        />
                    </Link>
                    :
                    <Link to="/watch" state={movie}>
                        <img
                            className='
                            cursor-pointer
                            object-cover
                            transition
                            shadow-xl
                            w-full
                            h-full
                            md:h-[16vw] lg:h-[12vw]
                        '
                            src={movie.img} alt={movie.title}
                        />
                    </Link>
                }
                {/* --info movie-- */}
                <div
                    className='
                        bg-zinc-800
                        p-2 lg:p-4
                        absolute
                        w-full
                        transition
                        shadow-md
                        rounded-b-md
                    '
                >

                    {/* ---button-- */}
                    <div className='flex flex-row items-center gap-3'>
                        <div
                            className='
                                cursor-pointer 
                                w-6 h-6
                                lg:w-10 lg:h-10  
                                bg-white
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-300
                            '
                            onClick={() => { }}
                        >
                            <BsFillPlayFill size={30} />
                        </div>
                        <div
                            className='
                                cursor-pointer 
                                w-6 h-6
                                lg:w-10 lg:h-10  
                                border-2 border-neutral-300
                                text-neutral-300
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-500
                                hover:border-white
                                hover:text-white
                            '
                            onClick={() => { }}
                        >
                            <FaPlus size={15} />
                        </div>
                        <div
                            className='
                                cursor-pointer 
                                w-6 h-6
                                lg:w-10 lg:h-10  
                                border-2 border-neutral-300
                                text-neutral-300
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-500
                                hover:border-white
                                hover:text-white
                            '
                            onClick={() => { }}
                        >
                            <SlLike size={15} />
                        </div>

                        <div className='
                                cursor-pointer 
                                w-6 h-6
                                lg:w-10 lg:h-10 
                                ml-auto 
                                border-2 border-neutral-300
                                text-neutral-300
                                rounded-full
                                flex
                                justify-center
                                items-center
                                transition
                                hover:bg-neutral-500
                                hover:border-white
                                hover:text-white
                            '
                        >
                            <FaChevronDown size={17} />
                        </div>
                    </div>

                    {/* --text-- */}
                    <p className='text-green-400 lg:text-xl text-[10px] font-semibold mt-4'>
                        New <span className='text-white'>{movie.year}</span>
                    </p>

                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-[14px]'>
                            {movie.limit}
                        </p>
                    </div>
                    <div className='flex flex-row mt-4 gap-2 items-center'>
                        <p className='text-white text-[10px] lg:text-[14px]'>
                            {movie.genre}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MovieCard