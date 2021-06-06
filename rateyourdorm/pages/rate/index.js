import { Fragment } from 'react'
import Nav from '../../components/nav/index'
import styles from '../../styles/University.module.css'

const rate = () => {
  return (
    <Fragment>
      <Nav />
      <h1>Leave a Dorm Review</h1>
      <form>
        <div>
          <label>Select your school</label>
          <select>
            <option disabled selected value> -- select an option -- </option>
            <option>University of British Columbia</option>
            <option>Simon Fraser University</option>
            <option>British Columbia Institute of Technology</option>
          </select>
        </div>

        <div>
          <label>Select your dorm</label>
          <select>
            <option disabled selected value> -- select an option -- </option>
            <option>Orchard Commons</option>
            <option>Totem Park</option>
            <option>Exchange</option>
          </select>
          <p>Don't see your dorm? Add it here!</p>
        </div>

        <div>
          <label>Room</label>
          <input type="range" id="volume" name="volume"
            min="0" max="5"></input>
        </div>
        <div>
          <label>Building</label>
          <input type="range" id="volume" name="volume"
            min="0" max="5"></input>
        </div>
        <div>
          <label>Location</label>
          <input type="range" id="volume" name="volume"
            min="0" max="5"></input>
        </div>

        <div>
          <label>Most recent year living here?</label>
          <select>
            <option disabled selected value> -- select an option -- </option>
            <option>2021</option>
            <option>2020</option>
            <option>2019</option>
          </select>
        </div>

        <div>
          <label>What was your room type?</label>
          <select>
            <option disabled selected value> -- select an option -- </option>
            <option>Single</option>
            <option>Double</option>
            <option>Triple</option>
            <option>Quad</option>
            <option>Other</option>
          </select>
        </div>

        <div>
          <h3>Amenities</h3>
            <input type="checkbox" id="air-conditioning" name="amenities" value="air-conditioning"></input>
            <label for="air-conditioning">Air Conditioning</label><br />
            <input type="checkbox" id="study-rooms" name="amenities" value="study-rooms"></input>
            <label for="study-rooms">Study Rooms</label><br />
            <input type="checkbox" id="dining-hall" name="amenities" value="dining-hall"></input>
            <label for="dining-hall">Dining Hall</label><br />
            <input type="checkbox" id="gym" name="amenities" value="gym"></input>
            <label for="gym">Gym</label><br />
        </div>

        <div>
          <label>Write a Review</label>
          <input></input>
        </div>

        <button type="submit" form="form1" value="Submit">Submit</button>
      </form>
    </Fragment>
  )
}

export default rate