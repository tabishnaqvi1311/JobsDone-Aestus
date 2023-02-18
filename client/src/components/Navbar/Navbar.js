import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.comp.css'

const Navbar = () => {
  return (
    <>
    <nav className={styles.main} style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      backgroundColor: '#3e3f94',
      color: 'white',
      // margin: '0 1rem'
    }}>
      <div className='left' style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left'
      }}>
        IMGLOGO
      </div>

      <div className={styles.right} style={{

      }}></div>
        <ul style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <li><Link to='/'>Home</Link></li>
          <li>Services</li>
          <li><Link to='/contact'>Contact</Link></li>
          <li>About</li>
          <li>LOGIN/SIGNUP</li>
        </ul>
    </nav>
    </>
  )
}

export default Navbar
