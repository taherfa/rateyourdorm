import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>rateyourdorm</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1>Rate Your Dorm</h1>
            <h2>Better university living</h2>
            <form>
              <input type="text" placeholder="Search">

              </input>
            </form>
          </div>
        </section>

      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}
