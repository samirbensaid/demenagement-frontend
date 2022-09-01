import React,{useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Main from './features/counter/Main'
import Home from './features/counter/Home';
import AddArticle from './features/counter/AddArticle';
import Detail from './features/counter/Detail';
import SignUp from './features/counter/SignUp';
import Login from './features/counter/Login';
function App() {
  const [count,setCount]=useState(0)

  const [search,setSearch] = useState('')

  function Confirm(){
    setCount(count+1)
  }
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Main count={count} setSearch={setSearch}/>}>
        <Route path='/' element={<Home search={search}/>}></Route>
        <Route path='/add' element={<AddArticle/>}></Route>
        <Route path='/detail:id' element={<Detail Confirm={Confirm} setCount={setCount}/>}></Route>
        <Route path='/register' element={<SignUp/>}></Route>
        <Route path='/log' element={<Login/>}></Route>
      </Route>

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
