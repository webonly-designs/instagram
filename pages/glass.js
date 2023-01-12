import React from 'react'

function Glass() {
  return (
    <div>
        <div className="min-h-screen w-full bg-cover bg-[url('/bg.png')] 
            flex items-center justify-center">
            <div className="w-80 h-60 rounded-lg bg-white 
            flex flex-col items-center justify-center px-10
            bg-opacity-5 backdrop-blur-lg shadow-xl">
                <h1 className='text-4xl font-bold'>Glass Effect!!</h1>
                <p className='text-xl text-center'>Like, Save and Follow If you Found
                the reel useful!!</p>
            </div>
        </div>
    </div>
  )
}

export default Glass