import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../ImageGalleryItem/ImageGalleryItem.module.css"

  
export class ImageGalleryItem extends Component {


    render() {
     const { picItems, clickHandler } = this.props
    return (
        <>
            {picItems.map(({ id, webformatURL }) => (
    
                <li key={id} className={styles.galleryitem} onClick={clickHandler} >
                    <img src={webformatURL} className={styles.image} id={id} />
                </li>
            ))}
        </>
    )
  }
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    picItems: PropTypes.array.isRequired,
    clickHandler: PropTypes.func.isRequired,
};