import React from 'react'

const PageNotFoundPage = () => {
    return (
        <div className='flex flex-col items-center mt-8'>
            <div className='flex flex-col items-center'>
                <p className='text-xl mt-8'>Oops, the page you requested was not found. Let's go back <a href="/" className='text-green-500'>home</a></p>
            </div>
        </div>
    )
}

export default PageNotFoundPage