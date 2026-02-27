import React from 'react'
import { useParams } from 'react-router-dom'
import { usePokemon } from '../hooks/usePokemon'

export default function PokemonDetail() {

    const { name } = useParams()

    const { data } = usePokemon(name)



    return (
        <div>
            <div className='flex flex-col bg-green-400 justify-center items-center'>
                <div className='text-white max-w-full'>
                    <h1 className='capitalize font-extrabold text-2xl'>{name}</h1>
                    <div className='grid grid-cols-2 text-sm'>
                        <div className='bg-primary text-center rounded-xl uppercase text-xs py-1'>planta</div>
                        <div className='bg-primary text-center rounded-xl uppercase text-xs py-1'>planta</div>
                    </div>
                    <img src={data?.sprites.front_default} alt={`Imagen ${name}`} className='rounded-xl h-60 w-60 bg-green-400' />

                    <div className='containter'>
                        <p>sasas</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
