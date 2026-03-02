import React from 'react'
import Hero from '../sections/Hero'

export default function About() {

    const titulo = 'Descubre quienes somos'
    const contenido = 'Conoce un poco más sobre nosotros, nuestra pasión por el mundo Pokémon'

    return (
        <div>
            <Hero titulo={titulo} contenido={contenido}></Hero>
            <section className="bg-base-200 py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">

                        <div className="flex flex-col justify-center gap-6">
                            <p className="badge badge-secondary text-sm md:text-xl lg:text-2xl font-extrabold uppercase p-4 self-start">
                                Sobre nosotros
                            </p>

                            <div className="text-sm text-base-content/80 space-y-4">
                                <p>Somos un espacio creado por fans y para fans del universo Pokémon. Nuestra web nace de la pasión por la aventura, la estrategia y la emoción de descubrir criaturas increíbles, explorar regiones fascinantes y compartir cada experiencia con una comunidad que siente lo mismo.</p>
                                <p>Aquí encontrarás información, guías, curiosidades, noticias y contenido pensado para entrenadores de todos los niveles, desde quienes recién comienzan su viaje hasta los más experimentados que buscan perfeccionar sus estrategias.</p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            <img
                                src="/img/pokemon-about.jpg"
                                alt="Imagen About"
                                className="rounded-xl shadow-lg object-cover max-h-96 w-full animate-pulse"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}