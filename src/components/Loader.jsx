import React from 'react'
import { InfinitySpin } from 'react-loader-spinner'
const Loader = () => {
  return (
    <div className='flex justify-center items-center w-[100%]' >
        <InfinitySpin color="gray" />
    </div>
  )
}

export default Loader