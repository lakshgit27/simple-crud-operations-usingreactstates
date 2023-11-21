  import 'bootstrap/dist/css/bootstrap.min.css'
  import './App.css'
  import { useState } from 'react'

  function App() {
    const[name,setName]=useState("")
    const[alldata,setAlldata]= useState([])

    const Adddata=()=>{
      if(name.length !==0 ){
        setAlldata((newdata)=>([...newdata,name]))
        setName("");
      }
      console.log("add");
    }



    const dataDelete = (index)=>{
      alldata.splice(index,1)
      // console.log(alldata)
      setAlldata([...alldata])

    }
    console.log(alldata);
    


    

    return (
      <>
      <h1>CRUD APP</h1>
      <div>
      <input type='text' value={name}  onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={Adddata}>Add Data</button>

      </div>
      {
        alldata.map((val,i)=>
            <div>
              <h1>{val}</h1>
              <button>Edit</button>
              <button className='delete' onClick={() => dataDelete(i)}>Delete</button>

            </div>
        )
      }
      
      
      </>
    )
  } 

  export default App
