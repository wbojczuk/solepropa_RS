import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceMap(){
return (
 <div className={styles.serviceArea}>
    
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/d/embed?mid=1fIYuJKJ3c-xnaLI5_4T7Z0707FMb63w&ehbc=2E312F" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};