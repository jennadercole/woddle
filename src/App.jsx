import { useState } from 'react'
import InputForm from './InputForm'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import WordFilter from './WordFilter'

function App() {

  return (
    <>
    <div id="page-wrap">
      <Header />
       <div className="clear"> </div>
       <div id="main-content">
        <InputForm />
        <WordFilter />
       </div>
    </div>
      <Footer />
    </>
  )
}

export default App
