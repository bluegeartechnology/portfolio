import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
        //document.getElementById('imageAndEmbed').innerHTML = `<img width='100%' src="\/tomatokei.png" alt="" className='rounded my-auto' />`
    }, []);
}

const ProjectPage = (props) => {

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
