import React from 'react'

import { usePostDetail } from '../hooks/usePostDetail'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import Hero from '../sections/Hero'
import PostCard from '../components/card/PostCard'
import PostDetailCard from '../components/card/PostDetailCard'
import Comments from '../sections/Comments'

export default function PostDetail() {

    const { postId } = useParams()

    const navigate = useNavigate()

    const { data: dataPost } = usePost(postId)
    const { body, title, id, userId } = dataPost ?? {}

    const { data: dataComments } = usePostDetail(postId)

    console.log('data del post: ', dataPost)
    console.log('data de comentarios del post: ', dataComments)

    const titulo = 'Explora el mundo Pokémon'
    const contenido = 'Descubre información esencial de cada Pokémon y comienza tu aventura como entrenador.'

    return (
        <div className='mb-10'>

            <Hero titulo={titulo} contenido={contenido}></Hero>

            <div className='flex justify-center items-center mb-10 mt-10'>
                <button
                    onClick={() => navigate(-1)}
                    className='btn btn-secondary flex flex-row justify-center text-center items-center gap-2'>
                    <i class="bi bi-arrow-left-circle"></i>
                    <p className='text-center my-5'>Volver</p>
                </button>
            </div>

            {/* Seccion Detalle del Post */}
            <section>
                <div className='container mx-auto'>
                    <div className='text-start m-10'>
                        <PostDetailCard title={title} body={body} postDetailId={id} userId={userId} key={id}></PostDetailCard>
                    </div>
                </div>
            </section>


            {/* Seccion comentarios */}

            <section>
                <div className="container mx-auto">
                    <div className='text-start m-10'>
                        <Comments dataComments={dataComments} />

                    </div>
                </div>
            </section>
        </div>
    )
}
