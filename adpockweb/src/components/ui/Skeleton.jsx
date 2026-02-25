import React from 'react'

export default function Skeleton() {
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            </div>

        </div>
    )
}
