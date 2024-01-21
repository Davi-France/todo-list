import { useState } from 'react'

import './global.css'
import Header from './components/Header'
import styled from './App.module.css'
import ListTasks from './components/ListTasks'

function App() {


  return (
    <>
      <Header />

      <div className={styled.appContent}>

        <ListTasks />
      </div>
    </>
  )
}

export default App
