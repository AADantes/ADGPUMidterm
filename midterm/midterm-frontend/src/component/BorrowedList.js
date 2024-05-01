import React from 'react'
import AddBorrower from './AddBorrower'
import DisplayBorrower from './DisplayBorrower'
import Navigation from './Navigate/Navigation'

export default function BorrowedList() {
  return (
    <div>
      <Navigation/>
      <AddBorrower/>
      <DisplayBorrower/>
    </div>
  )
}
