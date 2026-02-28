import React from 'react'
import { Link } from 'react-router-dom'

export default function Pagination({ totalPokes, pokePerPage, setCurrentPage, currentPage }) {


    const totalPages = Math.ceil(totalPokes / pokePerPage)
    const maxVisible = 5

    let start = Math.max(currentPage - 2, 1)
    let end = Math.min(start + maxVisible - 1, totalPages)

    if (end - start < maxVisible - 1) {
        start = Math.max(end - maxVisible + 1, 1)
    }

    let visiblePages = []
    for (let i = start; i <= end; i++) {
        visiblePages.push(i)
    }


    return (
        <div className="w-full flex justify-center">
            <div className="hidden md:flex join items-center">
                <button
                    className='join-item btn'
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}
                >
                    «
                </button>

                {start > 1 && (
                    <>
                        <button className='join-item btn' onClick={() => setCurrentPage(1)}>1</button>
                        {start > 2 && <span className='join-item btn'>...</span>}
                    </>
                )}

                {visiblePages.map(page => (
                    <button
                        key={page}
                        className={`join-item btn ${page === currentPage ? 'bg-primary text-white ' : ''}`}
                        onClick={() => setCurrentPage(page)}
                    >
                        {page}
                    </button>
                ))}

                {end < totalPages && (
                    <>
                        {end < totalPages - 1 && <span className='join-item btn'>...</span>}
                        <button
                            className='join-item btn'

                            onClick={() => setCurrentPage(totalPages)}>
                            {totalPages}
                        </button>
                    </>
                )}

                <button
                    className='join-item btn'
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}
                >
                    »
                </button>

            </div>

            <div className="join grid grid-cols-2 md:hidden">
                <button
                    className="join-item btn btn-outline"
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(currentPage - 1)}>
                    Anterior
                </button>
                <button
                    className="join-item btn btn-outline"
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage(currentPage + 1)}>
                    Siguiente
                </button>
            </div>

        </div>
    )
}
