import React from 'react'

export default function SkeletonPostDetail() {
    return (
        <div className="flex justify-center">
            <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-xl p-8 space-y-8">
                <div className="space-y-4">
                    {/* Título */}
                    <div className="skeleton h-8 w-3/4"></div>

                    {/* Badges de Autor */}
                    <div className="flex flex-wrap gap-3">
                        <div className="skeleton h-8 w-32 rounded-full"></div>
                        <div className="skeleton h-8 w-40 rounded-full"></div>
                    </div>
                </div>

                {/* Contenido */}
                <div className="space-y-3">
                    <div className="skeleton h-4 w-24"></div>
                    <div className="bg-base-200 p-6 rounded-2xl space-y-3">
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-full"></div>
                        <div className="skeleton h-4 w-5/6"></div>
                        <div className="skeleton h-4 w-4/6"></div>
                    </div>
                </div>

                {/* Imagen */}
                <div className="flex justify-center">
                    <div className="bg-base-200 p-6 rounded-3xl shadow-md">
                        <div className="skeleton w-72 h-72 rounded-2xl"></div>
                    </div>
                </div>

            </div>
        </div>
    )
}
