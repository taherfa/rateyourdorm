import { Fragment } from 'react'

import Nav from '../../components/nav/index'
import styles from '../../styles/University.module.css'

const University = () => {
  return (
    <Fragment>
      <Nav />
      {/* hero section */}
      <section className={styles.hero}>
        {/* hero content */}
        <div className={styles.heroContent}>
          {/* card section */}
          <div>
            <h1>University Name</h1>
            <h2>City, Province</h2>
            <p>24 Reviews across 4 Dorms</p>
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
          <form>
            <input type="checkbox" id="air-conditioning" name="amenities" value="air-conditioning"></input>
            <label for="air-conditioning">Air Conditioning</label><br />
            <input type="checkbox" id="study-rooms" name="amenities" value="study-rooms"></input>
            <label for="study-rooms">Study Rooms</label><br />
            <input type="checkbox" id="dining-hall" name="amenities" value="dining-hall"></input>
            <label for="dining-hall">Dining Hall</label><br />
            <input type="checkbox" id="gym" name="amenities" value="gym"></input>
            <label for="gym">Gym</label><br />
          </form>
        </div>

        {/* Room types */}
        <div>
          <h3>Room Type</h3>
          <form>
            <input type="checkbox" id="single" name="room" value="single"></input>
            <label for="single">Single</label><br />
            <input type="checkbox" id="double" name="room" value="double"></input>
            <label for="double">Double</label><br />
            <input type="checkbox" id="triple" name="room" value="triple"></input>
            <label for="triple">Triple</label><br />
            <input type="checkbox" id="quad" name="room" value="quad"></input>
            <label for="quad">Quad</label><br />
            <input type="checkbox" id="other" name="room" value="other"></input>
            <label for="other">Other</label><br />
          </form>
        </div>
      </section>

      {/* Main content */}
      <section>
        {/* Header */}
        <div>
          <h3>Dorms</h3>
          <select name="sort" id="sort">
            <option value="Name">Name</option>
            <option value="most-rated">Most Rated</option>
            <option value="highest-rated">Highest Rated</option>
          </select>
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

export default University