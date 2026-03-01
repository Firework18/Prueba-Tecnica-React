import React from 'react'
import CommentBadge from '../components/ui/CommentBadge'
import CommentCard from '../components/card/CommentCard'
import { data } from 'react-router-dom'

export default function Comments({ dataComments }) {
    return (
        <div className='flex justify-center'>
            <div className='space-y-4'>
                <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-xl p-8 space-y-8">
                    <h3 className='badge badge-secondary text-sm md:text-xl'>Comentarios</h3>

                    {dataComments?.map((comment) => (
                        <CommentCard key={comment.id} comment={comment} />
                    ))}
                </div>


            </div>
        </div>
    )
}
