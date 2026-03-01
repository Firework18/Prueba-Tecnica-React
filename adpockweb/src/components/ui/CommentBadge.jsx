import React from 'react'

export default function CommentBadge({ name, username }) {
    return (
        <div>
            <div className="flex flex-wrap gap-3">
                <span className="badge badge-secondary badge-outline px-4 py-5 md:py-3 text-xs md:text-sm ">
                    Autor: {name}
                </span>

                {username ? <span className="badge badge-accent badge-outline px-4 py-5 md:py-3 text-xs md:text-sm">
                    @{username}
                </span> : ''}
            </div>
        </div>
    )
}
