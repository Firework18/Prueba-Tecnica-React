import React from 'react'
import CommentBadge from '../ui/CommentBadge'

export default function CommentCard({ comment }) {
    return (
        <div>
            <div>
                <CommentBadge name={comment.email.split('@')[0]} />
                <div className='bg-base-200 p-6 rounded-2xl leading-relaxed text-gray-700 shadow-inner text-xs md:text-sm'>
                    {comment.body}
                </div>
            </div>
        </div>
    )
}
