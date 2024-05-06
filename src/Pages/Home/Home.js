import React,{useContext, useEffect, useState} from 'react'
import {v4 as uuid} from "uuid";
import { GlobalContext } from '../../context/GlobalState';
import './Home.css';
const Home = () => {
    const {setUsers}=useContext(GlobalContext);
    const [userInfo,setUserInfo]=useState(
        {
            id:"",
            name:"",
            email:"",
            contact:"",
            age:"",
            jobRole:"",
        }
    );
    useEffect(()=>
    {
      setUserInfo((currInfo)=>
      {
        return{
          ...currInfo,
          id:uuid(),
        }
      })
    },[]);
    const handlechange=(event)=>
    {
        const{name,value}=event.target;
        setUserInfo((currInfo)=>
        {
          return {...currInfo,[name]:value,};
        })
    }
    const adduser = ()=>
    {
      setUsers((currUsers)=>[...currUsers,userInfo])
      console.log(userInfo);
setUserInfo({
id:uuid(),
name:"",
email:"",
contact:"",
age:"",
jobRole:"",
})
    }
  return (
    <div className='home'>
       
  <div className='home__container'>
    <div className='home__formContainer'>
      <h1 className='home__title'>Add User Information</h1>
      <input title="id" placeholder="Enter user's id" disabled
       value={userInfo.id} onChange={handlechange}/><br/>
      <input type="text" name="name" placeholder='Enter users Name' 
      value={userInfo.name} onChange={handlechange} /><br></br>
      <input type="email" name="email" placeholder='Enter users email'
      value={userInfo.email} onChange={handlechange} /><br></br>
      <input type="number" name="contact" placeholder='Enter users contact no'
       value={userInfo.contact} onChange={handlechange}/><br></br>
      <input type="number" name="age" placeholder='Enter age' 
      value={userInfo.age} onChange={handlechange}/><br></br>
      <input  name="jobRole" placeholder='Enter users jobrole' 
      value={userInfo.jobRole} onChange={handlechange} /><br></br>
      
        <button onClick={adduser}>Add user </button>
    </div>
  </div>
 </div>
  )
}
export default Home