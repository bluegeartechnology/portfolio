import React, { useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import ProjectCard from '../Components/ProjectCard'

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


                    <ProjectCard
                        projectName={`Tomatokei`}
                        header={`A Pomodoro Clock and Time Management Tool`}
                        desc1={`Designed to help manage ADHD symptoms and stay on task.`}
                        desc2={`Integrated with Google Calendar for optimal ease of use.`}
                        link={`https://tomatokei.herokuapp.com`}
                        projectPage={`tomatokei`}
                        github={``}
                    />

                    <ProjectCard
                        projectName={`JYST`}
                        header={`Junk Yard Scraper Tool`}
                        desc1={`A web app that grabs inventory data from local junkyard websites and APIs, then sorts, displays, and emails that data to clients.`}
                        desc2={`Uses web scraping and browser automation. (Cheerio and Puppeteer)`}
                        link={`https://jystdev.herokuapp.com`}
                        projectPage={`jyst`}
                        github={``}
                    />

                    <ProjectCard
                        projectName={`Portfolio Site`}
                        header={`Yes, the very portfolio site you're looking at right now!`}
                        desc1={`Serves as a playground for me to flex new skills I've learned.`}
                        desc2={`Come take a look under the hood at GitHub.`}
                        link={`#`}
                        projectPage={`#`}
                        github={`https://github.com/bluegeartechnology/portfolio`}
                    />




                    <ProjectCard
                        projectName={`OhSee`}
                        header={`An app to alleviate checking-type OCD symptoms.`}
                        desc1={`Helps the user to keep track of the things they compulsively check, and prove to themselves that all is well.`}
                        desc2={`"Oh, see? I did remember it after all."`}
                        link={`#`}
                        projectPage={`#`}
                        github={``}
                    />




                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/BarBelle')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\barbellemobile.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                            </div>
                            <div className='mx-4'>
                                <h3>BarBelle</h3>
                                <small>Barbell weight combination calculator</small>
                                <br />
                                <br />
                                <p>App to calculate the possible combinations of weights that could be added to a barbell to reach a given weight.</p>
                                <p>Also has an Android version!</p>
                            </div>

                            <div className="d-flex justify-content-center d-flex p-2">
                                <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                            </div>

                        </div>
                    </div>


                    <ProjectCard
                        projectName={`ReciPeace`}
                        header={`Recipie Scaling Tool`}
                        desc1={`Scales recipies based on user-given criteria, such as servings, calories, or grams of protein.`}
                        desc2={`Also Looks up foods with the USDA's food database API to quickly get scaled portion sizes.`}
                        link={`#`}
                        projectPage={`#`}
                        github={``}
                    />


                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/tomatokei')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                            </div>
                            <div className='mx-4'>
                                <h3>ReciPeace</h3>
                                <small>Recipie Scaling Tool</small>
                                <br />
                                <br />
                                <p>Scales recipies based on user-given criteria, such as servings, calories, or grams of protein.</p>
                                <p>Also Looks up foods with the USDA's food database API to quickly get scaled portion sizes.</p>
                            </div>

                            <div className="d-flex justify-content-center d-flex p-2">
                                <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                            </div>

                        </div>
                    </div>




                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/tomatokei')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                            </div>
                            <div className='mx-4'>
                                <h3>CookDown</h3>
                                <small>Calculates food mass loss from cooking.</small>
                                <br />
                                <br />
                                <p>Food changes mass significantly after being cooked. This can throw calorie-counting measurements way out of whack.</p>
                                <p>Knowing the difference is extremely useful for both bodybuilding and general weight management.</p>
                            </div>

                            <div className="d-flex justify-content-center d-flex p-2">
                                <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                            </div>

                        </div>
                    </div>

                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/tomatokei')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                            </div>
                            <div className='mx-4'>
                                <h3>PrepApp</h3>
                                <small>App for tracking costs, amounts, and timing for meal prep.</small>
                                <br />
                                <br />
                                <p>It's hard to figure out meal prep if you don't know how much food you use, or what it will cost.</p>
                                <p>PrepApp calculates how much food you should buy, how much it will cost, and how long it will take.</p>
                            </div>

                            <div className="d-flex justify-content-center d-flex p-2">
                                <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                            </div>

                        </div>
                    </div>




                    <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
                        history.push('/tomatokei')
                    }}>
                        <div>
                            <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                                <img src="\tomatokei.png" alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                            </div>
                            <div className='mx-4'>
                                <h3>LiftOffice</h3>
                                <small>An app for keeping track of weightlifting progression.</small>
                                <br />
                                <br />
                                <p>Takes the guesswork out of progression by calculating weights based on the user's goals, stats, and other inputs.</p>
                                <p></p>
                            </div>

                            <div className="d-flex justify-content-center d-flex p-2">
                                <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a>
                                <Link to="./tomatokei" ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                                <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                            </div>

                        </div>
                    </div>





                </div>

                <Link to="/projects" className='text-decoration-none'><button className='btn btn-warning d-block mx-auto'><h3>See Even More Projects!</h3></button></Link>

            </div>



        </div>
    )
}

export default Portfolio
