import React, { useState } from 'react'
import CommentBadge from '../../../../shared/ui/CommentBadge'
import { useDeleteComment } from '../../hooks/useDeleteComment'
import { useUpdateComment } from '../../hooks/useUpdateComment'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema } from '../../../../schemas/commentSchema'

export default function CommentCard({ comment, postId }) {

    const dataComment = comment ?? {}

    const { mutate: deleteComment, isPending: isDeleting } = useDeleteComment(postId)
    const { mutate: updateComment, isPending: isUpdating } = useUpdateComment(postId)

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            body: dataComment?.body
        }
    })

    const [isEditing, setIsEditing] = useState(false)

    const onSubmit = (data) => {
        updateComment({ id: dataComment.id, ...data }, {
            onSuccess: () => {
                toast.success('Comentario actualizado')
                setIsEditing(false)
                reset()
            }
        })

    }

    const handleDelete = () => {
        deleteComment(dataComment.id)
        toast.success('Comentario eliminado')
    }
    return (
        <div>
            <CommentBadge name={dataComment.email?.split('@')[0] || 'usuario'} />

            <div className='bg-base-200 p-6 rounded-2xl leading-relaxed text-gray-700 shadow-inner text-xs md:text-sm'>

                {isEditing ? (
                    <>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea
                                className="textarea textarea-bordered w-full"
                                {...register("body")}
                            />
                            {errors.body && (
                                <p className="text-error text-sm">
                                    {errors.body.message}
                                </p>
                            )}

                            <div className="flex gap-2 mt-3">
                                <button
                                    className="btn btn-primary btn-sm"
                                    type="submit"
                                    disabled={isUpdating}
                                >
                                    Guardar
                                </button>

                                <button
                                    className="btn btn-ghost btn-sm"
                                    onClick={() => setIsEditing(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>

                    </>
                ) : (
                    <>
                        {dataComment.body}

                        <div className="flex gap-2 mt-3 ">
                            <button
                                className="btn btn-warning btn-sm"
                                onClick={() => setIsEditing(true)}
                            >
                                Editar
                            </button>

                            <button
                                className="btn btn-error btn-sm"
                                onClick={handleDelete}
                                disabled={isDeleting}
                            >
                                Eliminar
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}