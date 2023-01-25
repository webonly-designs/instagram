import React from 'react'

function HoverAni() {
  return (
    <div className="bg-yellow-400 p-20">
        <button className="px-6 py-2 rounded-full bg-white 
        font-bold shadow-sm hover:scale-105 transition 
        duration-300 ease-in hover:shadow-xl"
        >
            Hover Animation
        </button>
    </div>
  )
}

export default HoverAni