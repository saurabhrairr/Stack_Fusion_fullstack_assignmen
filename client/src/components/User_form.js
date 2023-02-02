
 import React, { useState } from 'react'
 import DatePicker from 'react-datepicker';
 import { useNavigate } from 'react-router-dom'
 import "./User_form.css"
function Fetch() {
  const[name,setname]=useState("")
  const[dateofbirth,setdateofbirth]=useState(Date())
  const[email,setemail]=useState("")
  const[phonenumber,setphonenumber]=useState("")
  let navigate = useNavigate()


  const handleinput=()=>
  {
    let data={name,dateofbirth,email,phonenumber}
    // console.warn(data);
    if( phonenumber.length >=10)
    {
      fetch("https://fullstackserver1.onrender.com/user-form", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      }).then((resp)=>{
    
        resp.json().then((result)=>{
          console.log("result",result)
          alert("form submit successfully")
          navigate("/Submitform")
        })
      })
    }else
    {
       alert("please fill 10 digit number") 
    }
  }
  return (
    <div className='saa'>
    <div className='main-container'>
      <form>
        <div  className='container'>
      <div className='lable-div'>
        <label for="name">name:</label>
      </div>

     <div className='input-div'><input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} name='userId'/>
     </div>
     <div  className='lable-div'>
       <label for="dateofbirth">dateofbirth:</label>          
        </div>
        <div className='input-div'>
        <input type="date" value={dateofbirth} onChange={(e)=>{setdateofbirth(e.target.value)}} />
     </div>
     <div  className='lable-div'>
        <label for="email">email:</label>
           </div>

<div className='input-div'>   <input type="text" value={email} onChange={(e)=>{setemail(e.target.value)}}  name='body'/></div>  
<div  className='lable-div'>
           <label for="phonenumber">phonenumber:</label>s
        </div>
        <div className='input-div'>
     <input type="text" value={phonenumber} onChange={(e)=>{setphonenumber(e.target.value)}}  name='body'/></div>

     </div>
     </form>
     <div className='input-div'>
      <button  onClick={handleinput}>Submit form</button>
      </div>
      <div
              onClick={() => {
                navigate("/Submitform");
              }}
              className="signinpage-signup-button"
            >
            </div>
    </div>
    </div>
  )
}

export default Fetch