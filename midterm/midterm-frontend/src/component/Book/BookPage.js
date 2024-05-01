import React from 'react'
import DisplayBook from './DisplayBook'
import Navigation from '../Navigate/Navigation'
import AddBook from './AddBook'

export default function BookPage() {
  return (
    <div>
      <Navigation/>
      <AddBook/>
        <DisplayBook/>


    </div>
  )
}
