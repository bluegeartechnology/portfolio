import React from 'react'

const Contact = () => {
    return (
        <div id="contact" className='bg-light animate__animated animate__fadeIn'>

            <div id="contactContainer" className='container py-5 mb-5'>
                <h2>Contact</h2>

                <h3 className='text-center py-5'>Let's work together.</h3>


                <div className="d-flex row justify-content-center my-5">

                    <div target='blank' className='contactLink text-center text-primary mx-2'>
                        <a href='mailto:joshc@bluegeartechnology.com' className="mx-auto btn text-primary">
                            <i className="fa fa-envelope fa-5x"></i>
                        </a>
                        <h3 id='email' >joshc@bluegeartechnology.com</h3>
                    </div>

                    <a href='/resume' target='blank' className='contactLink text-success text-center btn mx-2'>
                        <i className="fa fa-file fa-5x mx-auto"></i>
                        <h3 id='github' className='text-center' >Résumé</h3>
                    </a>

                </div>


                <hr />

                <div className="d-flex row justify-content-around my-5">



                    <a href='https://github.com/bluegeartechnology' target='blank' className='contactLink text-center text-dark btn col-12 col-sm-6 col-md-4 col-lg-3'>
                        <i className="fa fa-github fa-5x mx-auto"></i>
                        <h3 id='github' className='text-center' >GitHub</h3>
                    </a>

                    <a href='https://linkedin.com/' target='blank' className='contactLink text-center text-primary btn col-12 col-sm-6 col-md-4 col-lg-3'>
                        <i className="fa fa-linkedin-square fa-5x mx-auto"></i>
                        <h3 id='youtube' >LinkedIn</h3>
                    </a>

                    <a href='https://youtube.com/' target='blank' className='contactLink text-center text-danger btn col-12 col-sm-6 col-md-4 col-lg-3'>
                        <i className="fa fa-youtube-play fa-5x mx-auto"></i>
                        <h3 id='youtube' >YouTube</h3>
                    </a>

                </div>

                <hr />



            </div>

        </div>
    )
}

export default Contact
