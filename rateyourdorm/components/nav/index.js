import Link from 'next/link'

import Search from '../searchDark/index'

const Nav = () => {
  return (
    <div style={{ paddingBottom: '1rem', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto' }}>
      <Link href={`/`} ><a style={{fontWeight: 'bold', fontSize: '1.4rem', paddingRight: '2rem'}} >RateYourDorm</a></Link>
      <Search/>
    </div>
  )
}

export default Nav