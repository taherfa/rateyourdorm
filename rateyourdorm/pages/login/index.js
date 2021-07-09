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
          <h1>Log In</h1>
          <h4>Don't have an account? <Link href={`/signup`}><a className={styles.link}>Sign Up</a></Link></h4>
          <div style={{width: "100%"}}>
            <form className={styles.suForm}>
              <input type="text" id="email" name="email" placeholder="Email"></input>
              <input type="text" id="pword" name="pword" placeholder="Password"></input>
              <a type="button" className={styles.btnWork}>Log In</a>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Login
