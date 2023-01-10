import React,{useState} from "react";
import styles from './Modal.module.scss'

const Modal = ({open, onClose}) => {
    if(!open) return null
   
    return (
        <div className={styles.overlay}>
        <div className={styles.modalContainer}>
            <p onClick={onClose} className={styles.closeBtn}>X</p>
        </div>
        </div>
    )
}
export default Modal