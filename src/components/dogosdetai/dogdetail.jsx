import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import './dog.css'

export const DogDetail = ()=>{

    const {id} = useParams()
    const [dog ,setdog] = useState([])
    const [loading , setloading] = useState(false)
    

    useEffect(()=>{
     getdata()
    },[])

    const getdata = ()=>{
        setloading(true)
        axios.get(`https://dog.ceo/api/breed/${id}/images`)
        .then((res)=>{
            setdog(res.data.message)
            setloading(false)
        }).catch((err)=>{
            console.error(err);
        })
    }
    return(
        <div>
            {loading && <div>Loading...</div>}
          <div className="grid-div">
          {Object.entries(dog).map(([key,subject],i)=>(
            <div><img src={subject} alt="" /></div>
          ))}
            </div>
        </div>
    )
}