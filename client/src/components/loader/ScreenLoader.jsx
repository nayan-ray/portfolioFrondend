import React from 'react'

const ScreenLoader = () => {
  return (
    <div className='fixed inset-0 bg-black z-[9999] flex items-center justify-center'>
        <div className="w-15 h-15 border-2.2 border-solid border-white rounded-full animate-spin">

        </div>
    </div>
  )
}

export default ScreenLoader