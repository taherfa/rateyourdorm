import { Fragment } from 'react'

import Nav from '../../../components/nav/index'
import styles from '../../../styles/Dorm.module.css'

const Dorm = () => {
  return (
    <Fragment>
      <Nav />
      <section className={styles.hero}>
        <div className={styles.heroWidth}>
          <div className={styles.heroContent}>
            <div>
              <h1>Dorm Name</h1>
              <h2>Average Ratings</h2>
              <p>Room: Stars 5</p>
              <p>Location: Stars 5</p>
              <p>Building: Stars 5</p>
              <p>Community: Stars 5</p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* sidebar section */}
      <section className={styles.column}>
        <section className={styles.left}>
          {/* Amenities */}
          <h3>Included</h3>
          <div>
            <h4>Amenities</h4>
            <ul>
              <li>Air Conditioning</li>
              <li>Study Room</li>
              <li>Dining Hall</li>
              <li>Gym</li>
            </ul>
          </div>

          {/* Room types */}
          <div>
            <h4>Room Types</h4>
            <ul>
              <li>Single</li>
              <li>Double</li>
              <li>Triple</li>
              <li>Quad</li>
              <li>Other</li>
            </ul>
          </div>
        </section>

        {/* Main content */}
        <section className={styles.right}>
          {/* Header */}
          <div className={styles.reviewsHeader}>
            <h3>Reviews</h3>
          </div>

          <hr />

          {/* Listing */}
          <div>
            <div className={styles.review}>
              <h4>
                Single Room <span className={styles.suffix}>- 2020</span>
              </h4>
              <p className={styles.rating}>&#9733; 4.7</p>
              <p className={styles.reviewBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className={styles.date}>Sept 4 2021</p>
            </div>
            <div className={styles.review}>
              <h4>
                Single Room <span className={styles.suffix}>- 2020</span>
              </h4>
              <p className={styles.rating}>&#9733; 4.7</p>
              <p className={styles.reviewBody}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className={styles.date}>Sept 4 2021</p>
            </div>
          </div>
        </section>
      </section>
    </Fragment>
  )
}

export default Dorm
