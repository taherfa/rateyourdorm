import { Fragment } from 'react'
import Nav from '../../components/nav/index'
import styles from '../../styles/Rate.module.css'

const rate = () => {
  return (
    <Fragment>
      <Nav />

      <section className={styles.form}>
        <h1>Leave a Dorm Review</h1>

        <form>
          <div>
            <label for="schools" style={{ display: 'block' }}>
              Select your school
            </label>
            <div className={styles.select}>
              <select name="schools" id="schools">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="university of british columbia">
                  University of British Columbia
                </option>
                <option value="simon fraser university">
                  Simon Fraser University
                </option>
                <option value="british columbia institute of technology">
                  British Columbia Institute of Technology
                </option>
              </select>
            </div>
          </div>

          <div>
            <label for="dorms" style={{ display: 'block' }}>
              Select your dorm
            </label>
            <div className={styles.select}>
              <select name="dorms" id="dorms">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="orchard commons">Orchard Commons</option>
                <option value="totem park">Totem Park</option>
                <option value="exchange">Exchange</option>
              </select>
            </div>
            <p className={styles.fineText}>Don't see your dorm? Add it here!</p>
          </div>

          {/* <div>
            <label style={{ display: 'block' }}>Room</label>
            <input type="range" id="volume" name="volume"
              min="0" max="5"></input>
          </div>
          <div>
            <label style={{ display: 'block' }}>Building</label>
            <input type="range" id="volume" name="volume"
              min="0" max="5"></input>
          </div>
          <div>
            <label style={{ display: 'block' }}>Location</label>
            <input type="range" id="volume" name="volume"
              min="0" max="5"></input>
          </div> */}

          {/* UNTIL WE FIGURE OUT SLIDERS */}

          <div>
            <label for="room" style={{ display: 'block' }}>
              Rate your room
            </label>
            <div className={styles.select}>
              <select style={{maxWidth: '200px'}} name="room" id="room">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div>
            <label for="building" style={{ display: 'block' }}>
              Rate your building
            </label>
            <div style={{maxWidth: '200px'}} className={styles.select}>
              <select name="building" id="building">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div>
            <label for="location" style={{ display: 'block' }}>
              Rate your location
            </label>
            <div className={styles.select}>
              <select style={{maxWidth: '200px'}} name="location" id="location">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
            </div>
          </div>

          <div>
            <label for="years" style={{ display: 'block' }}>
              Most recent year living here?
            </label>
            <div className={styles.select}>
              <select name="years" id="years">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
              </select>
            </div>
          </div>

          <div>
            <label for="rooms" style={{ display: 'block' }}>
              What was your room type?
            </label>
            <div className={styles.select}>
              <select name="rooms" id="rooms">
                <option disabled selected value>
                  {' '}
                  -- select an option --{' '}
                </option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="triple">Triple</option>
                <option value="quad">Quad</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className={styles.checkboxSection}>
            <p className={styles.pLabel}>Amenities</p>
            <div className={styles.checkboxInput}>
              <input
                className={styles.input}
                type="checkbox"
                id="air-conditioning"
                name="amenities"
                value="air-conditioning"
              ></input>
              <label for="air-conditioning">Air Conditioning</label>
            </div>
            <div className={styles.checkboxInput}>
              <input
                type="checkbox"
                id="study-rooms"
                name="amenities"
                value="study-rooms"
              ></input>
              <label for="study-rooms">Study Rooms</label>
            </div>
            <div className={styles.checkboxInput}>
              <input
                type="checkbox"
                id="dining-hall"
                name="amenities"
                value="dining-hall"
              ></input>
              <label for="dining-hall">Dining Hall</label>
            </div>
            <div className={styles.checkboxInput}>
              <input
                type="checkbox"
                id="gym"
                name="amenities"
                value="gym"
              ></input>
              <label for="gym">Gym</label>
            </div>
          </div>

          <div>
            <label for="review" style={{ display: 'block' }}>
              Write a Review
            </label>
            <textarea
              className={styles.reviewBody}
              type="text"
              id="review"
              name="review"
              placeholder="Your experience..."
            ></textarea>
          </div>

          <div
            style={{ margin: '2rem 0 1rem 0' }}
            className={`${styles.checkboxSection} ${styles.anon}`}
          >
            <div className={styles.checkboxInput}>
              <input
                className={styles.input}
                type="checkbox"
                id="anon"
                name="anon"
                value="true"
              ></input>
              <label for="anon">Post anonymously</label>
            </div>
          </div>

          <button
            className={styles.submit}
            type="submit"
            form="form1"
            value="Submit"
          >
            Submit
          </button>
        </form>
      </section>
    </Fragment>
  )
}

export default rate
