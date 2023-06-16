"use client";

import React, { useEffect } from 'react'

function Error({
  error,
  reset
}:{
  error: Error;
  reset: ()=> void;
}) {

  useEffect(()=>{
    console.log("error", error)
  },[error])
  
  return (
    <div>
      <h1>Something went wrong</h1>
      <button
      onClick={()=> reset()}>
        Reset
      </button>
    </div>
  )
}

export default Error