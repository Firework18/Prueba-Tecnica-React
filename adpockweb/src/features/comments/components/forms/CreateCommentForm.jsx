import React from 'react'
import { useCreateComment } from '../../hooks/useCreateComment'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { commentSchema } from '../../../../schemas/commentSchema'
import { toast } from 'react-toastify'

export default function CreateCommentForm({ postId }) {

    const { data: dataCreateComment, mutate, isPending, isSuccess } = useCreateComment(postId)

    const { register, reset, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(commentSchema)
    })

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                toast.success('Comentario añadido correctamente')
                reset()
            }
            ,
            onError: (error) => {
                toast.error(getErrorMessage(error))
            }
        })
    }

    console.log('Data del comentario creado: ', dataCreateComment)

    return (
        <div>
            <div className="max-w-xl mx-auto bg-base-200 p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    Añadir un comentario
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <textarea placeholder="Contenido" className="textarea textarea-bordered w-full" rows="4"
                            {...register("body")} />
                        {errors.body && (
                            <p className="text-error text-sm">
                                {errors.body.message}
                            </p>
                        )}
                    </div>

                    <button type="submit" className="btn btn-primary w-full" disabled={isPending}>
                        {isPending ? "Enviando..." : "Publicar"}
                    </button>
                </form>
            </div>
        </div>
    )
}
