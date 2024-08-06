import React from 'react';
import styles from './Search.module.scss';

const Search = ({searchValue, setSearchValue}) => {
    return (
        <div className={styles.root}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={styles.searchIcon}>
                <path
                    d="M3.624,15a8.03,8.03,0,0,0,10.619.659l5.318,5.318a1,1,0,0,0,1.414-1.414l-5.318-5.318A8.04,8.04,0,0,0,3.624,3.624,8.042,8.042,0,0,0,3.624,15Zm1.414-9.96a6.043,6.043,0,1,1-1.77,4.274A6,6,0,0,1,5.038,5.038Z"/>
            </svg>
            <input value={searchValue} onChange={(event) => setSearchValue(event.target.value)}
                   className={styles.searchInput} type="text" placeholder='Поиск пиццы...'/>
            {searchValue && (
                <svg onClick={() => setSearchValue('')} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"
                     className={styles.cleanIcon}>
                    <path
                        d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5  c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9  c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"/>
                </svg>
            )}
        </div>
    )
}

export default Search;