import styles from './gallerycontent.module.css';
import galleryImgs from '@/app/(mainsite)/data/galleryimgs';

export default function GalleryContent(){
    const galleryElems = galleryImgs.map((imgSrc, i)=>{
        return <img src={imgSrc} aria-hidden key={i} className={styles.img} />
    })
return (
 <div className={styles.galleryContent}>
    {galleryElems}
    <div className="center">
        <a className='main-link' target='_blank' href="https://www.facebook.com/SoleProPa/photos">View More</a>
    </div>
        <img src='/img/gallery-bg.webp' alt='Image of tools and ladders' className='bg-img' style={{zIndex: "-1"}} />
 </div>
)};