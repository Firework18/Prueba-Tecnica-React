import React from 'react'

export default function PostCard({ title, body }) {
    return (
        <div className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-base-200">
            <div className="p-6 flex flex-col justify-between h-full">
                <div>
                    <h2 className="text-lg font-bold mb-3 line-clamp-2">
                        {title}
                    </h2>

                    <p className="text-sm text-base-content/70 line-clamp-3">
                        {body}
                    </p>
                </div>

                <div className="mt-6">
                    <button className="btn btn-primary btn-sm rounded-xl">
                        Leer más
                    </button>
                </div>
            </div>
        </div>
    )
}
