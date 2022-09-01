import React from 'react'
import Header from './Header'
import {Outlet} from 'react-router-dom'
import Footer from './Footer'
export default function Main(props) {
  return (
    <div>
      <Header count={props.count} setSearch={props.setSearch}></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}
