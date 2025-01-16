import React,{useEffect,useState} from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animations'

function Preloader() {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        preLoaderAnim();

        const count = setInterval
    },[])

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <span>100%</span>
        </div>
    </div>
  )
}

export default Preloader