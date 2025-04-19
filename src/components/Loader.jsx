import React from 'react'
import {Loader as LoaderIcon } from 'lucide-react'

function Loader({loading, loadingText}) {
    if(!loading){
        return null;
    }

  return (
    <div className='fixed top-0 left-0 bg-gray-500/40 w-full min-h-screen flex justify-center'>
      <div>
        <LoaderIcon className='block mx-auto mt-[100px] animate-spin h-10 w-10' />
        <h1 className='mt-4 text-2xl text-center'>{loadingText}</h1>
      </div>
    </div>
  )
}

export default Loader;
