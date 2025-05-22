"use client"
import Service from "./Service"
import serviceData from "./serviceData"
import DetailsPane from "../DetailsPane/DetailsPane";
import { useEffect, useRef, useState } from "react";
import "./services.css"
import gsap from "gsap";


export default function Services() {

  const [currentServiceName, setCurrentServiceName] = useState("");
  const [currentServiceDesc, setCurrentServiceDesc] = useState("");
  const [currentImg, setCurrentImg] = useState("");
  const [isDetailsPaneOpen, setIsDetailsPaneOpen] = useState(false);
  const [elemAmt, setElemAmt] = useState(9)

  const wrapperRef: any = useRef();

  const serviceElems = serviceData.map((data, i)=>{
   if(i < elemAmt){
    return (<Service
      key={i}
      {...data}
      setCurrentServiceName={setCurrentServiceName}
      setCurrentServiceDesc={setCurrentServiceDesc}
      setIsDetailsPaneOpen={setIsDetailsPaneOpen}
      />)
   }
});

  function animateElems(elems: Element[]){
    gsap.to(elems, {
      opacity: 1,
      x: 0,
      duration: 0.2,
      ease: "power4.inOut",
      stagger: 0.1
    })
  }
  

  // Add animations
  useEffect(()=>{

    const animObserver = new IntersectionObserver((elems)=>{
      const elemsToAnimate: Element[] = [];
      elems.forEach((elem)=>{
        if(elem.isIntersecting){
          elemsToAnimate.push(elem.target);
          animObserver.unobserve(elem.target)
        }
      })
      if(elemsToAnimate.length > 0){
        animateElems(elemsToAnimate)
      }
    }, {threshold: 0.15});

    ([...wrapperRef.current.children]).forEach((elem)=>{
      animObserver.observe(elem)
    })
  }, [serviceElems])



  return (
   <>
   <div id="serviceContainer">
    <h3 className="highlight">Services</h3>
    <h2>Handyman <br /> Construction Services</h2>
    <h4>We handle the small repairs and fixes that keep your home in top shape—quick, reliable, and done right.</h4>
    <div id="servicesWrapper" ref={wrapperRef}>
        {serviceElems}
    </div>
   {(elemAmt !== 999)&&  <div className="center">
      {/* <button onClick={()=>{setElemAmt(999)}} className="main-link main-link-services">Show More</button> */}
    </div>}
    <DetailsPane
    name={currentServiceName}
    desc={currentServiceDesc}
    setIsDetailsPaneOpen={setIsDetailsPaneOpen}
    isDetailsPaneOpen={isDetailsPaneOpen}
    />
   
   </div>
   </>
  )
}
