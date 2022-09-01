import React,{useState,useEffect} from 'react'
import ArticleItem from './ArticleItem'
import '../../css/home.css'
export default function Home({search}) {
const [data,setData]=useState([])

async function displayArticles(){
  let res=await fetch("http://localhost:5000/api/display")
  let json=await res.json()
  setData(json.chaufeur)
}


const list= data.filter((item)=>{
  return(
    item.name.toLowerCase().includes(search) || item.carModel.toLowerCase().includes(search) || item.lastname.toLowerCase().includes(search)
  )
}).map((elem,i)=>{
  return (
    <li key={i}><ArticleItem item={elem} id='li'/></li>
  )
})

useEffect(()=>{displayArticles()},[])
  return (
    <div>
      <ul id='list'>
        {list}
      </ul>
    </div>
  )
}
