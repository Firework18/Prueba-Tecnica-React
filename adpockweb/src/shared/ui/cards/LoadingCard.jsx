import React from 'react'

export default function LoadingCard() {
    return (
        <div>
            <div className="card bg-primary-content shadow-sm hover:scale-105 transition-all">
                <figure className="px-5 pt-10">
                    <div className="skeleton h-32 w-32"></div>
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name.toUpperCase()}</h2>

                    <div className='grid grid-cols-2 gap-1'>
                        {data?.types.map(type =>
                            <div className='badge badge-secondary'>{type?.type.name}</div>
                        )}

                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Ver Pokemon</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
