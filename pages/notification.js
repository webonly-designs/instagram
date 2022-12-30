import React from 'react'
import toast, {Toaster} from 'react-hot-toast'

const success = ()=> {
    toast.success("Success")
}

const error = ()=> {
    toast.error("Error")
}

function Notification() {
  return (
    <div>
        <Toaster />
        <div className="bg-black flex items-center justify-center py-24">
            <button
                onClick={success}
                className="text-white py-2 px-6 bg-sky-500 
                    hover:bg-green-500 rounded-md mr-4"
            > 
                Success
            </button>
            <button
                onClick={error}
                className="text-white py-2 px-6 bg-sky-500 
                    hover:bg-red-500 rounded-md"
            > 
                Error
            </button>    
        </div>
    </div>
  )
}

export default Notification