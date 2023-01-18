import React from 'react'
import {  FaImage } from 'react-icons/fa'
import { IoMdContact } from "react-icons/io"

function Loading() {
  return (
    <div className="bg-black h-screen py-20">
        <div className="max-w-sm mx-auto p-6 border border-gray-700 rounded animate-pulse">
            <div className="flex items-center justify-center bg-gray-700 h-48 rounded mb-4">
                <FaImage className='w-12 h-12 text-gray-500'/>
            </div>
            <div className="h-2.5 rounded-full bg-gray-700 w-48 mb-4"></div>
            <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            <div className="h-2 rounded-full bg-gray-700 mb-2.5"></div>
            <div className="h-2 rounded-full bg-gray-700"></div>
            <div className="flex items-center mt-4 space-x-3">
                <IoMdContact className='w-12 h-12 text-gray-700'/>
                <div>
                    <div class="h-2.5 rounded-ful bg-gray-700 w-24 mb-2"></div>
                    <div class="w-48 h-2 rounded-full bg-gray-700"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loading