import React, { useState } from 'react'
import { useUpdateComment } from '../../hooks/useUpdateComment'
import { useForm } from 'react-hook-form'
import { commentSchema } from '../../schemas/commentSchema'
import { zodResolver } from '@hookform/resolvers/zod'

export default function UpdateCommentForm({ comment, postId, setIsEditing }) {
    const { mutate: updateComment, isPending: isUpdating } = useUpdateComment(postId)

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema),
        defaultValues: {
            body: comment.body
        }
    })
    const onSubmit = (data) => {
        updateComment({ id: comment.id, ...data }, {
            onSuccess: () => {
                toast.success('Comentario actualizado')
                setIsEditing(false)
                reset()
            },
            onError: (error) => {
                toast.error(getErrorMessage(error))
            }
        })

    }
    return (
        <div>
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
        </div>
    )
}
