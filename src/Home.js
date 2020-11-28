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


            <div id="about" className="bg-light ">
                <div id="aboutContainer" className='container py-5 mb-4'>
                    <h2 className=''>About Me</h2>

                    <h3>Why I Code</h3>
                    <p>
                        I've always been fascinated by systems.
                        The interplay of components which yields an end result.
                        I enjoy constructing such systems, and seeing how that system can be modified to yield a different, more desirable result.
                    </p>

                    <p>
                        Coding is equal parts puzzle solving and engineering.
                        Every puzzle solved yields a new machine which affects the universe.
                        There are few endeavors more intrinsically satisfying than that.
                    </p>

                    <h3>Why I'm a Developer</h3>
                    <p>
                        Information is the current frontier for humanity, in a literal sense.
                        All physical land has been explored, and now we're building new lands in an abstract space.
                        Programming is the means to explore and settle that frontier.
                        I want to explore that space, and build it out even further.
                    </p>

                    <h3>Current Goals and Future Plans</h3>
                    <p>
                        I'm currently delving into the business side of web development.
                        I see this as a necessary waypoint toward other, more idealistic goals.
                        No amount of idealism changes the world by itself.
                    </p>

                    <p>
                        Programming, especially web development, represents real opportunity to affect the world, and even the behaviors and future of mankind itself.
                        I think the potential this represents is often not fully appreciated.
                        I want to push the limits of this opportunity for the betterment of mankind.
                    </p>
                </div>

            </div>


            <div id="portfolio" className='text-light'>

                <div id="portfolioContainer" className='py-5 my-5 mb-4'>

                    <h2 className='my-5 text-center container'>Portfolio</h2>

                    <div className="d-flex row justify-content-around my-5 mx-auto">


                        <div className="btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob" onClick={() => {
                            history.push('/tomatokei')
                        }}>
                            <div>
                                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                    <img src="\tomatokei.png" alt="" className='rounded my-auto' />
                                </div>
                                <div className='mx-4'>
                                    <h3>Tomatokei</h3>
                                    <small>A Pomodoro Clock and Time Management Tool</small>
                                    <br />
                                    <br />
                                    <p>Designed to help manage ADHD symptoms and stay on task.</p>
                                    <p>Integrated with Google Calendar for optimal ease of use.</p>
                                </div>

                                <div className="row justify-content-center d-flex p-2">
                                    <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                    <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                    <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-dark mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                                </div>

                            </div>
                        </div>


                        <div className="btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob" onClick={() => {
                            history.push('/JYST')
                        }}>
                            <div>
                                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                    <img src="\JYST.png" alt="" className='rounded' />
                                </div>
                                <h3>JYST</h3>
                                <small>Junk Yard Scraper Tool</small>
                                <br />
                                <br />
                                <p>A web app that grabs inventory data from local junkyard websites and APIs, then sorts, displays, and emails that data to clients.</p>
                                <p>Uses web scraping and browser automation. (Cheerio and Puppeteer)</p>
                                <div className="row justify-content-center d-flex p-2">
                                    <a href="https://jystdev.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                    <Link to="./JYST" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                    <a href="https://github.com/bluegeartechnology/JYST" target='blank'><button className="btn btn-dark mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                                </div>
                            </div>
                        </div>

                        <a href="#portfolio" onClick={(e) => { }} className="btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob">
                            <div>
                                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                    <img src="\tomatokei.png" alt="" className='rounded my-auto' />
                                </div>

                                <div className="d-flex flex-column justify-content-between">
                                    <h3>Portfolio Site</h3>
                                    <small>Yes, the very portfolio site you're looking at right now!</small>
                                    <br />
                                    <br />

                                    <p>Serves as a playground for me to flex new skills I've learned.</p>
                                    <p>Come take a look under the hood at GitHub.</p>
                                    <div className="row justify-content-center d-flex p-2">
                                        <a href="/#" onClick={(e) => { e.preventDefault(); alert(`You're already here, wise guy.`) }}><button className="btn btn-primary mx-1"><i className="fa fa-globe"></i> Visit</button></a>
                                        <a href="./portfolio" ><button className="btn btn-success mx-1"><i className="fa fa-bar-chart"></i> Details</button></a>
                                        <a href="https://github.com/bluegeartechnology/portfolio" target='blank'><button className="btn btn-dark mx-1"><i className="fa fa-github"></i> GitHub</button></a>
                                    </div>
                                </div>

                            </div>
                        </a>




                        <div className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
                            <h3>ACCESS</h3>
                        </div>




                        <div className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
                            <div className="my-3 rounded projectImageDiv align-middle">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' />
                            </div>
                            <h3>Tomatokei</h3>
                            <small>A Pomodoro Clock and Time Management Tool</small>
                            <br />
                            <br />
                            <p>Designed to help manage ADHD symptoms and stay on task.</p>
                            <p>Integrated with Google Calendar for optimal ease of use.</p>
                        </div>




                    </div>

                    <Link to="/projects" className='text-decoration-none'><button className='btn btn-warning d-block mx-auto'><h3>See Even More Projects!</h3></button></Link>

                </div>



            </div>


            <div id="skills" className='bg-light '>

                <div id="skillsContainer" className='container py-5 mb-4'>
                    <h2>Skills</h2>



                    <div className='my-4'>

                        <h3 className='text-center my-5'>Web Development Skills</h3>

                        <div className="row justify-content-around">

                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="html5.png" alt="" />
                                <h3 className='text-center text-dark'>HTML 5</h3>
                            </div>

                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="css3.png" alt="" />
                                <h3 className='text-center text-dark'>CSS 3</h3>
                            </div>


                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="javascript.png" alt="" />
                                <h3 className='text-center text-dark'>JavaScript</h3>
                            </div>


                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="react.png" alt="" />
                                <h3 className='text-center text-dark'>ReactJS</h3>
                            </div>

                            <div className='col-lg-2 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                                <img className='skillIcon col-12' src="redux.png" alt="" />
                                <h3 className='text-center'>Redux</h3>
                            </div>

                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                                <img className='skillIcon col-12' src="mongodb.png" alt="" />
                                <h3 className='text-center text-dark'>mongoDB</h3>
                            </div>






                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="node.svg" alt="" />
                                <h3 className='text-center text-dark'>Node.js</h3>
                            </div>




                            <div className='my-2 col-lg-2 col-sm-5 col-6 hvr-bob'>
                                <svg width="" height="100" viewBox="0 0 16 16" className="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                                </svg>
                                <h3 className='text-center text-dark'>Bootstrap</h3>
                            </div>



                            <img className='my-2 skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="node.svg" alt="" />

                        </div>


                    </div>

                    <div className="my-4">
                        <h3 className='text-center my-5'>Digital Media Skills</h3>

                        <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="photoshop.png" alt="" />

                        <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="premiere.png" alt="" />

                    </div>









                </div>

            </div>


            <div id="contact" className='bg-light '>

                <div id="contactContainer" className='container py-5 mb-5'>
                    <h2>Contact</h2>

                    <h3 className='text-center py-5'>Let's work together.</h3>


                    <div className="d-flex row justify-content-center my-5 ">

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

        </div>
    )
}

export default Home
