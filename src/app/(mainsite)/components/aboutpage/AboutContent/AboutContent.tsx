import Link from 'next/link';
import styles from './aboutcontent.module.css';

export default function AboutContent(){
return (
 <div className={styles.community}>
    <div className={styles.textWrapper}>
        <h4>Who We Are</h4>
        <h2>About Us</h2>
        <p>At SoleProPA, we specialize in the small jobs that most others overlook. With over 20 years of experience, we’ve proudly served thousands of residential and commercial clients throughout Lancaster, York, and Harrisburg, PA. From changing locks and fixing drywall to minor plumbing, electrical work, and furniture assembly—we’re here to help with the everyday repairs that keep your space running smoothly. We believe that no job is too small, and we’re committed to providing reliable, honest service to the people who need it most. When you call SoleProPA, you’re getting more than a handyman—you’re getting a trusted partner in home and property care. </p>
        <Link className='main-link' href={"/contact"}>Get a Quote</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/about.webp" alt="image of an bathtub" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};