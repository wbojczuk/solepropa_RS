import Link from 'next/link';
import styles from './headerphotos.module.css';

export default function HeaderPhotos(){
return (
 <div className={styles.provenWrapper}>
    <div className={styles.proven}>
        <div className={styles.provenItem}>
            <img src="/img/gallery/1.png" alt="past work photo" />
        </div>
        <div className={styles.provenItem}>
            <img src="/img/gallery/2.png" alt="past work photo" />
        </div>
        <div className={styles.provenItem}>
            <img src="/img/gallery/3.png" alt="past work photo" />
        </div>
         <Link href={"#pastWork"} className={styles.provenItem}>
            <span>View<br />More</span>
        </Link>
 </div>
 </div>
)};