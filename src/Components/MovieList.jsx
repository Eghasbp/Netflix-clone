import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'


function MovieList({genreId,index_}) {
    const [movieList,setmovieList] =useState([])
    const elementRef=useRef(null)
    
    useEffect(() =>{
    getMovieByGenreId()
    },[])

    const getMovieByGenreId=()=>{
        GlobalApi.getMovieByGenreId(genreId).then(resp =>{
            // console.log(resp.data.results)
            setmovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft += 500;
      }
      const slideLeft=(element)=>{
        element.scrollLeft -= 500;
      }

  return (
    <div >
        <h2 className='hidden md:block absolute text-[20px] md:text-[50px] lg:text-[50px] mx-8 mt-[50px] md:mt-[100px] cursor-pointer z-10' 
      onClick={()=>slideLeft(elementRef.current)}>
        ◀
      </h2>
    
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none pt-5 px-3 pb-5 scroll-smooth'>
        {
            movieList.map((item,index) => (
                <MovieCard movie={item}/>
            ))
        }
    </div>
    <h2 className='hidden md:block absolute text-[20px] z-10 md:text-[50px] lg:text-[50px] mx-8 mt-[100px] md:mt-[-200px] cursor-pointer right-0'
      onClick={()=>slideRight(elementRef.current)}>
        ▶</h2>
    </div>
  )
}

export default MovieList