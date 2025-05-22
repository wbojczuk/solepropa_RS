import styles from "./servicearea.module.css"
import Area from "./Area"
import Link from "next/link"

export default function ServiceArea({areaData, mapURL}: {areaData: string[], mapURL: string}) {

    const areaElems = areaData.map((area, i)=>{
        if(i == 0){
           return(
            <>
            <div className={styles.divider}></div>
            <Area area={area} key={i} />
            
            </>
          )
        }else if((i + 1) % 2 == 0){
          return(
            <>
            <Area area={area} key={i} />
            <div className={styles.divider}></div>
            </>
          )
        }else{
           return( 
            <Area area={area} key={i} />
          )
        }
    })

  return (
    <section className={styles.serviceArea}>
        <div className={styles.areas}>
            <h2><span>Service Areas</span></h2>
            {areaElems}
            <div className={styles.areaShader}></div>
            <div className={styles.buttonWrapper}>
              <Link href={"/contact"} className="main-link">Get Quote</Link>
            </div>
        </div>
        <div className={styles.serviceAreaMap} >
        <div className={styles.menuCover} ></div>
          <iframe src={mapURL}></iframe>
        </div>
        
        <img src='/img/servicearea.png' alt='Image of house' className='bg-img' />
        <div style={{backgroundColor: "rgba(0,0,0,0.7)"}} className='shader'></div>
        <div className={`shader ${styles.shader2}`}></div>
    </section>
  )
}
