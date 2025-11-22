import { useState } from 'react'
import InputForm from './InputForm'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import WordFilter from './WordFilter'

function App() {

  return (
    <>
      <Header />
      <InputForm />
      <WordFilter />
      <Footer />
    </>
  )
}

export default App
