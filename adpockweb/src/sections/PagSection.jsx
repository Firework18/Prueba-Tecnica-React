import React from 'react'
import Pagination from '../pages/pokemonpage/Pagination'

export default function PagSection({ pokeData, pokePerPage, setCurrentPage, currentPage, setPokePerPage }) {
    return (
        <div>
            <section className="my-10 flex flex-col items-center">
                <Pagination totalPokes={pokeData?.length} pokePerPage={pokePerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
                <div className='flex flex-col md:flex-row gap-5 mt-5 items-center justify-center'>
                    <div className='badge badge-secondary'>Filtrar por</div>
                    <select name="filtrar" value={pokePerPage}
                        onChange={(e) => {
                            setPokePerPage(Number(e.target.value))
                            setCurrentPage(1)
                        }}>
                        <option value={10}>10 pokémones</option>
                        <option value={20}>20 pokémones</option>
                        <option value={50}>50 pokémones</option>
                        <option value={100}>100 pokémones</option>
                    </select>
                </div>
            </section>
        </div>
    )
}
