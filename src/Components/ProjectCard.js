import React from 'react'
import { Link, useHistory } from 'react-router-dom'

function ProjectCard(props) {

    let history = useHistory();

    console.log(props.projectName)

    return (
        <div className="portfolioProjectCard btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 " onClick={() => {
            history.push(props.projectName)
        }}>
            <div>
                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                    <img src={`${props.projectName}.png`} alt="" className='rounded my-auto' onLoad={(e) => e.target.classList.add('animate__animated', 'animate__fadeIn')} />
                </div>
                <div className='mx-4'>
                    <h3>{props.projectName}</h3>
                    <small>{props.header}</small>
                    <br />
                    <br />
                    <p>{props.desc1}</p>
                    <p>{props.desc2}</p>
                </div>

                <div className="d-flex justify-content-center d-flex p-2">
                    {props.link != `` ? <a href={props.link} target='blank'><button className="btn btn-primary mx-1 my-1"><i className="fa fa-globe"></i>&nbsp;Visit</button></a> : ''}

                    <Link to={`./${props.projectPage}`} ><button className="btn btn-success mx-1 my-1"><i className="fa fa-bar-chart"></i>&nbsp;Details</button></Link>
                    {props.github != `` ? <a href={props.github} target='blank'><button className="btn btn-secondary mx-1 my-1"><i className="fa fa-github"></i>&nbsp;GitHub</button></a> : ``}
                </div>

            </div>
        </div>
    )
}

export default ProjectCard