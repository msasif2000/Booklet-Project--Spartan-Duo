import React from 'react'
import "./details.css"
export default function details({book}) {
  return (
    <div className='main'>
      <h1>{book.bookname}</h1>
    </div>
  )
}
