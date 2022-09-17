import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../Searchbar/Searchbar.module.css"

export class Searchbar extends Component {

    render() {
        const {handleSubmit, handleChange ,inputValue} = this.props
    return (
        <header className={styles.searchbar}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <button type="submit" className={styles.button}>
                    <span className={styles.buttonlabel}>Search</span>
                </button>
                <input
                    className={styles.input}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
        
    )
  }
}

export default Searchbar

Searchbar.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    inputValue: PropTypes.string.isRequired
};