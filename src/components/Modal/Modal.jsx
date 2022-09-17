import PropTypes from 'prop-types'
import React, { Component } from 'react'
import styles from "../Modal/Modal.module.css"

export class Modal extends Component {

    render() {
        const { bigPic, handleOverlay } = this.props
    return (
        <>
            <div className={styles.overlay} onClick={handleOverlay}>
                <div className={styles.modal}>
                    <img src={bigPic} />
                </div>
            </div>
        </>
    )
  }
}

export default Modal

Modal.propTypes = {
    bigPic: PropTypes.array.isRequired,
    handleOverlay: PropTypes.func.isRequired
}