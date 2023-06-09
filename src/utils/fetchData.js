// 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList'
import axios from "axios";

export  const exerciseOptions = {
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

  export const youtubeSearchOptions= {
    
    
    headers: {
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };    

export const fetchData = async (url, options)=>{
    const response = await axios.get(url,options
     );
    console.log('response received')
    console.log(response)
    // const data = await response.json();

     return response.data

}