import React from 'react'

function Loading() {
  return (
    <div className='flex w-full flex-col items-center justify-Center '>
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24">
      </svg>
      Loading...
    </div>
  )
}

export default Loading