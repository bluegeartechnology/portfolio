import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Home = () => {

    let history = useHistory();

    return (
        <div className=' animate__animated animate__fadeIn'>

            <header className="App-header">




                <div id='headerOverlay' className="text-dark">
                    <video autoPlay muted loop id="headerVideo" src="./CircuitBoards7_Videvo.mov" type="video/mp4" />
                </div>




                {/*<img src={logo} className="App-logo" alt="logo" /> */}

                <div id='headerJumbotron' className="jumbotron container mx-auto align-content-middle text-center overflow-hidden row d-flex justify-content-around">
                    <div id="headshotContainer" className='col-lg-3 col-md-5 col-sm-6 col-6 animate__animated animate__fadeIn'>
                        <img id='headshot' className='rounded' src="./PictureSquared.jpg" alt="" />
                    </div>

                    <div className="container justify-content-center text-dark col-lg-8 col-md-12">
                        <h1 className='mr-5 mb-0  text-primary animate__animated animate__fadeInTopLeft'>######</h1>
                        <h1 className='ml-5 mb-2 text-primary animate__animated animate__fadeInBottomRight'>######</h1>


                        <h4 className='animate__animated animate__fadeIn mb-0'>Full Stack Web Developer</h4>
                    </div>




                </div>



            </header>



        </div>
    )
}

export default Home
