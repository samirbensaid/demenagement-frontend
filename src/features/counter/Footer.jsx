import React from 'react'
import logo from '../../assest/logo demenagement.webp'
export default function Footer() {
  // const style={
  //   backgroundColor: rgb(139, 132, 123),

  // }
  return (
    <div style={{marginTop:'10%',padding:'2%',textAlign:'center',backgroundImage:'linear-gradient(90deg, #fdc094,#5e72eb)'}}>

      <img src={logo} style={{borderRadius:'50%',width:'10%',height:'5%',boxShadow:'15px 10px 24px 0px grey'}}></img>
      <p style={{marginTop:'2%'}}>Copyright 2022</p>
    </div>
  )
}
