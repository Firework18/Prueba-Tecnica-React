import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
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
                        <h1 className="mb-5 text-5xl font-extrabold text-white">PokeWeb</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <Link to='/store'><button className="btn bg-red-600 text-white">Ver Pokemones</button></Link>
                    </div>
                </div>
            </div >
        </div>
    )
}
