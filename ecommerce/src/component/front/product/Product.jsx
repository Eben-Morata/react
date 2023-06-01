import React,{useState,useEffect} from 'react';
import "./product.css";
import {AiOutlineLeft, AiOutlineRight, AiOutlineRightSquare} from 'react-icons/ai';
import dataLink from '../../back/homeData'
import { Link } from 'react-router-dom';


const Product = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = dataLink.length;

  const autoScroll = true;
  let  intervalTime;
  let setTimeInterval = 5000;
  

  const nextSlide=()=>{
    setCurrentSlide (currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  }
  const prevSlide=()=>{
    setCurrentSlide (currentSlide === 0 ?  slideLength - 1: currentSlide - 1);
  }
  useEffect(() => {
    setCurrentSlide(0)
  }, [])

  function auto() {
      intervalTime = setInterval(nextSlide,setTimeInterval);
  }
  useEffect(() => {
    if (autoScroll) {
      auto()
    }
    return ()=> clearInterval(intervalTime)
  }, [currentSlide])
  
  return (
    <div className='slider'>
        <AiOutlineLeft className='arrow prev' onClick={prevSlide}/>
        <AiOutlineRight className='arrow next'onClick={nextSlide}/>
              
        {dataLink.map((slide ,index)=>{
              return(
                <div key={index} className={index === currentSlide ?
                 "current-slide" : "slides"}>
                        {index === currentSlide &&(
                          <div className='slide'>
                              <img src={slide.img} alt="" />
                              <div className="des">
                                <h2>{slide.header}</h2>
                                <p>{slide.desc}</p>
                                <div className="butts">
                                    <button><Link to="/">Shop Now <AiOutlineRightSquare className='span-arrow'/></Link></button>
                                </div>
                              </div>
                          </div>
                        )}
                </div>
              )
            })}
    </div>
  )
}

export default Product