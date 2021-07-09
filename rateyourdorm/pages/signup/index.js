import { Fragment } from 'react'
import Link from 'next/link'
import Nav from '../../components/nav/index'
import styles from '../../styles/Signup.module.css'

const Login = () => {
  return (
    <Fragment>
      <Nav />
      <div className={styles.outer}>
        <div className={styles.content}>
          <h1>Create Account</h1>
          <h4>Already have an account? <Link href={`/login`}><a className={styles.link}>Sign In</a></Link></h4>
          <div style={{width: "100%"}}>
            <form className={styles.suForm}>
              <input type="text" id="fname" name="fname" placeholder="First name"></input>
              <input type="text" id="lname" name="lname" placeholder="Last name"></input>
              <input type="text" id="email" name="email" placeholder="Email"></input>
              <input type="text" id="pword" name="pword" placeholder="Password"></input>
              <a type="button" className={styles.btnWork}>Sign Up</a>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
