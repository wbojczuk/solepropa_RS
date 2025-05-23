import Shader from "../Shader/Shader"
import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <Shader background="var(--primary-gradient)" opacity={.9} />
    </header>
  )
}
