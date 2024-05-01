import React from 'react'
import {Link, useParams} from "react-router-dom";

export default function Navigation() {
  return (
    <div className='navigation'>

        <ul>
            <li><Link to="/student"> Student </Link> </li>
            <li><Link to="/book"> Book</Link></li>
            <li><Link to="/"> Transactions</Link></li>
            <li></li>
        </ul>
    </div>
  )
}