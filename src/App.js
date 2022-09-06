import logo from './logo.svg';
import './App.css';
import { Home } from './components/home/home';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router';
import { DogDetail } from './components/dogosdetai/dogdetail';
import { Navbar } from './components/navbar/nav';
import { Search } from './components/search/search';

function App() {
   const [dogos ,setdogos] = useState([])
  //  console.log(dogos)
  const getDogData = ()=>{
    const option = {
        method : 'GET',
        url:"https://dog.ceo/api/breeds/list/all"
    }

    axios.request(option).then((res)=>{
       setdogos(res.data.message)
    }).catch((error)=>{
        console.log(error)
    })
}

useEffect(()=>{
getDogData()
},[])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home data={dogos}></Home>}></Route>
        <Route path='/dog:id' element ={<DogDetail></DogDetail>}></Route>
        <Route path='/search' element={<Search></Search>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
