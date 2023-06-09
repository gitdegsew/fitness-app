import React, { useEffect, useState } from 'react'
import { exerciseOptions ,fetchData } from '../utils/fetchData'
import HorizontalScrollBar from './HorizontalScrollBar'


const SearchExersices = ({setExercises,bodyPart,setBodyPart}) => {
  const [search ,setSearch] =useState('')
  
  const [bodyParts, setBodyParts] = useState([])
  function scrollToExercise() {
    document.getElementById('exercises').scrollIntoView();
    // will scroll to 4th h3 element
  }
  const handleSearch =async() =>{
   
    if(search){
      let exerciseData
      scrollToExercise()
       try {
          exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
        
        const searchedExercises = exerciseData.filter((item) => item.name.includes(search) ||
        item.bodyPart.includes(search) ||
        item.target.includes(search) ||
        item.equipment.includes(search)
        
        )

        setSearch('')
        setExercises([...searchedExercises])
        
        
       } catch (error) {
        console.log('error')
        console.log(error)
       }

    }
  }


  useEffect(()=>{
    if(bodyParts.length==0){
      console.log('And it happend')
      fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions).then(data=>{
      setBodyParts(data)
      // console.log('body parts')
      // console.log(data)
      sessionStorage.setItem('bodyParts',JSON.stringify(data))


    }).catch(error => console.log('error ',error))
    }
  },[])

  return (
    <div className='flex flex-col items-center mt-[37px] justify-center p-[20px]  ' >
    <p className='text-[30px] font-[700] lg:text-[44px] mb-[50px] text-center'>
        Awsome Exercises You <br/>
        Should Know
    </p >
    <div className="flex w-[90%] justify-center" >
        <input 
        type='text'
        value={search}
        onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
        placeholder='Search Exercises'
         className='border-solid border h-10 rounded-l-md border-slate-400 w-[80%] font-[700] p-3' />
        <button onClick={handleSearch} className='bg-[#ff2625] text-white w-[80px] lg:w-[175px] text-[14px] lg:text-[20px] h-10'>search</button>
    </div>
    <HorizontalScrollBar data={bodyParts} bodyParts={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyPart={true} />
</div>
  )
}

export default SearchExersices