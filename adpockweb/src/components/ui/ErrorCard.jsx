import React from 'react'

export default function ErrorCard() {
    return (
        <>
            <div className=' flex justify-center' >
                <div className="card bg-base-100 w-full max-w-md shadow-sm">
                    <figure className="px-10 pt-10">
                        <img src="/img/error.jfif" alt="Imagen error" className='rounded-xl' />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Hubo un problema</h2>
                        <p>Inténtelo nuevamente en unos minutos</p>

                    </div>
                </div>
            </div >
        </>
    )
}
