import React from 'react'
import { useUser } from '../../hooks/useUser'

export default function PostDetailCard({ title, body, postDetailId, userId }) {

    const { data: dataUser } = useUser(userId)
    const { name, username } = dataUser ?? {}

    return (
        <div>
            <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
                <div className='flex flex-col gap-10'>
                    <h2 className='badge badge-primary py-5 uppercase text-xl font-bold mb-2'>{title}</h2>
                    <div className='place-items-center'>Autor: <p className='badge badge-soft badge-secondary'>{name}</p></div>
                    <div className='place-items-center'>Username: <p className='badge badge-soft badge-secondary'>@{username}</p></div>

                    <div className='badge badge-soft badge-primary'>Contenido:</div>
                    <div className='bg-base-300 mx-10 p-5 rounded-2xl shadow-sm'>
                        <p className='text-gray-700 mb-4'>
                            {body}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}
