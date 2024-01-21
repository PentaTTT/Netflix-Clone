import React from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import PlayButton from './PlayButton'

const Hero = (props) => {
    const { movies, type } = props
    const movie = movies[Math.floor(Math.random() * movies.length)]

    return (
        <div className='relative h-[50vw]'>
            {type && (
                <div className='absolute top-[30%] lg:top-[15%] right-4 lg:left-[4rem] z-50 
                                text-sm lg:text-xl 
                                flex items-center gap-2'
                >
                    <span className='text-white'>{type === "movies" ? "Movies" : "Series"}</span>
                    <select className='
                                cursor-pointer
                                bg-zinc-900 text-white 
                                border border-white p-1
                            '
                        name='genre'
                        id='genre'>
                        <option>Genre</option>
                        <option value='adventure'>Adventure</option>
                        <option value='comedy'>Comedy</option>
                        <option value='crime'>Crime</option>
                        <option value='fantasy'>Fantasy</option>
                    </select>
                </div>
            )
            }
            <video
                className='
                    w-full
                    h-[50vw]
                    object-cover
                    brightness-[60%]
                '
                autoPlay
                muted
                loop
                poster={movie?.img}
                src={movie?.trailer}>
            </video>

            <div className='absolute top-[30%] lg:top-[40%] ml-4 md:ml-16'>
                <p className='
                    text-white
                    text-2xl
                    md:text-4xl
                    h-full
                    w-[60%]
                    lg:text-6xl
                    font-bold
                    drop-shadow-xl
                '>
                    {movie?.title}
                </p>
                <p className='
                    text-white
                    text-[10px]
                    md:text-[12px]
                    lg:text-xl
                    mt-3
                    md:mt-7
                    w-[55%]
                    md:w-[50%]
                    lg:w-[45%]
                    drop-shadow-xl
                '>
                    {movie?.desc}
                </p>

                <div className='flex flex-row items-center mt-3 md:mt-4 gap-3'>
                    <PlayButton movieData={movie} />

                    <button
                        className='
                            bg-white
                            text-white
                            bg-opacity-30
                            rounded-md
                            py-1 md:py-2
                            px-2 md:px-4
                            w-auto
                            text-xs lg:text-lg
                            font-semibold
                            flex
                            flex-row
                            items-center
                            hover:bg-opacity-50
                            transition
                        '
                    >
                        <AiOutlineInfoCircle size={25} className='mr-1' />
                        More Info
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Hero