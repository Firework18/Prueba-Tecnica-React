import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Layout() {
    return (
        <div>
            <Navbar></Navbar>


            <Outlet />

            <Footer></Footer>
        </div>
    )
}
