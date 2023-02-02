import React, { useEffect, useState } from 'react'
import "./Submitform.css"
function Submitform() {
  const[data,setdata]=useState([])

  useEffect(()=>
  {
   fetch("https://fullstackserver1.onrender.com/user-form").then((result)=>
   {
       return  result.json()
   }).then((data)=>
   {
        setdata(data)
        console.log(data);
   })


  },[])
  return (
    <div>
        <h1>All The Submitted Forms</h1>
      {data.map((user,i)=>{
        return(
          <>
         
          <div className='main-container1'>
             
              <div className='name-div'>
                     <p>name</p>
                     {user.name}
              </div>
              <div className='name-div'>
              <p>dateofbirth</p>
                     {user.dateofbirth}
              </div>
              <div className='name-div'>
              <p>email</p>
                     {user.email}
              </div>
              <div className='name-div'>
              <p>phonenumber</p>
                     {user.phonenumber}
              </div>
          </div>
          </>
      
        )

      })}
    </div>
  )
}

export default Submitform