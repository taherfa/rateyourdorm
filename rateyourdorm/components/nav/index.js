import Search from '../searchDark/index'

const Nav = () => {
  return (
    <div style={{marginLeft: '10.4rem', paddingTop: '0.5rem', paddingBottom: '1rem', display: 'flex', alignItems: 'center' }}>
      <p style={{fontWeight: 'bold', fontSize: '1.4rem', paddingRight: '2rem'}} >RateYourDorm</p>
      <Search/>
    </div>
  )
}

export default Nav