import { UniversityNames } from '../../data/UniversityNames'
import styles from '../../styles/SearchDark.module.css'

import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const editSearchQuery = (searchTerm) => setSearchQuery(searchTerm)


  const dynamicSearch = () => searchQuery == '' ? [] : UniversityNames.filter(uniName => uniName.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder={searchQuery == '' ? 'Type to search...' : searchQuery}
        value={searchQuery}
        onChange={e => editSearchQuery(e.target.value)}/>
      <div className={styles.dropDown}>
        {dynamicSearch().map(uniName => (<Link href={`/university/${uniName.toLowerCase().replace(/\s/g, '-')}`}>{uniName}</Link>))}
      </div>
    </div>
  )
}

export default Search