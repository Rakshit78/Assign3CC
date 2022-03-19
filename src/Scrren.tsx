import Button from '@mui/material/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type P={
    pass:any
}
type P1={
    author:string,
    created_at:string,
    story_url:string,
    title:string
  }
  
const Screen=(props:P)=>{
    console.log(props.pass[0].author)
    const navigate=useNavigate()
    const [obj,setobj]=useState([]);
    const jdata={
      author:props.pass[0].author,
      story_title:props.pass[0].story_title,
      story_url:props.pass[0].story_url,
      created_at:props.pass[0].created_at
    }
    return <>
    <Button variant="contained" onClick={()=>{
        navigate("/");
     }} style={{"margin":"10px",}}>Back</Button><br/>
    {JSON.stringify(jdata)}
    </>
}

export default Screen;

{/*
{props.pass.map((res:P1)=>{
        return <div className='hello' >
  <div key={res.title} >
  <p>title:{res.title}</p>
    <p>created_at:{res.created_at}</p>
    <p>author:{res.author}</p>
    <p>story_url:{res.story_url}</p>
  </div>
      </div>
      })}
*/}