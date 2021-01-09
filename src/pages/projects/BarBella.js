import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
        // document.getElementById('imageAndEmbed').innerHTML = `<img width='100%' src="\/tomatokei.png" alt="" className='rounded my-auto' />`
    }, []);
}


let setStandardOlympic = (e) => {
    e.preventDefault();
    document.getElementById('45s').value = 2;
    document.getElementById('35s').value = 2;
    document.getElementById('25s').value = 2;
    document.getElementById('10s').value = 2;
    document.getElementById('5s').value = 4;
    document.getElementById('2.5s').value = 2;
}


let calculateWeights = (e) => {
    e.preventDefault();





}








const BarBella = () => {


    useHistory();

    return (
        <div id="portfolio" className='py-5 my-4  text-light'>
            <div className="animate__animated animate__fadeIn">
                <h2 className='text-center col-9 mx-auto'>BarBella</h2>


                <form className='form-group col-8 bg-secondary rounded p-4 m-4 mx-auto' action="">

                    <p>Desired Weight</p>
                    <input className='form-control col-2' type="number" name="desiredWeight" id="desiredWeight" step="5" placeholder='0' />

                    <br />
                    <p>Available Weights</p>

                    <div className="mx-auto d-flex row justify-content-center">
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">45s</p>
                            <input className='col-6' type="number" name="45s" id="45s" step="2" defaultValue="2" min="0" />
                        </div>
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">35s</p>
                            <input className='col-6' type="number" name="35s" id="35s" step="2" defaultValue="2" min="0" />
                        </div>
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">25s</p>
                            <input className='col-6' type="number" name="25s" id="25s" step="2" defaultValue="2" min="0" />
                        </div>
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">10s</p>
                            <input className='col-6' type="number" name="10s" id="10s" step="2" defaultValue="2" min="0" />
                        </div>
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">5s</p>
                            <input className='col-6' type="number" name="5s" id="5s" step="2" defaultValue="4" min="0" />
                        </div>
                        <div className=" d-flex col-4 col-lg-2">
                            <p className="my-auto col-4 col-lg-5">2.5s</p>
                            <input className='col-6' type="number" name="2.5s" id="2.5s" step="2" defaultValue="2" min="0" />
                        </div>

                    </div>



                    <br />
                    <br />
                    <div className="d-flex row justify-content-between">
                        <button className="btn btn-primary col-4 col-lg-2" onClick={(e) => calculateWeights(e)}>Calculate</button>
                        <button className="btn btn-warning col-6 col-md-4" onClick={(e) => setStandardOlympic(e)}>Reset Weights to <br />Standard 300lb Olympic Barbell Set</button>
                    </div>

                    <div id="finalWeights" className='p-4 mx-auto col-10 text-center '></div>
                </form>






                <div id='imageAndEmbed' className="my-3 rounded mx-auto d-flex justify-content-center col-11 col-lg-6">

                </div>

                <div className="d-flex justify-content-center d-flex p-2">
                    <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit On Heroku</button></a>

                    <button className="btn btn-success mx-1 my-1" onClick={
                        () => {
                            document.getElementById('imageAndEmbed').innerHTML = `<iframe id='embeddedApp' className='mx-auto' src="https://tomatokei.herokuapp.com" frameborder="1"></iframe>`
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
                    <p>Tomatokei is a Pomodoro Clock and Time Management Tool. In particular, it exists to help manage ADHD symptoms and keep users on task.</p>

                    <h2>How does it work?</h2>
                    <p>
                        Tomatokei is built around the <a target='blank' href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique</a> and various ADHD coping strategies.
                    </p>


                    <h2>Technologies Used</h2>
                    <div className="text-light my-5 mx-auto">

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
                            <img className='skillIcon col-12' src="redux.png" alt="" />
                            <h3 className='text-center'>Redux</h3>
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
                            <svg width="" height="100" viewBox="0 0 16 16" class="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                            </svg>
                            <h3 className='text-center'>Bootstrap</h3>
                        </div>
                    </div>



                    <h2>What I learned</h2>
                    <p>
                        This was my first truly full-stack application where everything really clicked and I knew what I was doing.
                        As such, there was a lot of trial and error along the way, and it shows.
                        I learned so much from this project that it's hard to think of any part that wouldn't be improved by a total rewrite.
                        However, some of the biggest points are as follows:
                    </p>
                    <ul>
                        <li>
                            There were many, many revisions to the structure of the MongoDB database, because I initially didn't understand Mongoose, schemas, and other related concepts.
                            I also hadn't fully conceptualized the strucutre of the system, and as such, wound up repeatedly refactoring the database's structure.
                        </li>
                        <li>
                            Because this was the first time I'd attempted understanding and implementing an authentication system, it's built from scratch based on tutorials.
                            There was little practical reason to do this other than learning, and I would definitely avoid reinventing the wheel in the future, and use something like Passport instead.
                        </li>
                        <li>

                        </li>
                    </ul>
                </div>


            </div>
        </div >
    )
}

export default BarBella
