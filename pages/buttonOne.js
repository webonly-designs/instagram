import React from 'react'

function buttonOne() {
  return (
    <div className="bg-black flex items-center justify-center py-40">
        <button className="
            relative px-10 py-4 rounded-lg
            bg-purple-500 before:absolute before:rounded-lg
            before:inset-0 before:bg-red-500
            before:origin-bottom before:scale-x-0
            before:transition before:duration-300
            hover:before:origin-top hover:before:scale-x-100
        ">
            <span className="relative text-white text-xl rounded-lg">Instagram</span>
        </button>
    </div>
  )
}

export default buttonOne