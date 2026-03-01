import React from 'react'

import { usePostDetail } from '../hooks/usePostDetail'
import { useParams } from 'react-router-dom'
import { usePost } from '../hooks/usePost'
import Hero from '../sections/Hero'
import PostCard from '../components/card/PostCard'
import PostDetailCard from '../components/card/PostDetailCard'

export default function PostDetail() {

    const { postId } = useParams()

    const { data: dataPost } = usePost(postId)
    const { body, title, id, userId } = dataPost ?? {}

    const { data: dataComments } = usePostDetail(postId)

    console.log('data del post: ', dataPost)
    console.log('data de comentarios del post: ', dataComments)

    const titulo = 'Explora el mundo Pokémon'
    const contenido = 'Descubre información esencial de cada Pokémon y comienza tu aventura como entrenador.'

    return (
        <div>

            <Hero titulo={titulo} contenido={contenido}></Hero>


            <section>
                <div className='container mx-auto'>
                    <div className='text-start m-10'>
                        <PostDetailCard title={title} body={body} postDetailId={id} userId={userId} key={id}></PostDetailCard>
                    </div>
                </div>
            </section>

            <hr />



        </div>
    )
}
