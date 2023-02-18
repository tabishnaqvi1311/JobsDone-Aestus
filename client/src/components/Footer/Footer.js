import React from 'react'
import Links from '../Links/Links'

const Footer = () => {
  return (
    <div style={{backgroundColor:'#101030', 
      color: 'white',
      display: 'flex',
      // flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      fontSize: '1.1rem'
    }}>
      Founder - Tabish Naqvi<br/>
      Copyright&copy; 2023 All Rights Reserved. 
        <Links />
    </div>
  )
}

export default Footer
