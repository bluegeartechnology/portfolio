import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'

const Portfolio = () => {

    useEffect(() => {

        Array.from(document.getElementsByClassName('portfolioProjectCard')).map((card, i) => {
            card.style.visibility = "hidden";

            setTimeout(() => {
                card.classList.add('animate__animated', 'animate__fadeInRight')
                card.style.visibility = "visible";
            }
                , 250 + (250 * i))

            setTimeout(() => {
                card.classList.remove('animate__animated', 'animate__fadeInRight')
                card.classList.add('hvr-bob')
            }
                , 1200 + (250 * i))

        })



    }, [])

    let history = useHistory();

    return (
        <div id="portfolio" className='text-light animate__animated animate__fadeIn overflow-hidden'>

            <div id="portfolioContainer" className='py-5 my-4 mb-4'>

                <h2 className='my-5 text-center container'>Portfolio</h2>

                <div className="d-flex row justify-content-around my-5 mx-auto">


                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/tomatokei')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
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


                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/JYST')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\JYST.png" alt="" className='rounded' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
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


                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/PortfolioSite')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\portfoliosite.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
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
                    </div>




                    <div className="portfolioProjectCard btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
                        <h3>ACCESS</h3>
                    </div>




                    <div className="portfolioProjectCard btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
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
    )
}

export default Portfolio
