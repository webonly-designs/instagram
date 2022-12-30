import React from 'react'
import { FaAngleDoubleDown } from "react-icons/fa";

function refresh() {
  return (
    <div className="bg-black flex justify-center py-20">
        <div className="flex flex-col justify-center items-center">
            <p className="text-4xl font-bold text-white mb-6">Scroll Down</p>
            <FaAngleDoubleDown className="w-16 h-16
            text-white animate-bounce"/>
         </div>
    </div>
  )
}

export default refresh