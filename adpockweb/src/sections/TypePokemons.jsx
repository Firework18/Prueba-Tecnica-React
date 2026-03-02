import React from 'react'
import TypeCard from '../components/card/TypeCard'
import { usePokemonType } from '../hooks/usePokemonType'
import Skeleton from '../components/ui/Skeleton'
import ErrorCard from '../components/ui/ErrorCard'

export default function TypePokemons() {

    // Extraemos los tipos 
    const { data: typeData, isLoading, error } = usePokemonType()
    const filteredType = typeData?.results?.slice(9, 13)

    return (
        <div className="max-w-5xl mx-auto">


            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center md:mx-60 lg:mx-60'>
                {isLoading && Array.from({ length: 4 }).map((_, index) => (
                    <div class="skeleton h-50 w-50"></div>
                ))}
            </div>

            {error && (
                <ErrorCard error={error}></ErrorCard>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center md:mx-60">
                {filteredType?.map(type =>
                    <TypeCard type={type} key={type.name} />
                )}

            </div>
        </div>
    )
}
