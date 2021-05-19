import Styles from '../styles/Search.module.css'
import { UniversityNames } from '../data/UniversityNames'

import React from 'react'
import { useState } from 'react'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const editSearchQuery = (searchTerm) => setSearchQuery(searchTerm)


  const dynamicSearch = () => UniversityNames.filter(uniName => uniName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
      <div className={Styles.searchInput}>
        <a href="" target="_blank" hidden></a>
        <input
          type="text"
          placeholder={searchQuery == '' ? 'Type to search...' : searchQuery}
          value={searchQuery}
          onChange={e => editSearchQuery(e.target.value)} />
        <div className={Styles.autocomBox}>
          {dynamicSearch().map(uniName => (<li style={{color: 'white'}}>{uniName}</li>))}
        </div>
        <div className={Styles.icon}><i className="fas fa-search"></i></div>
      </div>
    </div>
  )
}

export default Search