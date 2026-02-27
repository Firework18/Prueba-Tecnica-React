import React from 'react'

export default function Attributte({ title, attributte }) {
    return (
        <>
            <div className='flex flex-col gap-1 text-center items-center'>
                <div className='uppercase badge badge-secondary'>{title}</div>
                <p className='badge badge-base-100'>{attributte}</p>
            </div>
        </>
    )
}
