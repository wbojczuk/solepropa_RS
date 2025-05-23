import styles from './formandmap.module.css';
import FreeEstimateForm from '../../homepage/Header/FreeEstimateForm/FreeEstimateForm';

export default function FormAndMap(){
return (
 <div className={styles.formAndMap}>
    <div className={styles.formWrapper}>
        <FreeEstimateForm />
    </div>

    <div className={styles.mapWrapper}>
        <div className={styles.menuCover} >
        
        <iframe src="https://www.google.com/maps/d/embed?mid=1fIYuJKJ3c-xnaLI5_4T7Z0707FMb63w&ehbc=2E312F" width="600" height="450" style={{border: 0}}  loading="lazy" ></iframe>
        </div>
    </div>
 </div>
)};