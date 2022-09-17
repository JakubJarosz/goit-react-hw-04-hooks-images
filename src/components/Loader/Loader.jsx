import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../Loader/Loader.module.css"

export class Loader extends Component {

    render() {
      const {children} = this.props
    return (
        <div className={styles.loader}>
            {children}
      </div>
    )
  }
}

export default Loader

Loader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.object
  ])
}