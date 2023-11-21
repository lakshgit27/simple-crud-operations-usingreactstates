
import { useState } from 'react'
import './App.css'

function App() {
  const[name,setName]= useState("")
  const[email,setEmail]= useState("")
  const[password,setPassword]= useState("")

  const [namedata,setNameData]= useState([])
  const [emaildata,setEmailData]= useState([])
  const [passworddata,setPasswordData]= useState([])

  const AddName =()=>{
     if(name.length!==0){ 
       setNameData((Names)=>([...Names,name]))
       setName("");
     }
  }
  const AddEmail =()=>{
  if(email.length!==0){
      setEmailData((EMAIL)=>([...EMAIL,email]))
      setEmail("");
    }
 }
 const SetPassword =()=>{
  if(password.length!==0){
    setPasswordData((PASSCODE)=>([...PASSCODE,password]))
    setPassword("");
  }
}
const deletedata = (index)=>{
  namedata.splice(index,1)
  emaildatadata.splice(index,1)
passworddata.splice(index,1)
setNameData([...namedata])
setEmailData([...emaildata])
setPasswordData([...passworddata])

}


  return (
    <>
    <div>
      <input type='text' name='username'  value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name'></input>
      <button onClick={AddName}>Add Name</button>
      
    </div>
    <div>
    <input type='email' name='email'  value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email'></input>
    <button onClick={AddEmail}>Add Email</button>

    </div>
    <div>
    <input type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Secret Code'></input>
    <button onClick={SetPassword}>Set Password</button>
      
    </div>

<table width="70%" border="1px solid black">
  <h3>Input Table</h3>
  <tr>
  <td>USERNAME</td>
  <td>EMAIL</td>
  <td>PASSWORD</td>
  <td>Button1</td>
  <td>Button2</td>

</tr>
{
  (namedata,emaildata,passworddata).map((val1,val2,val3) =>
  <tr>
    <td>{val1}</td>
    <td>{val2}</td>
    <td>{val3}</td>
    <td><button>Edit</button></td>
    <td><button onClick={()=>deletedata(i)}>Delete</button></td>
   
</tr>
  )
}





</table>
    {/* {
     namedata.map((val1,i)=>{
      <div>
        <h1>{val1}</h1>
        <button>Edit</button>
        <button onClick={()=>deletedata(i)}>Delete</button>
        
      </div>
     })
    }
    {
      emaildata.map((val2,i)=>{
        <div>
             <h1>{val2}</h1>
             <button>Edit</button>
             <button onClick={()=>deletedata(i)}>Delete</button>
        </div>
      })
    }
    {
      passworddata.map((val3,i)=>{
        <div>
             <h1>{val3}</h1>
             <button>Edit</button>
             <button onClick={()=>deletedata(i)}>Delete</button>
        </div>
      })
    }
    */}
      
    
     
    </>
  )
}

export default App
