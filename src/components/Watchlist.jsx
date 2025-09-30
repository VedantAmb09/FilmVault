import React, { useState } from 'react'
import genreids from '../genreid/genre'


export const Watchlist = ({ watchlist, handleremovefromwatchlist }) => {

  let [search, setsearch] = useState('')

  let handleSearch = (e) => {
    setsearch(e.target.value)
  }


  return (
    <>



      {/* <div className="genrefilter">
        <div className="genretype">Action</div>
        <div className="genretype">Action</div>
        <div className="genretype">Action</div>

      </div> */}

      <div className="searchbar">
        <input onChange={handleSearch} value={search} type="text" name="search" id="searchmovie" placeholder='Search Movies' />
      </div>

      <div className="movietable">
        <table>

          <thead className='tablehead'>
            <tr>
              <th>Name</th>
              <th>Ratings</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>



          <tbody className='tablebody'>


            {watchlist.filter((movieobj)=>{
              return movieobj.title.toLowerCase().includes(search.toLowerCase())
            }).map((movieobj) => {
              return <tr key={movieobj.id} className='bodyrow'>

                <td>
                  <div className="tableimg">
                    <img src={`https://image.tmdb.org/t/p/w500${movieobj.backdrop_path}`} alt="movie image" />
                    <div className="table-movie-name">{movieobj.original_title
                    }</div>
                  </div>
                </td>



                <td>{movieobj.vote_average}</td>
                <td>{movieobj.vote_count}</td>
                <td>{genreids[movieobj.genre_ids[0]]}</td>
                <td className='removebtn' onClick={()=>{handleremovefromwatchlist(movieobj)}}>Remove</td>
              </tr>
            })}





          </tbody>

        </table>

      </div>

    </>

  )
}
