import React from 'react'
import { Link } from 'react-router-dom'
import DarkModeToggle from '../ui/DarkModeToggle'

export default function Navbar() {
    return (
        <div className="navbar bg-secondary shadow-sm relative text-white">

            {/* Izquierda */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
                        <i className="bi bi-list "></i>
                    </div>

                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                        <li><Link to='/'>Inicio</Link></li>
                        <li><Link to='/about'>Nosotros</Link></li>
                        <li><Link to='/pokemones'>Pokemones</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>

            <div className="absolute left-1/2 -translate-x-1/2 lg:static lg:translate-x-0">
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src="/img/logo-pokemon.png" className="h-10" alt="Logo" />
                </Link>
            </div>

            <div className="navbar-end lg:hidden">
                <DarkModeToggle></DarkModeToggle>

            </div>


            {/* Derecha */}
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal justify-center items-center text-xs">
                    <DarkModeToggle></DarkModeToggle>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/about'>Nosotros</Link></li>
                    <li><Link to='/pokemones'>Pokemones</Link></li>
                    <li><Link to='/blog'>Blog</Link></li>
                </ul>
            </div>

        </div>
    )
}