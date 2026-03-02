import React from 'react'

export default function Skeleton() {
    return (
        <div>
            <div className="card bg-base-100 shadow-sm hover:scale-105 transition-all pb-5">
                <figure className="px-5 pt-10">
                    <div className="skeleton w-50 h-50"></div>
                </figure>
                <div className="card-body items-center text-center">

                    <div className="flex flex-col gap-4">
                        <div className='flex flex-row gap-2'>
                            <div className="skeleton h-4 w-25"></div>
                            <div className="skeleton h-4 w-25"></div>
                        </div>

                        <div className="skeleton h-10 w-30 self-center"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
