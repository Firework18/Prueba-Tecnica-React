import React from 'react'

export default function NotFoundCard() {
    return (
        <>
            <div className='flex justify-center'>
                <div className="card bg-base-100 w-96 shadow-sm">
                    <figure className="px-10 pt-10">
                        <img
                            src="/img/not-found.png"
                            alt="Imagen no encontrada"
                            className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">No encontramos resultados</h2>
                        <p>Intenta con otras palabras.</p>

                    </div>
                </div>
            </div>

        </>
    )
}
