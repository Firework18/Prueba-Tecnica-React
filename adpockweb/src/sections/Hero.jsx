import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero({ titulo, contenido, boton }) {
    return (
        <div>
            <div
                className="hero h-96"
                style={{
                    backgroundImage:
                        "url('/img/pokemon_portada.png')",
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-3xl font-extrabold text-white">{titulo}</h1>
                        <p className="mb-5 text-sm">
                            {contenido}
                        </p>
                        {boton != null ? <Link to='/pokemones'> <button className='btn btn-secondary'>{boton}</button> </Link> : ''}
                    </div>
                </div>
            </div >
        </div>
    )
}
