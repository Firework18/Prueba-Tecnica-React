import React from 'react'
import { useUser } from '../../hooks/useUser'
import { usePokemon } from '../../hooks/usePokemon'
import CommentBadge from '../ui/CommentBadge'

export default function PostDetailCard({ title, body, postDetailId, userId }) {

    const { data: dataUser } = useUser(userId)
    const { name, username } = dataUser ?? {}

    // Generar un ID aleatorio para obtener un Pokémon diferente cada vez
    const randomId = Math.floor(Math.random() * 1025) + 1

    const { data: dataPoke, isLoading: isLoadingPoke } = usePokemon(`/${randomId}`)
    const { front_default } = dataPoke?.sprites.other['official-artwork'] ?? {}

    return (
        <div className="flex justify-center">
            <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-xl p-8 space-y-8">

                <div className="space-y-4">
                    <h2 className="text-md sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-primary uppercase tracking-wide">
                        {title}
                    </h2>
                    <CommentBadge name={name} username={username} />
                </div>

                {/* Contenido */}
                <div className="space-y-3">
                    <div className="text-sm font-semibold text-primary uppercase tracking-wider">
                        Contenido
                    </div>
                    <div className="bg-base-200 p-6 rounded-2xl leading-relaxed text-gray-700 shadow-inner text-xs md:text-sm">
                        {body}
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-center">
                    <div className="bg-base-200 p-6 rounded-3xl shadow-md">
                        {isLoadingPoke ? (
                            <div className="w-72 h-72 flex items-center justify-center">
                                <div className="skeleton h-full w-full"></div>
                            </div>
                        ) : (
                            <img src={front_default} alt="Pokemon" className="w-72 h-72 object-contain transition-transform duration-300 hover:scale-105" />
                        )}
                    </div>
                </div>

            </div>
        </div>
    )
}
