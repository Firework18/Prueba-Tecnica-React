import React from 'react'

export default function PokemonCard({ pokemon }) {

    const { name } = pokemon

    return (
        <>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ver Pokemon</button>
                    </div>
                </div>
            </div>
        </>
    )
}
