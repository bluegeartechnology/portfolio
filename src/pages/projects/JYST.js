import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProjectPage from '../../Components/ProjectPage'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
}

const JYST = () => {

    let what = <></>
    let how = <></>
    let tech = <></>
    let learned = <></>


    useHistory();

    return (
        <div id="portfolio" className='py-5 my-4  text-light'>


            {
                <ProjectPage
                    name='JYST'
                    what={what}
                    how={how}
                    tech={tech}
                    learned={learned}
                    buttons={['github', 'youtube', 'embed', 'heroku']}
                />
            }



            <div className="animate__animated animate__fadeIn">
                <h2 className='text-center col-9 mx-auto'>JYST</h2>


                <div id='imageAndEmbed' className="my-3 rounded mx-auto d-flex justify-content-center col-11 col-lg-3">
                    <iframe className='d-none' src="https://downforeveryoneorjustme.com/jystdev.herokuapp.com" frameborder="1"></iframe>
                    <img width='100%' src="\JYST.png" alt="" className='rounded my-auto' />
                </div>

                <div className="d-flex justify-content-center p-2">
                    <a href="https://jystdev.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit On Heroku</button></a>

                    <button className="btn btn-success mx-1 my-1" onClick={
                        () => {
                            document.getElementById('imageAndEmbed').innerHTML = `<iframe id='embeddedApp' className='mx-auto' src="https://jystdev.herokuapp.com" frameborder="1"></iframe>`
                            document.getElementById('embeddedApp').width = window.innerWidth
                            document.getElementById('embeddedApp').height = window.innerHeight
                        }

                    }>
                        <i className="fa fa-arrow-down"></i>
                            &nbsp;Embed Here
                            </button>

                    <button className='btn btn-danger mx-1 my-1' onClick={() => {
                        document.getElementById('imageAndEmbed').innerHTML = `<iframe id='embeddedApp' width="784" height="441" src="https://www.youtube.com/embed/03yBSzj7vKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

                    }}>
                        <i className="fa fa-play"></i>
                            &nbsp;Watch Video
                    </button>

                    <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>
                </div>

                <div className='container col-11 col-sm-10 col-md-10 col-lg-8 col-xl-8 bg-dark rounded px-5 py-4 my-3'>
                    <h2>What is it?</h2>
                    <p>
                        JYST is a web-scraper specifically for scraping local junkyard websites.
                        It primarily exists to enable part-flipping businesses to more easily find parts which can then be sold online.
                        It also contains tools for estimating profit margins of a trip to a given yard based on the cars found by the scrape.
                    </p>

                    <p>
                        Secondarily, it enables consumers to search many yards for their cars simultaneously.
                        While many junkyards have inventory searches on their websites, and part interchanges exist, there is currently no convenient way for the average person to search many local yards for unpulled parts in a time-effective manner.
                        JYST solves this problem.
                    </p>

                    <h2>Technologies Used</h2>
                    <div className="text-light my-5">

                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <img className='skillIcon col-12' src="html5.png" alt="" />
                            <h3 className='text-center'>HTML 5</h3>
                        </div>

                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <img className='skillIcon col-12' src="css3.png" alt="" />
                            <h3 className='text-center'>CSS 3</h3>
                        </div>


                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <img className='skillIcon col-12' src="javascript.png" alt="" />
                            <h3 className='text-center'>JavaScript</h3>
                        </div>


                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <img className='skillIcon col-12' src="react.png" alt="" />
                            <h3 className='text-center'>ReactJS</h3>
                        </div>

                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                            <img className='skillIcon col-12' src="mongodb.png" alt="" />
                            <h3 className='text-center'>mongoDB</h3>
                        </div>


                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <img className='skillIcon col-12' src="node.svg" alt="" />
                            <h3 className='text-center'>Node.js</h3>
                        </div>

                        <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                            <svg width="" height="100" viewBox="0 0 16 16" className="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                            </svg>
                            <h3 className='text-center'>Bootstrap</h3>
                        </div>
                    </div>



                    <h2>What I learned</h2>

                </div>


            </div>
        </div>
    )
}

export default JYST
