import React from 'react'
// import './styles/contact.module.css'

const Contact = () => {
  return (
    <div className='outContact' style={{height: '80vh', color: 'black'}}>

        <div className='flexContainerContact' 
        style={{display: 'flex',
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        margin: '2rem 10rem'}}>

            <div className='cardContact'>
                <div className='cardContentContact'>
                    <h4>Phone</h4>
                    <p>+91 9917267969</p>
                </div>
            </div>
            <div className='cardContact'>
                <div className='cardContentContact'>
                    <h4>Email</h4>
                    <p>tabish.naqvi2003@gmail.com</p>
                </div>
            </div>
            <div className='cardContact'>
                <div className='cardContentContact'>
                    <h4>Address</h4>
                    <p>Delhi, India</p>
                </div>
            </div>
        </div>
        <div className='contactForm'
        style={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: '#3e3f94',
            height: '33%',
            margin: '10rem',
            color: 'white',
            borderRadius: '30px'
            // height: '10vh'
        }}>lorem</div>
    </div>
    )
}

export default Contact
