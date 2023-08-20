import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from "../Services/GlobalApi"
const IMAGE_BASE_URL="https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

function Slider() {
  const [movieList,setmovieList] = useState([]);
  const elementRef= useRef()
    useEffect(() => {
        getTrendingMovies()
    },[])

    const getTrendingMovies = () =>{
        GlobalApi.getTrendingVideos.then(resp => {
            console.log(resp?.data?.results)
            setmovieList(resp?.data?.results)
        })
    }

  const sliderRight=(element)=>{
    element.scrollLeft += screenWidth-110
  }
  const sliderLeft=(element)=>{
    element.scrollLeft -= screenWidth-110
  }

  return (
    <div>
      <h2 className='hidden md:block absolute text-[20px] md:text-[60px] lg:text-[80px] mx-8 mt-[150px] md:mt-[250px] cursor-pointer' 
      onClick={()=>sliderRight(elementRef.current)}>
        ◀
      </h2>
      <h2 className='hidden md:block absolute text-[20px] md:text-[60px] lg:text-[80px] mx-8 mt-[150px] md:mt-[250px] cursor-pointer right-0'
      onClick={()=>sliderLeft(elementRef.current)}>
        ▶</h2>
    
    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none scroll-smooth' ref={elementRef}>
      {movieList.map((item) =>(
          <img src= {IMAGE_BASE_URL +item.backdrop_path} alt="" 
          className='min-w-full h-[200px] md:h-[300px] lg:h-[600px]  object-movie
          object-left-top mr-5 rounded-md hover:border-[4px] border-gray-500 transition-all duration-100 ease-in'/>
      ))}
    </div>
    </div> 
  )
}

export default Slider