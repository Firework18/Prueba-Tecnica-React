import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <div className="navbar bg-red-600 shadow-sm text-white">
                <div className="flex-1">
                    <Link to='/' className="btn btn-ghost text-xl">PokeWeb</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 font-bold">
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/about'>Nosotros</Link></li>
                        <li><Link to='/pokemones'>Pokemones</Link></li>

                        {/* <li>
                            <details>
                                <summary>Parent</summary>
                                <ul className="bg-base-100 rounded-t-none p-2">
                                    <li><a>Link 1</a></li>
                                    <li><a>Link 2</a></li>
                                </ul>
                            </details>
                        </li> */}
                    </ul>
                </div>
            </div>
        </>
    )
}
