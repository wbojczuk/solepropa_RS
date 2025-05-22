"use client"
import { CSSProperties } from "react"
import styles from "./aboutus.module.css"
import Link from "next/link"
import Shader from "../../misc/Shader/Shader"
import HeaderPhotos from "../HeaderPhotos/HeaderPhotos"

export default function AboutUs() {
  //@ts-check
  const cssProps = {"--width": "90%"} as CSSProperties
  return (
    <>
    <HeaderPhotos />
    <section className={styles.aboutUs}>
      
        <div className={styles.textWrapper}>
          <h4>About Us</h4>
            <h1><span className="underline">About SoleProPA</span></h1>

            <p>At SoleProPA, we specialize in taking care of the small jobs that often get overlooked. From fixing broken windows and replacing door knobs to installing light fixtures and handling minor electrical work, we’re here to help with the everyday repairs that keep your home running smoothly. We pride ourselves on being reliable, friendly, and focused on the little things that make a big difference. When others say it's too small, we say it's just right.</p>

            <Link className="main-link" href="/contact">Get a Quote</Link>
        </div>


        <div className={styles.imgWrapper}>
          <div className={styles.imgContainer}>
            <img src="/img/aboutus-bg.png" alt="image of worker" className={styles.mainImg} />
            <Shader background="var(--primary-color)" opacity={.20} zIndex={15} />
            <div className={styles.imgStyle}></div>
          </div>
        </div>
    </section>
    </>
  )
}
