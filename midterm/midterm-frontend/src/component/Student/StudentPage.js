import React from 'react'
import DisplayStudent from './DisplayStudent'
import Navigation from '../Navigate/Navigation'
import AddStudent from './AddStudent'

export default function StudentPage() {
  return (
    <div>
        <Navigation/>
        <AddStudent/>
        <DisplayStudent/>
    </div>
  )
}
