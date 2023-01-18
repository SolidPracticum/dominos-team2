import React from 'react'
import styles from './Auth.module.scss'
import { Link } from 'react-router-dom'
function Auth() {
    return (
        <div>
  <Link to="/Auth">
        <h3 className={styles.auth}>Auth</h3>
        </Link>
        </div>
    )
}

export default Auth;