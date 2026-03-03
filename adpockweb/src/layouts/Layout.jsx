import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import { Outlet } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'bootstrap-icons/font/bootstrap-icons.css'

export default function Layout() {
    return (
        <div className='bg-base-300'>
            <Navbar></Navbar>

            <Outlet />

            <Footer></Footer>

            <ToastContainer />

        </div>
    )
}
