import { useEffect, useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { Movies } from './components/Movies'
import { Watchlist } from './components/Watchlist'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  let [watchlist, setwatchlist] = useState([])


  let handleaddtowatchlist = (movie) => {
    let newwatchlist = [...watchlist, movie]
    localStorage.setItem('movieapp', JSON.stringify(newwatchlist))
    setwatchlist(newwatchlist)
    console.log(newwatchlist)
  }



  let handleremovefromwatchlist = (movie) => {
    let filteredwatchlist = watchlist.filter((movieobj) => {
      return movieobj.id !== movie.id
    })
        localStorage.setItem('movieapp', JSON.stringify(filteredwatchlist))

    setwatchlist(filteredwatchlist)
    console.log(watchlist)
  }

useEffect(()=>{
  let moviesfromlocalstorage = localStorage.getItem('movieapp')
  if(!moviesfromlocalstorage){
    return
  }
  setwatchlist(JSON.parse(moviesfromlocalstorage))
}, [])



  return (
    <>
      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<Movies watchlist={watchlist} handleaddtowatchlist={handleaddtowatchlist} handleremovefromwatchlist={handleremovefromwatchlist} />} />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} handleremovefromwatchlist={handleremovefromwatchlist} />} />
        </Routes>


      </BrowserRouter>


    </>
  )
}

export default App
