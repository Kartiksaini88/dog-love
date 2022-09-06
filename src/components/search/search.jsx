import axios from "axios"
import { useEffect, useState } from "react"
import './search.css'


export const Search = ()=>{
 const [search ,setsearch] = useState('')
 const [data , setdata] = useState([])
 const [loading , setloading] = useState(false)
 const [error , seterror] = useState(false)
  
 console.log(data)
  useEffect(()=>{
    
  },[])

  const searchdog = (breedname) =>{

    if(search != ''){
        setloading(true)
        axios.get(`https://dog.ceo/api/breed/${breedname}/images`)
        .then((res)=>{
            setdata(res.data.message)
            setloading(false)
            setsearch('')
        }).catch((err)=>{
            seterror(true)
            setloading(false)
            setdata([])
        })
    }
    
  }
    return(
        <div className="input-and-showdiv">
            <input value={search}  onChange={(e)=>{
                setsearch(e.target.value)
            }} placeholder='Search any dog name 🐶' type="text" name="" id="" />
            <button onClick={()=>{
                searchdog(search)
            }}>Search</button>
            <div className="grid">
            {Object.entries(data).map(([key,subject],i)=>(
            <div><img src={subject} alt="" /></div>
          ))}
            </div>
          {loading && <div><h2>Loading...🐶</h2></div>}
            {error && <div><h2>NO result found...🐶</h2></div>}

        </div>
    )
}