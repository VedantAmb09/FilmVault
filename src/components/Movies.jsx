import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Banner } from './Banner'
import { Moviecard } from './Moviecard'
import { Pagination } from './Pagination'

export const Movies = ({handleaddtowatchlist, handleremovefromwatchlist, watchlist}) => {


    const [Movies, setMovies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)


    function handleNext() {


        setCurrentPage(currentPage + 1)


    }


    function handlePrev() {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/trending/movie/week?page=${currentPage}`,
            {
                headers: {
                    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjc1M2I1YjU3ZjY5Y2JjZWRlZjQwM2Y1NWNmMWQ5MSIsIm5iZiI6MTc1NTAwMTQ3MC44NzUsInN1YiI6IjY4OWIzMjdlNWNmNjExZjVmNmM2ZmRjYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IZT3Fz02IJ-_UR8rTKKoJM5PmNY9jfhPGt7gXNSWCYc`
                }
            }
        )
            .then(res => {
                setMovies(res.data.results)
            })
            .catch(err => {
                console.error('Error fetching movies:', err)
            })
    }, [currentPage])

    
    return (
        <>
            <div className='main'>
                <Banner watchlist={watchlist} />
                <div className="heading">Trending Movies</div>
                <div className="movielist">

                    {Movies.map((movie) => {
                        return <Moviecard watchlist={watchlist} movie={movie} handleaddtowatchlist={handleaddtowatchlist} handleremovefromwatchlist={handleremovefromwatchlist} key={movie.id} poster_path={movie.poster_path} movie_title={movie.original_title} />
                    })}

                </div>
                <Pagination handleNext={handleNext} handlePrev={handlePrev} pageno={currentPage} />
            </div>
        </>
    )
}
