import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../ImageGallery/ImageGallery.module.css"

export class ImageGallery extends Component {

    render() {
      const {children} = this.props
    return (
        <ul className={styles.gallery}>
           {children}
        </ul>
    )
  }
}

export default ImageGallery

ImageGallery.propTypes = {
  children: PropTypes.object
};