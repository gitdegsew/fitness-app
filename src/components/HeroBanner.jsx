import React from 'react'
import heroBanner from '../assets/images/banner.png'

const HeroBanner = () => {
  function scrollToExercise() {
    document.getElementById('exercises').scrollIntoView();
    // will scroll to 4th h3 element
  }
  
  return (
    <div className='mt-70px lg:mt-[112px] ml-[50px] z-20   p-[20px] relative ' >
        <p className='text-[#ff2625] font-[600] text-[26px]' >Fitness Club</p>
        <p className='font-[700] text-[24px] lg:text-[44px] my-5 text-[#09202f] '>Sweat, Smile <br/> and Repeat</p>
        <p className="text-[22px] leading-[35px] mb-6" >Check out the most effective exercises</p>
        <button onClick={scrollToExercise}  className='bg-[#ff3232] text-white text-xl rounded-md cursor-pointer  p-2 w-48'>Explore Exercises</button>
        <p className='text-[200px] opacity-10 max-md:hidden -z-50'>Exercises</p>
        <img src={heroBanner} className='md:absolute -top-40 max-lg:mt-20 right-0 max-sm:left-0   w-[100vh] md:w-[45%] '   />
    </div>
  )
}

export default HeroBanner