import dog from './65014-dog-walking.json'
import { Link } from 'react-router-dom'
import './nav.css'
import Lottie from 'react-lottie'
export const Navbar = ()=>{
    const dogoption = {
        loop : true,
        autoplay : true,
        animationData: dog,
        rendererSettings:{
            preserverAspectRatio:"xMidYMid slice"
        }
    }

    return(
        <div className="navbar">
            <div className="logo">Logo</div>
            <div className="links">
            <span><Link className='Link' to='/'>Home</Link></span>
            <span><Link className='Link' to='/dog:id'>Puppy</Link></span>
            <span><Link className='Link' to='/search'>Search</Link></span>
            </div>
        </div>
    )
}