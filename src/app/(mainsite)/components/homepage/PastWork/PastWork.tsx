"use client"
import styles from "./pastwork.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import galleryImgs from "@/app/(mainsite)/data/galleryimgs"
import 'swiper/css/effect-coverflow';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
import { useRef } from "react"

export default function PastWork() {

  const swiperRef: any = useRef()

  const slideElems = galleryImgs.map((imgSrc, i)=>{
    return(
      <SwiperSlide key={i} className="center swiper-no-swiping">
        <img src={imgSrc} alt="Portfolio Image" className={styles.img} />
      </SwiperSlide>
    )
  })


  return (
    <div id="pastWork" className={styles.pastWork}>
        <h2 ><span className="underline">Past Work</span></h2>

        <div className={styles.carouselWrapper}>
          <Swiper
          loopAdditionalSlides={1}
          ref={swiperRef}
          modules={[EffectCoverflow, Autoplay]}
          effect={'coverflow'}
          slidesPerView={3}
          autoplay={{delay: 4000}}
          breakpoints={{
            0: {
              slidesPerView: "auto"
            },
            649: {
              slidesPerView: 2,
            },
            990: {
              slidesPerView: 3,
            }
           }}
          centeredSlides
          loop
          initialSlide={1}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          >
            {slideElems}
          </Swiper>
        </div>
        <div className={`center ${styles.buttonWrapper}`}>
          <div onClick={()=>{swiperRef.current.swiper.slidePrev()}} className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m12 19l-7-7l7-7m7 7H5"></path></svg>
          </div>
          
          <div onClick={()=>{swiperRef.current.swiper.slideNext()}} className={styles.button}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
          </div>
        </div>
        
        <img src="/img/pastwork.webp" alt="image of a appliances" className="bg-img" />
        <div className="shader" style={{backgroundColor: "rgba(255,255,255,0.8)"}}></div>
    </div>
  )
}
