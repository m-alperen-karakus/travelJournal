import React from 'react'
import './App.css'
import { Navbar } from './components/navbar/navbar'
import { Card } from './components/card/card'
import data from '../data'
export default function App(){

  const cards = data.map(item =>{
    return(
      <Card key = {item.id} {...item} />
    )
  })



  return(
    <>
    <Navbar />
    <div>{cards}</div>
    </>
  )
}