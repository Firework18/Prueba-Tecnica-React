import React from 'react'

export default function About() {
    return (
        <div>
            {/* Sección Pokemones Evolucionan */}
            <section>
                <div className='container mx-auto'>
                    <div className='text-center m-10'>
                        <div className='container mx-auto'>
                            <div className='grid grid-cols-2'>
                                <div className='flex flex-col justify-center gap-10 mx-10'>
                                    <p className='badge badge-secondary p-5 font-extrabold uppercase text-2xl'>Sobre nosotros</p>
                                    <div className='text-xs'>
                                        <p>Somos un espacio creado por fans y para fans del universo poke. Nuestra web nace de la pasión por la aventura, la estrategia y la emoción de descubrir criaturas increíbles, explorar regiones fascinantes y compartir cada experiencia con una comunidad que siente lo mismo.</p>
                                        <p>Aquí encontrarás información, guías, curiosidades, noticias y contenido pensado para entrenadores de todos los niveles, desde quienes recién comienzan su viaje hasta los más experimentados que buscan perfeccionar sus estrategias.</p>
                                    </div>
                                </div>
                                <div>
                                    <img src="/img/pokemon-about.jpg" alt="Imagen About" className='rounded-xl' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
