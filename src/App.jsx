// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import HelloWord from "./components/HelloWord.jsx";
import SayMyName from "./components/SayMyName.jsx";
import Pessoa from "./components/Pessoa.jsx";
import './App.css'

function App() {

    const nome = "joao"

  return (
    <>
        <Pessoa nome="Rodriga"
                idade="33"
                profissao="Programadora"
                foto="https://via.placeholder.com/150"
        />
    </>
  )
}

export default App
