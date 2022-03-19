import React from 'react';
import './App.css';
import {useState,useEffect} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Screen from './Scrren';
import First from './First'


function App() {
  const [count,setcount]=useState(1);
  const [loading,setloading]=useState(true);
  const [list,setlist]=useState([]);
  const [p,setp]=useState([]);
  let arr:any=[]
  
  async function getdata()
  {
    const res=await fetch(`https://hn.algolia.com/api/v1/search_by_date?query=story&page=${count}`);
    const data=await res.json();
    arr=[data];
    setlist(arr[0].hits);
    console.log(arr[0].hits)
    setloading(false);
  }
  useEffect(()=>{
    getdata();
   
  },[count])
 

  //scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };
  //

  const handle=(event:any)=>{
    console.log(event.target.innerText);
    setcount(event.target.innerText);
    scrollToTop();
  }
  const handlejson=(auth:string)=>
  {
    const up=list.filter(({author})=>{
      return author===auth;
    })
    setp(up);
  }
  return (<BrowserRouter>
     <Routes>
       <Route path="/" element={<First handle={handle} handlejson={handlejson} list={list} loading={loading} count={count} setcount={setcount}/>}/>
       <Route path="/Scrren" element={<Screen pass={p}/>}/>
     </Routes>
      
    </BrowserRouter>
  );
}

export default App;
