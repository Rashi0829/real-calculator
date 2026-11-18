import React, { useState } from 'react'

export default function calc() {
    const[num1,setNum1]=useState(0)
    const[num2,setNum2]=useState(0)
    const[result,setResult]=useState(0)
  return (
    <div>
     <button onClick={() =>setResult(Number(num1)+Number(num2))}>+</button> 
     <button onClick={() =>setResult(Number(num1)-Number(num2))}>-</button> 
     <button onClick={() =>setResult(Number(num1)*Number(num2))}>*</button> 
     <button onClick={() =>setResult(Number(num1)/Number(num2))}>/</button> 
     <button onClick={() =>setResult(Number(num1)Number(num2))}>/</button> 
     <button onClick={() =>setResult(Number(num1)Number(num2))}>/</button> 
    </div>
  )
}
