import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
        //document.getElementById('imageAndEmbed').innerHTML = `<img width='100%' src="\/tomatokei.png" alt="" className='rounded my-auto' />`


        let techBadges = {
            'html5': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="html5.png" alt="" /> <h3 className='text-center'>HTML 5</h3> </div>`,
            'css3': `<div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="css3.png" alt="" /> <h3 className='text-center text-dark'>CSS 3</h3></div>`,
            'javascript': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="javascript.png" alt="" /> <h3 className='text-center'>JavaScript</h3> </div>`,
            'react': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="react.png" alt="" /> <h3 className='text-center'>ReactJS</h3> </div>`,
            'redux': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'> <img className='skillIcon col-12' src="redux.png" alt="" /> <h3 className='text-center'>Redux</h3> </div>`,
            'mongodb': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'> <img className='skillIcon col-12' src="mongodb.png" alt="" /> <h3 className='text-center'>mongoDB</h3> </div>`,
            'nodejs': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="node.svg" alt="" /> <h3 className='text-center'>Node.js</h3> </div>`,
            'bootstrap': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <svg width="" height="100" viewBox="0 0 16 16" class="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" /> </svg> <h3 className='text-center'>Bootstrap</h3> </div>`,
            'wordpress': `<div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="wordpress.png" alt="" /> <h3 className='text-center text-dark'>WordPress</h3> </div>`,
            'photoshop': `<div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="photoshop.png" alt="" /> <h4 className='text-center text-dark'>Photoshop</h4> </div>`

        }

        //document.getElementById('techBadges').innerHTML = techBadges.html5 + techBadges.css3


    }, []);
}

const ProjectPage = (props) => {




    let techBadges = {
        'html5': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="html5.png" alt="" /> <h3 className='text-center'>HTML 5</h3> </div>`,
        'css3': `<div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="css3.png" alt="" /> <h3 className='text-center text-dark'>CSS 3</h3></div>`,
        'javascript': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="javascript.png" alt="" /> <h3 className='text-center'>JavaScript</h3> </div>`,
        'react': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'> <img className='skillIcon col-12' src="react.png" alt="" /> <h3 className='text-center'>ReactJS</h3> </div>`,
        'redux': `<div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'> <img className='skillIcon col-12' src="redux.png" alt="" /> <h3 className='text-center'>Redux</h3> </div>`

    }


    { console.log(props.techBadges.map((tech) => techBadges[tech])) }


    let buttonArray = props.buttons ? props.buttons : []
    console.log(buttonArray);

    let ytButton =
        <button className='btn btn-danger mx-1 my-1' onClick={() => {
            document.getElementById('imageAndEmbed').innerHTML = `<iframe id='embeddedApp' width="784" height="441" src="https://www.youtube.com/embed/03yBSzj7vKc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

        }}>
            <i className="fa fa-play"></i>
            &nbsp;Watch Video
    </button>

    let ghButton = <a href={`https://github.com/bluegeartechnology/${props.name}`} target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a>


    let embButton =
        <button className="btn btn-success mx-1 my-1" onClick={
            () => {
                document.getElementById('imageAndEmbed').innerHTML = `<iframe id='embeddedApp' className='mx-auto' src=${`https://${props.name}.herokuapp.com`} frameborder="1"></iframe>`
                document.getElementById('embeddedApp').width = window.innerWidth
                document.getElementById('embeddedApp').height = window.innerHeight
            }

        }>
            <i className="fa fa-arrow-down"></i>
            &nbsp;Embed Here
    </button>

    let hrkButton = <a href={`https://${props.heroku}.herokuapp.com`} target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit On Heroku</button></a>


    let buttonHTML = []

    props.buttons.includes('heroku') ? buttonHTML.push(hrkButton) : console.log('No Keroku button.');
    props.buttons.includes('embed') ? buttonHTML.push(embButton) : console.log('No embed button.');
    props.buttons.includes('youtube') ? buttonHTML.push(ytButton) : console.log('No YouTube button.');
    props.buttons.includes('github') ? buttonHTML.push(ghButton) : console.log('No Github button.');

    useHistory();

    return (
        <div id="projectPage" className='py-5 my-4  text-light'>
            <div className="animate__animated animate__fadeIn">
                <h2 className='text-center col-9 mx-auto'>{props.name}</h2>




                <div id='techBadges'></div>

                <div id='imageAndEmbed' className="my-3 rounded mx-auto d-flex justify-content-center col-11 col-lg-6">

                </div>

                <div className="d-flex justify-content-center d-flex p-2">



                    {buttonHTML}


                </div>

                <div className='container col-11 col-sm-10 col-md-10 col-lg-8 col-xl-8 bg-dark rounded px-5 py-4 my-3'>
                    <h2>What is it?</h2>
                    {props.what}

                    <h2>How does it work?</h2>
                    {props.how}

                    <h2>Technologies Used</h2>
                    <div className="text-light my-5 mx-auto">
                        {props.tech}
                    </div>


                    <h2>What I learned</h2>
                    {props.learned}
                </div>


            </div>
        </div>
    )
}

export default ProjectPage
