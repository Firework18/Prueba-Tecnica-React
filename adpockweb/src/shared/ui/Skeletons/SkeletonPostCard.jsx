import React from 'react'

export default function SkeletonPostCard() {
    return (
        <div className="bg-base-100 rounded-2xl shadow-md border border-base-200 p-6 flex flex-col justify-between h-full">

            <div className="space-y-4">
                <div className="skeleton w-3/4 h-6 rounded-md"></div>

                <div className="space-y-2">
                    <div className="skeleton w-full h-4 rounded-md"></div>
                    <div className="skeleton w-5/6 h-4 rounded-md"></div>
                    <div className="skeleton w-2/3 h-4 rounded-md"></div>
                </div>
            </div>

            <div className="mt-6">
                <div className="skeleton w-24 h-8 rounded-xl"></div>
            </div>
        </div>
    )
}
