import React from 'react'
import TypeCard from '../components/card/TypeCard'
import { usePokemonType } from '../hooks/usePokemonType'

export default function TypePokemons() {

    // Extraemos los tipos 
    const { data: typeData } = usePokemonType()
    const filteredType = typeData?.results?.slice(9, 13)

    return (
        <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center md:mx-60">
                {filteredType?.map(type =>
                    <TypeCard type={type} key={type.name} />

                )}

            </div>
        </div>
    )
}
