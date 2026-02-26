import React from 'react'

export default function Pagination({ totalPokes, pokePerPage, setCurrentPage, currentPage }) {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPokes / pokePerPage); i++) {
        pages.push(i)
    }

    console.log(pages)

    return (
        <div className='container max-w-xl mx-auto'>
            <div className="join">
                {
                    pages.map((page, index) => {
                        return <button className={`join-item btn ${page == currentPage ? 'bg-primary text-white' : ''}`} key={index} onClick={() => setCurrentPage(page)}>
                            {page}
                        </button>
                    })
                }
            </div>

        </div>
    )
}
