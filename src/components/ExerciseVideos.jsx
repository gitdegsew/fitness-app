import React from 'react'
import Loader from './Loader'

const ExerciseVideos = ({exerciseVideos,name}) => {


  
  return (
    <div className='mt-[20px] lg:mt-[200px] p-[50px]  ' >
      <h2 className='mb-[33px] text-[2rem]' >
        Watch <span className='text-[#ff2625] capitalize ' >{name}</span>  exercise videos
      </h2>
     {!exerciseVideos.length?<Loader/>: <div className='flex justify-around items-center flex-wrap  flex-col lg:flex-row gap-x-10  ' >
        {exerciseVideos?.slice(0,6).map((item, index) =>(
          item.video && <a className='w-[300px] h-[300px]  hover:animate-showUp' key={index} href={`https://www.youtube.com./watch?v=${item.video.videoId}`} target='_blank' rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} className='rounded-md'  />
            <div className='p-4'>
              <p>
                {item.video.title}
              </p>
              <p className='text-[12px] text-gray-700 font-semibold' >
                {item.video.channelName}
              </p>
            </div>
          </a>
        ))}
      </div>}
    </div>
  )
}

export default ExerciseVideos