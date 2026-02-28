import React from 'react'
import { useForm } from "react-hook-form"
import { useCreatePost } from '../../hooks/useCreatePost'
import { zodResolver } from '@hookform/resolvers/zod'
import { postSchema } from '../../schemas/postSchema'
import { toast } from 'react-toastify'
import { da } from 'zod/v4/locales'

export default function CreatePostForm() {

    const { data: dataCreatePost, mutate, isPending, isSuccess } = useCreatePost()

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: zodResolver(postSchema)
    })

    const onSubmit = (data) => {
        mutate(data, {
            onSuccess: () => {
                reset()

            }
        })
    }



    return (
        <>
            <div className="max-w-xl mx-auto bg-base-200 p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    Crear Post
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {isSuccess && (
                        <p className='badge badge-success'>Enviado Correctamente</p>
                    )}
                    <div>
                        <input type="text" placeholder="Título" className="input input-bordered w-full"
                            {...register("title")} />

                        {errors.title && (
                            <p className="text-error text-sm">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

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

        </>
    )
}
