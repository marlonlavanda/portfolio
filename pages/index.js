import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <>
      <div className="bg-mlr-navy h-screen">
        <h1 className="text-mlr-sky text-2xl">Page under construction</h1>

        <div className={styles.grid}>
          <a href="https://github.com/marlonlavanda" className={styles.card}>
            <h2>Github &rarr;</h2>
          </a>
          <a
            href="https://www.linkedin.com/in/marlon-lavanda/"
            className={styles.card}
          >
            <h2>Linkedin &rarr;</h2>
          </a>
        </div>
      </div>
    </>
  )
}
