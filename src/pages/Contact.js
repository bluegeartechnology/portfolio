import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='my-4 bg-light animate__animated animate__fadeIn h-100 row align-items-center'>

            <div id="contactContainer" className='container col-12 col-xs-12 col-md-10 col-lg-10 col-xl-8 px-5 py-4 '>

                <div className='my-4 bg-white px-4 py-4 rounded border shadow'>
                    <h2>Contact</h2>

                    <h3 className='text-center py-5'>Let's work together.</h3>


                    <div className="d-flex row justify-content-around my-5">


                        <a href='mailto:joshc@bluegeartechnology.com' target='blank' className='contactLink text-primary hvr-grow text-center btn mx-2 pt-4'>
                            <i className="fa fa-envelope fa-5x mx-auto my-1"></i>
                            <h3 id='email' >Email</h3>
                        </a>

                        <a href='/resume' target='blank' className='contactLink text-success hvr-grow text-center btn mx-2 pt-4'>
                            <i className="fa fa-file fa-5x mx-auto my-1"></i>
                            <h3 id='github' className='text-center' >Résumé</h3>
                        </a>



                    </div>


                    <hr />

                    <div className="d-flex row justify-content-around my-5">



                        <a href='https://github.com/bluegeartechnology' target='blank' className='contactLink text-center text-dark hvr-grow  btn col-12 col-sm-6 col-md-4 col-lg-3'>
                            <i className="fa fa-github fa-5x mx-auto my-1"></i>
                            <h3 id='github' className='text-center' >GitHub</h3>
                        </a>

                        <a href='https://linkedin.com/' target='blank' className='contactLink text-center text-primary hvr-grow  btn col-12 col-sm-6 col-md-4 col-lg-3'>
                            <i className="fa fa-linkedin-square fa-5x mx-auto my-1"></i>
                            <h3 id='youtube' >LinkedIn</h3>
                        </a>

                        <a href='https://www.youtube.com/channel/UCqkGitdTRT7cnT8N6rX8ucA' target='blank' className='contactLink text-center text-danger hvr-grow  btn col-12 col-sm-6 col-md-4 col-lg-3'>
                            <i className="fa fa-youtube-play fa-5x mx-auto my-1"></i>
                            <h3 id='youtube' >YouTube</h3>
                        </a>

                    </div>


                </div>

            </div>

        </div>
    )
}

export default Contact
