import React from 'react'

export const Moviecard = ({ movie, poster_path, movie_title, handleaddtowatchlist, handleremovefromwatchlist, watchlist }) => {


    function doescontain(movie) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id == movie.id) {
                return true
            }
        } return false
    }


    return (

        <div className="mainposter" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>

            <div className="addtowatchlist-container">

 {/* 10084 for filled heart */}
                {doescontain(movie) ?
                    <div className='addtowatchlist' onClick={()=>{handleremovefromwatchlist(movie)}} >&#10084; </div> :
                     <div className='addtowatchlist'onClick={() => { handleaddtowatchlist(movie) }} >
                        &#9825;
                       
                    </div>
                }


            </div>


            <div className='moviename'>{movie_title}</div>
        </div>

    )
}
