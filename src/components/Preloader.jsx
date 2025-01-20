import React,{useEffect,useState} from 'react'
import './Preloader.css'
import { preLoaderAnim } from '../animations'

function Preloader() {

    const [counter, setCounter] = useState(0);

    useEffect(()=>{
        preLoaderAnim();

        const count = setInterval(()=>{
            setCounter(
                (counter) => (
                    counter < 100 ? counter+1 : clearInterval(count),setCounter(100) 
                )
            )
        },1000)
    },[])

  return (
    <div className='preloader'>
        <div className='texts-container'>
            <p className='text-8xl leading-none font-bold text-center'>SANKET<br/>JADHAV</p>
            <br/>
            <p className='text-3xl leading-none font-bold text-center'>Front-End Developer</p>
        </div>
    </div>
  )
}

export default Preloader