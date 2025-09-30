import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {

    return (

        <div className='navbar'>

            <img src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg" alt="Icon" />

            <Link className='link' to="/">Movies</Link>
            <Link className='link' to="/watchlist">Watchlist</Link>

        </div>

    )
}
