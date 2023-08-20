// import { useState } from 'react'
import './App.css'
import GeneralMovieList from './Components/GeneralMovieList'
import Header from './Components/Header'
import ProductionHouse from './Components/ProductionHouse'
import Slider from './Components/Slider'

function App() {

  return (
    <>
      <div className='w-screen'>
        <Header/>

        <Slider/>

        <ProductionHouse/>

        <GeneralMovieList/>
      </div>
    </>
  )
}

export default App
