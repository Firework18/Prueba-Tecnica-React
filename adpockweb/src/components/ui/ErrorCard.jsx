import React from 'react'
import { getErrorMessage } from '../../helpers/errorMessageHelper'

export default function ErrorCard({ error }) {
    return (
        <>
            <div className=' flex justify-center' >
                <div className="card bg-base-100 w-full max-w-md shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src="/img/error-imagen.jpg" alt="Imagen error" className='rounded-xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hubo un problema</h2>
                        <p>{getErrorMessage(error)}</p>

                    </div>
                </div>
            </div >
        </>
    )
}
