import React, { useState, useEffect } from 'react'

export const Banner = ({ watchlist }) => {
    const [randomMovie, setRandomMovie] = useState(null)

    useEffect(() => {
        if (watchlist && watchlist.length > 0) {
            const randomIndex = Math.floor(Math.random() * watchlist.length)
            setRandomMovie(watchlist[randomIndex])
        }
    }, [watchlist])

    // Show loading state if no random movie is selected yet
    if (!randomMovie) {
        return (
            <div className="banner">
                <div className="bannername">Loading...</div>
            </div>
        )
    }

    // TMDB image base URL (you might need to adjust this based on your API setup)
    const imageBaseUrl = 'https://image.tmdb.org/t/p/original'
    const backdropPath = randomMovie.backdrop_path || randomMovie.poster_path

    return (
        <>
            <div className="banner">
                <img 
                    src={`${imageBaseUrl}${backdropPath}`}
                    alt={randomMovie.title || randomMovie.name}
                    className="banner-image"
                />
                <div className="bannername">
                    {randomMovie.title || randomMovie.name}
                </div>
            </div>
        </>
    )
}