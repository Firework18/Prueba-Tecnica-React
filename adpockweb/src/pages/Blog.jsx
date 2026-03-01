import React, { useState } from 'react'
import Hero from '../sections/Hero'
import PostCard from '../components/card/PostCard'

import { usePosts } from '../hooks/usePosts.js'
import PagSection from '../sections/PagSection.jsx'
import CreatePostForm from '../components/forms/CreatePostForm.jsx'

export default function Blog() {

    const { data } = usePosts()

    console.log(data?.length)

    const postData = data ?? []
    const [currentPage, setCurrentPage] = useState(1)
    const [postPerPage, setPostPerPage] = useState(8)

    const lastPostIndex = currentPage * postPerPage
    const firstPostIndex = lastPostIndex - postPerPage

    const currentPost = postData?.slice(firstPostIndex, lastPostIndex)

    const titulo = 'Lorem ipsum dolor sit amet'
    const contenido = 'amet consectetur adipisicing elit. Mollitia architecto veniam expedita'

    return (
        <div>
            <Hero titulo={titulo} contenido={contenido} ></Hero>
            {/* Sección Lista de Posts */}
            <section className='bg-base-300'>
                <div className='container mx-auto'>
                    <div className='text-center pt-10'>
                        <h3 className='badge badge-accent font-extrabold lg:text-2xl p-5 mb-10'>Listado de Posts</h3>


                        <div className='mb-10'>
                            <CreatePostForm></CreatePostForm>
                        </div>

                        <PagSection pokeData={postData} pokePerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPokePerPage={setPostPerPage} tipo={'posts'} />


                        <div className='grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10'>
                            {currentPost.map(post =>
                                <PostCard title={post.title} body={post.body} postId={post.id} key={post.id} />
                            )}
                        </div>

                        <PagSection pokeData={postData} pokePerPage={postPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} setPokePerPage={setPostPerPage} tipo={'posts'} />

                    </div>
                </div>
            </section>
        </div>
    )
}
