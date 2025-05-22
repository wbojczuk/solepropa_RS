import styles from "./pagetitle.module.css"

export default function PageTitle(props: {pageTitle: string}) {
  return (
    <header className={styles.pageTitle}>
        <h1>{props.pageTitle}</h1>

        <img src="/img/pagetitle-bg.webp" className="bg-img" aria-hidden />
        <div style={{background: "linear-gradient(90deg, rgba(85,24,22,0.7) 0%, rgba(187,53,48,1) 100%)"}} className="shader"></div>
    </header>
  )
}
