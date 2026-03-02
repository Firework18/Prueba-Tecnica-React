import React, { useState } from 'react'
import CommentBadge from '../components/ui/CommentBadge'
import CommentCard from '../components/card/CommentCard'
import { data } from 'react-router-dom'
import PagSection from './PagSection'
import SkeletonComments from '../components/ui/Skeletons/SkeletonComments'
import CreateCommentForm from '../components/forms/CreateCommentForm'
import { useComments } from '../hooks/useComments'

export default function Comments({ postId }) {

    const { data: dataComments, isLoading: isLoadingComments } = useComments(postId)

    const commentData = dataComments ?? []
    const [currentPage, setCurrentPage] = useState(1)
    const [commentPerPage, setCommentPerPage] = useState(8)

    const lastCommentIndex = currentPage * commentPerPage
    const firstCommentIndex = lastCommentIndex - commentPerPage

    const currentComments = commentData?.slice(firstCommentIndex, lastCommentIndex)

    return (
        <div className='flex justify-center'>
            <div className='space-y-4'>
                <div className="w-full max-w-5xl bg-base-100 rounded-3xl shadow-xl p-8 space-y-8">
                    <h3 className='badge badge-secondary text-sm md:text-xl'>Comentarios</h3>

                    <CreateCommentForm postId={postId} />

                    {currentComments?.length > 0 && !isLoadingComments && (
                        <PagSection pokeData={commentData} pokePerPage={commentPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPokePerPage={setCommentPerPage} tipo={'comentarios'} />

                    )}

                    {isLoadingComments
                        ? <SkeletonComments />
                        : currentComments?.map((comment) => (
                            <CommentCard key={comment.id} comment={comment} postId={postId} />
                        ))
                    }

                    {currentComments?.length === 0 && !isLoadingComments && (
                        <p className='text-center text-gray-500'>No hay comentarios aún. ¡Sé el primero en comentar!</p>
                    )}

                    {currentComments?.length > 0 && !isLoadingComments && (
                        <PagSection pokeData={commentData} pokePerPage={commentPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPokePerPage={setCommentPerPage} tipo={'comentarios'} />

                    )}
                </div>


            </div>
        </div>
    )
}
