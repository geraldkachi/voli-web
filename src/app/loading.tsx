import React from 'react'
import { LoadingComponent } from '../components'

const loading = () => {
  return (
    <div className='flex items-center justify-center h-screen'>
      {/* <LoadingComponent />    */}


      <div role="status" className="max-w-sm animate-pulse">
        <div className="h-2.5 bg-[#01C467] rounded-full w-48 mb-4"></div>
        <div className="h-2 bg-[#01C467] rounded-full max-w-[360px] mb-2.5"></div>
        <div className="h-2 bg-[#01C467] rounded-full mb-2.5"></div>
        <div className="h-2 bg-[#01C467] rounded-full max-w-[330px] mb-2.5"></div>
        <div className="h-2 bg-[#01C467] rounded-full max-w-[300px] mb-2.5"></div>
        <div className="h-2 bg-[#01C467] rounded-full max-w-[360px]"></div>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default loading
// gem pristine prism --version 0.27.0