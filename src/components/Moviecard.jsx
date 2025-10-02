// import React from 'react'
// import { useState } from 'react';

// export const Moviecard = ({ movie, poster_path, movie_title, handleaddtowatchlist, handleremovefromwatchlist, watchlist }) => {

// const [isHovered, setIsHovered] = useState(false);

//     function doescontain(movie) {
//         for (let i = 0; i < watchlist.length; i++) {
//             if (watchlist[i].id == movie.id) {
//                 return true
//             }
//         } return false
//     }


//     return (

//         <div className="mainposter" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}>

//             <div className="addtowatchlist-container">
//                 {doescontain(movie) ?
//                     <div className='addtowatchlist' onClick={()=>{handleremovefromwatchlist(movie)}} >&#10084; </div> :
//                      <div className='addtowatchlist'onClick={() => { handleaddtowatchlist(movie) }} >
//                         &#9825;

//                     </div>
//                 }

//             </div>


//             <div className='moviename'>{movie_title}</div>
//         </div>

//     )
// }









import React from 'react'
import { useState } from 'react';


export const Moviecard = ({ movie, poster_path, movie_title,overview, original_language, handleaddtowatchlist, handleremovefromwatchlist, watchlist }) => {

    const [isHovered, setIsHovered] = useState(false);

    function doescontain(movie) {
        for (let i = 0; i < watchlist.length; i++) {
            if (watchlist[i].id == movie.id) {
                return true
            }
        } return false
    }


    return (
        <div
            className={`mainposter ${isHovered ? 'hovered' : ''}`}
            style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${poster_path})` }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            <div className="addtowatchlist-container">
                {doescontain(movie) ?
                    <div className='addtowatchlist' onClick={() => { handleremovefromwatchlist(movie) }} >&#10084; </div> :
                    <div className='addtowatchlist' onClick={() => { handleaddtowatchlist(movie) }} >
                        &#9825;
                    </div>
                }
            </div>



            {!isHovered && <div className='moviename'>{movie_title}</div>}

            {isHovered && (
                <div className='hover-content'>
                    <button className='watch-now-btn'>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                        Watch Now
                    </button>

                    <div className='movie-details'>
                        <div className='language-tag'>
                            Language: {original_language?.toUpperCase() || 'N/A'}
                        </div>

                        <div className='overview'>
                            {overview ? overview.slice(0, 150) + (overview.length > 150 ? '...' : '') : 'No overview available'}
                        </div>
                    </div>
                </div>
            )}

        </div>
    )
}
