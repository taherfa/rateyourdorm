import { Fragment } from 'react'

import Nav from '../../../components/nav/index'
import styles from '../../../styles/University.module.css'

const Dorm = () => {
  return (
    <Fragment>
      <Nav />
      {/* hero section */}
      <section className={styles.hero}>
        {/* hero content */}
        <div className={styles.heroContent}>
          {/* card section */}
          <div>
            <h1>Dorm Name</h1>
            <h2>Average Ratings</h2>
            <p>Room: Stars 5</p>
            <p>Location: Stars 5</p>
            <p>Building: Stars 5</p>
            <p>Community: Stars 5</p>
          </div>
          {/* Photo section */}
          <div>

          </div>
        </div>
      </section>

      {/* sidebar section */}
      <section>

        {/* Amenities */}
        <div>
          <h3>Amenities</h3>
          <p>Air Conditioning</p>
          <p>Study Room</p>
          <p>Dining Hall</p>
          <p>Gym</p>
        </div>

        {/* Room types */}
        <div>
          <h3>Room Types</h3>
          <p>Single</p>
          <p>Double</p>
          <p>Tiple</p>
          <p>Quad</p>
          <p>Other</p>
        </div>
      </section>

      {/* Main content */}
      <section>
        {/* Header */}
        <div>
          <h3>Dorms</h3>
        </div>

        <hr />

        {/* Listing */}
        <div>
          <div>
            <img></img>
            <div>
              <p>Dorm Name</p>
              <p>Address</p>
              <p>Rating</p>
              <p>Ratings</p>
            </div>
          </div>
          <div>
            <img></img>
            <div>
              <p>Dorm Name</p>
              <p>Address</p>
              <p>Rating</p>
              <p>Ratings</p>
            </div>
          </div>
        </div>
      </section>


    </Fragment>
  )
}

export default Dorm