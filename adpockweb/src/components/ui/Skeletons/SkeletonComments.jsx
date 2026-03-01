import React from 'react'

export default function SkeletonCommentCard() {
    return (
        <div className="space-y-4">

            {/* Badge */}
            <div className="flex flex-wrap gap-3">
                <div className="skeleton h-8 w-32 rounded-full"></div>
            </div>

            {/* Body */}
            <div className="bg-base-200 p-6 rounded-2xl shadow-inner space-y-3">
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="skeleton h-4 w-5/6"></div>
                <div className="skeleton h-4 w-3/4"></div>
            </div>

        </div>
    )
}