import React from 'react'

export default function TypeCard({ type }) {

    const { name } = type

    return (
        <div className="rounded-md hover:scale-105 transition-all hover:animate-pulse">
            <img src={`/img/${name}.png`} alt="" className="w-full rounded-lg" />
            <p className='text-white'>{name}</p>
        </div>
    )
}