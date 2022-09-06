import axios from "axios"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import './home.css'


export const Home = ({data})=>{
    
  
    return(
        <div className="home-main-div">
            {Object.entries(data).map(([key,subject],i)=>(
                <div className="every-dog-div"><Link className="link" to={`/dog${key}`}><h3 className="dog-name">{key.toUpperCase()}</h3></Link></div>
            ))}
        </div>
    )
}