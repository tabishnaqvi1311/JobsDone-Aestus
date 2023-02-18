import React from 'react'

const Landing = () => {
  return (
    <>
    <section className='Landing' style={{
        backgroundColor: '#3e3f94',
        height: '100vh',
        color: 'white'
    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '7rem 7rem'
        }}>
            <div style={{
                fontSize: '4.2rem',
                fontWeight: 'bold',
                lineHeight: '75px',
                textTransform: 'uppercase',
            }}>
                <p>
                    Stay in control,<br /> get more done.
                </p>
                <button style={{
                    backgroundColor: 'white',
                    color: '#3e3f94',
                    padding: '17px',
                    border: 'none',
                    borderRadius: '15px',
                    fontSize: '1.2rem',
                    marginTop: '50px',
                    fontWeight: 'bold',
                }}>
                    Get Started
                </button>
            </div>
            <div style={{
                backgroundColor: '#3c3d78',
                padding: '60px 50px',
                fontSize: '1.15rem',
                animation: "morph 3s linear infinite",
                borderRadius: "70% 60% 10% 30% / 40% 60% 10% 80%",
            }}>
                <p>
                    Take the first step to a more balanced,<br /> and organized life with our easy-to-use <br />task management tools.
                </p>
            </div>
        </div>
    </section>
    <section style={{

    }}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems:'center',
            justifyContent: 'space-between',
            // padding: '7rem 10rem 0 10rem '
            margin: "9rem"
        }}>
            <div style={{
                backgroundColor: 'whitesmoke',
                padding: '12rem 7rem',
                borderRadius: '20px',
                boxShadow: '0px 0px 20px -10px #000'
            }}>LEFTIMG</div>
            <div style={{
                margin: '0 0 0 14rem'
            }}>
                <h1 style={{
                    fontSize: '2rem'
                }}>
                    Time is Precious. <br />Save both with our easy to use tools!
                </h1>
                <p style={{
                    color: 'gray'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, repudiandae? Quis aliquam minus ad architecto, officiis molestiae vitae id possimus quibusdam hic error laboriosam nobis! Maiores minus placeat eum inventore.
                </p>
            </div>
        </div>
        <div style={{
            display: 'flex',
            flexDirection: 'row-reverse',
            alignItems:'center',
            justifyContent: 'space-between',
            // padding: '7rem 10rem 0 10rem '
            margin: "9rem"
        }}>
            <div style={{
                backgroundColor: 'whitesmoke',
                padding: '12rem 7rem',
                borderRadius: '20px',
                boxShadow: '0px 0px 20px -10px #000'
            }}>LEFTIMG</div>
            <div style={{
                margin: '0 0 0 14rem'
            }}>
                <h1 style={{
                    fontSize: '2rem'
                }}>
                    Time is Precious. <br />Save both with our easy to use tools!
                </h1>
                <p style={{
                    color: 'gray'
                }}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, repudiandae? Quis aliquam minus ad architecto, officiis molestiae vitae id possimus quibusdam hic error laboriosam nobis! Maiores minus placeat eum inventore.
                </p>
            </div>
        </div>  
    </section>
    </>
  )
}

export default Landing
