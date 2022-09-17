import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../Button/Button.module.css"

export class Button extends Component {


  render() {
    const { handleClick, picGallery } = this.props
    return (
      <div className={styles.btnbox}>
        {picGallery.length > 0 && (
          <button className={styles.button} onClick={handleClick}>Load more</button>
        )}

      </div>
    )
  }
}

export default Button

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  picGallery: PropTypes.array.isRequired
};