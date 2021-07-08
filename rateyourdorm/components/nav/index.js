import Link from 'next/link'

import Search from '../searchDark/index'

import styles from '../../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link href={`/`} ><a className={styles.logo} >RateYourDorm</a></Link>
      <Search/>
    </div>
  )
}

export default Nav