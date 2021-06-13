import { Fragment } from 'react'

import Image from 'next/image'
import Link from 'next/link'

import Nav from '../../components/nav/index'
import styles from '../../styles/University.module.css'

const University = () => {
  return (
    <Fragment>
      <Nav />
      <section className={styles.hero}>
        <div className={styles.heroWidth}>
          <div className={styles.heroContent}>
            <h1>University Name</h1>
            <h2>City, Province</h2>
            <p>24 Reviews across 4 Dorms</p>
          </div>
        </div>
      </section>

      <section className={styles.column}>
        <section className={styles.left}>
          <h3>Filter By</h3>
          <div className={styles.filterSection}>
            <h4>Amenities</h4>
            <form>
              <div className={styles.checkboxInput}>
                <input className={styles.input} type="checkbox" id="air-conditioning" name="amenities" value="air-conditioning"></input>
                <label for="air-conditioning">Air Conditioning</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="study-rooms" name="amenities" value="study-rooms"></input>
                <label for="study-rooms">Study Rooms</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="dining-hall" name="amenities" value="dining-hall"></input>
                <label for="dining-hall">Dining Hall</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="gym" name="amenities" value="gym"></input>
                <label for="gym">Gym</label>
              </div>
            </form>
          </div>

          <div className={styles.filterSection}>
            <h4>Room Type</h4>
            <form>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="single" name="room" value="single"></input>
                <label for="single">Single</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="double" name="room" value="double"></input>
                <label for="double">Double</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="triple" name="room" value="triple"></input>
                <label for="triple">Triple</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="quad" name="room" value="quad"></input>
                <label for="quad">Quad</label>
              </div>
              <div className={styles.checkboxInput}>
                <input type="checkbox" id="other" name="room" value="other"></input>
                <label for="other">Other</label>
              </div>
            </form>
          </div>
        </section>

        {/* Main content */}
        <section className={styles.right}>
          {/* Header */}
          <div className={styles.dormsHeader}>
            <h3>Dorms</h3>
            <label className={styles.select} for="slct">
              <select id="slct" required="required">
              <option disabled selected value>Sory by</option>
                <option value="name">Name</option>
                <option value="most-rated">Most Rated</option>
                <option value="highest-rated">Highest Rated</option>
              </select>
            </label>
          </div>

          <hr />

          {/* Listing */}
          <div>
            <Link href={`/university/simon-fraser-university/dorm`}>
              <div className={styles.dorm}>
                <Image
                  src="/house.jpg"
                  alt="picture of dorm"
                  layout="responsive"
                  width={50}
                  height={50}
                />
                <div>
                  <p>Dorm Name - &#9733; 4.7</p>
                  <p style={{ marginTop: '0.25rem' }}>Address</p>
                  <p style={{ marginTop: '1rem' }}>13 Ratings</p>
                </div>
              </div>
            </Link>
            <div className={styles.dorm}>
              <Image
                src="/house.jpg"
                alt="picture of dorm"
                layout="responsive"
                width={50}
                height={50}
              />
              <div>
                <p>Dorm Name - &#9733; 4.7</p>
                <p>Address</p>
                <p style={{ marginTop: '1rem' }}>13 Ratings</p>
              </div>
            </div>
          </div>
        </section>
      </section>


    </Fragment>
  )
}

export default University