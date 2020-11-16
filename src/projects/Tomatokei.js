import React from 'react'

const tomatokei = () => {
    return (
        <div id="portfolio" className='py-5 my-5  text-light'>
            <div className="container">
                <h1 className='text-center'>Tomatokei</h1>

                <iframe width='1080' height='720' src="https://tomatokei.herokuapp.com" frameborder="2"></iframe>

                <div className="my-3 rounded align-middle d-flex justify-content-center">
                    <img width='100%' src="\tomatokei.png" alt="" className='rounded my-auto' />
                </div>

                <div className="row justify-content-center d-flex p-2">
                    <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1"><i className="fa fa-globe"></i> Visit On Heroku</button></a>
                    <a href="./tomatokei" ><button className="btn btn-success mx-1"><i className="fa fa-play"></i> Embed Here</button></a>
                    <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-dark mx-1"><i className="fa fa-github"></i> GitHub</button></a>
                </div>

                <h2>What is it?</h2>
                <p>Tomatokei is a Pomodoro Clock and Time Management Tool. In particular, it exists to help manage ADHD symptoms and keep users on task.</p>
                <h2>How does it work?</h2>

                <h2>Technologies Used</h2>
                <div className="text-light my-5">

                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <img className='skillIcon col-12' src="html5.png" alt="" />
                        <h3 className='text-center'>HTML 5</h3>
                    </div>

                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <img className='skillIcon col-12' src="css3.png" alt="" />
                        <h3 className='text-center'>CSS 3</h3>
                    </div>


                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <img className='skillIcon col-12' src="javascript.png" alt="" />
                        <h3 className='text-center'>JavaScript</h3>
                    </div>


                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <img className='skillIcon col-12' src="react.png" alt="" />
                        <h3 className='text-center'>ReactJS</h3>
                    </div>

                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                        <img className='skillIcon col-12' src="mongodb.png" alt="" />
                        <h3 className='text-center'>mongoDB</h3>
                    </div>


                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <img className='skillIcon col-12' src="node.svg" alt="" />
                        <h3 className='text-center'>Node.js</h3>
                    </div>

                    <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                        <svg width="" height="100" viewBox="0 0 16 16" class="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                        </svg>
                        <h3 className='text-center'>Bootstrap</h3>
                    </div>
                </div>



                <h2>If I had to do it again...</h2>
                <p>What WOULDN'T I do differently? This was my first truly full-stack application where everything really clicked and I knew what I was doing. As such, there was a lot of trial and error along the way, and it shows.
    I learned so much from this project, it's hard to think of anything that wouldn't be improved by a total rewrite. However, some of the biggest points are as follows:</p>
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default tomatokei
