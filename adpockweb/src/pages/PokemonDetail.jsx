import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'
import Attributte from '../components/ui/Attributte'
import { useSpecie } from '../hooks/useSpecie'
import Hero from '../sections/Hero'
import { changeColorCard } from '../helpers/changeColorCard'

export default function PokemonDetail() {
    const navigate = useNavigate()
    const { name } = useParams()
    const { data } = usePokemon(name)
    const { data: dataSpecie } = useSpecie(data?.id)
    const color = dataSpecie?.color?.name || ''
    const gradient = changeColorCard(color)

    const titulo = 'Explora las estadísticas y movimientos'
    const contenido = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia architecto'

    return (
        <>
            <Hero titulo={titulo} contenido={contenido}></Hero>
            <div className=" bg-base-300 py-10 px-4 mb-20">
                {/* Botón volver */}
                <div className='flex justify-center items-center mb-10'>
                    <button
                        onClick={() => navigate(-1)}
                        className='btn btn-secondary flex flex-row justify-center text-center items-center gap-2'>
                        <i class="bi bi-arrow-left-circle"></i>
                        <p className='text-center my-5'>Volver</p>
                    </button>
                </div>
                <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10">
                    {/* Card de imágen */}
                    <div className={`bg-linear-to-br ${gradient} text-white rounded-3xl p-8 flex flex-col items-center w-full lg:w-1/2 shadow-xl hover:scale-105 transition-all`}>
                        <p className='text-gray-400'>ID #{data?.id}</p>
                        <h1 className="capitalize text-4xl font-extrabold mb-4">{name}</h1>

                        {/* Tipo del pokemon */}
                        <div className="flex gap-3 mb-6">
                            {data?.types.map((type) => (
                                <span key={type.type.name} className="bg-accent px-4 py-1 rounded-full text-sm uppercase">
                                    {type.type.name}
                                </span>
                            ))}
                        </div>

                        <img src={data?.sprites.other['official-artwork'].front_default} alt={`Imagen ${name}`}
                            className="w-72 h-72 object-contain" />

                        {/* Atributos */}
                        <div className="grid lg:grid-cols-3 gap-4 mb-8 justify-center">
                            <Attributte title="Altura" attributte={data?.height / 10 + " m"} />
                            <Attributte title="Peso" attributte={data?.weight / 10 + " kg"} />
                            <Attributte title="Base Exp" attributte={data?.base_experience} />
                        </div>
                    </div>


                    {/* Card de info */}
                    <div className='flex flex-col lg:w-1/2 gap-2'>
                        <div className={`bg-base-100 rounded-3xl p-8 w-full lg:h-3/4 shadow-xl`}>

                            {/* Estadisticas del pokemon */}
                            <h3 className="badge badge-error p-3 text-xl font-semibold mb-4">Estadísticas</h3>

                            <div className="">
                                {data?.stats.map((stat) => (
                                    <div key={stat.stat.name}>
                                        <div className="flex justify-between text-sm mb-1 capitalize">
                                            <span>{stat.stat.name}</span>
                                            <span>{stat.base_stat}</span>
                                        </div>

                                        <progress
                                            className="progress progress-secondary w-full hover:animate-pulse"
                                            value={stat.base_stat}
                                            max="150" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Habilidades del pokemon */}
                        <div className='bg-base-100 rounded-3xl p-5 w-full'>
                            <h3 className="badge badge-accent p-3 text-xl font-semibold mb-4">Habilidades</h3>
                            <div className='grid grid-cols-2 gap-2 place-self-center'>
                                {data?.abilities.map(item =>
                                    <p className='badge badge-secondary'>{item.ability?.name}</p>
                                )}
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}