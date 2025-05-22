"use client"

import Link from 'next/link';
import styles from './header.module.css';
import FreeEstimateForm from './FreeEstimateForm/FreeEstimateForm';

export default function Header(){
return (
 <div className={styles.header}>

    <div className={styles.textWrapper}>

        <h1>Professional <br /> <span className="highlight">Handyman</span><br /> Services</h1>

        {/* <div className={styles.serving}><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26.158 26.158 0 0 0 12 20.758a26.14 26.14 0 0 0 3.262-2.994C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053a25.34 25.34 0 0 1-1.214-.94a28.157 28.157 0 0 1-2.853-2.698C5.218 16.876 3 13.637 3 10a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28.145 28.145 0 0 1-3.796 3.44a16.794 16.794 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"/></svg> <span>Serving Florence, AL</span></div> */}

        <h3>Get Your Project Done Today!</h3>

        <div className={styles.buttonWrapper}>
            <Link href={"/contact"} className='main-link'>Contact Us</Link>
            <Link href={"#services"} className='main-link main-link-light'>Services</Link>
        </div>

    </div>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className="shader"></div>
    <img src="/img/header-bg.png" alt="image of pool" className="bg-img" />
 </div>
)};