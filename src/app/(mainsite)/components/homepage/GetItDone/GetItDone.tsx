"use client"

import Link from 'next/link';
import styles from './getitdone.module.css';

export default function GetItDone(){
return (
 <div className={styles.find}>

    <h2>Get it done with us today<span className="highlight">!</span></h2>

    <h3>Don’t let those small repairs pile up—SoleProPA is here to help you knock them out with ease. Whether it’s a loose doorknob, a leaky faucet, or a light fixture that needs installing, we’re just a call away. Let us take care of the little things so you can focus on what matters most.</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`/contact`}>Get a Quote</Link>
    </div>
 
    <img src='/img/getitdone.webp' alt='Image of man working' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};