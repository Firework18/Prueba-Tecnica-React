import React from 'react'

export default function CreateCommentForm() {
    return (
        <div>
            <div className="max-w-xl mx-auto bg-base-200 p-6 rounded-2xl shadow-md">
                <h2 className="text-xl font-bold mb-4 text-center">
                    Añadir un comentario
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {isSuccess && (
                        <p className='badge badge-success'>Comentario añadido correctamente</p>
                    )}

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
