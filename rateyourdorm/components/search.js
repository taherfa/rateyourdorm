import Styles from '../styles/Search.module.css'

const Search = () => {
  return (
    <div className="wrapper">
      <div className="search-input">
        <a href="" target="_blank" hidden></a>
        <input type="text" placeholder="Type to search.." />
        <div className="autocom-box">

        </div>
        <div className="icon"><i className="fas fa-search"></i></div>
      </div>
    </div>




  )
}

export default Search