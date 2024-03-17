'use client'
import MyButton2 from '@/components/MyButton2';
import React from 'react'
import { useState } from 'react'

export default function counterCountTogether() {
  //destructuring assignment used to extract the elements from the array returned by the `useState` hook
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count + 1);
  }
  return (
    <>
    <h1>Counters that update together</h1>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    <MyButton2 count={count} onClick={handleClick}/>
    </>
    
  )
}
