import React from 'react'

export const Pagination = ({ handleNext, handlePrev, pageno }) => {
    return (

        <div className='pagination'>

            <i className="fa-solid fa-arrow-left" onClick={handlePrev}></i>
            <p className='pageno'>Page {pageno}</p>
            <i className="fa-solid fa-arrow-right" onClick={handleNext}></i>

        </div>

    )
}

