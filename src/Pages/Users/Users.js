
import React,{useContext} from 'react'
import User from '../../navbar/User/User'
import {Link} from "react-router-dom"
import { GlobalContext } from '../../context/GlobalState';
const Users = () => {
  const {users,setUsers}=useContext(GlobalContext);
  const deleteUser=(id)=>
  {
    setUsers((currUsers)=>
    {
      return currUsers.filter((user)=>user.id!==id);
      
    });
  }
  return (
    <div>
         <h1 className='users__title'>Users</h1>
    {users.length === 0 ? (
    <div className='users__empty'>
        <h1>No users found. Please add some data.</h1>
        <h3><Link to="/">Add Users</Link> </h3>
    </div>
   ):(users.map((k1)=>(
    <User key={k1.id}
          id={k1.id}
          name={k1.name}
          jobRole={k1.jobRole}
          age={k1.age}
          contact={k1.contact}
          email={k1.email}
    deleteUser={()=>deleteUser(k1.id)}/>
   ))) }
    </div>
  )
}
export default Users