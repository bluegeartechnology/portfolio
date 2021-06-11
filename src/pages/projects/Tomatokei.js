import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProjectPage from '../../Components/ProjectPage'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('imageAndEmbed').innerHTML = `<img width='100%' src="\/tomatokei.png" alt="" className='rounded my-auto' />`
    }, []);
}

const Tomatokei = (props) => {


    useHistory();

    let what = <>
        <p>Tomatokei is a Pomodoro Clock and Time Management Tool. In particular, it exists to help manage ADHD symptoms and keep users on task.</p>
    </>

    let how = <>
        <p>
            Tomatokei is built around the <a target='blank' href="https://en.wikipedia.org/wiki/Pomodoro_Technique">Pomodoro Technique</a> and various ADHD coping strategies.
                    </p>
        <p>
            In particular, it operates on the assumtion that the user:
                    </p>
        <ul>
            <li>
                Has difficulty paying attention to a given task for long spans of time
                        </li>
            <li>
                Requires frequent, small breaks to avoid mental burnout
                        </li>
            <li>
                May need assistance in remembering the steps in a task
                        </li>
            <li>
                May need assistance in remembering their place in a sequence of steps or tasks
                        </li>
            <li>
                Is likely to become distracted or frustrated by overstimulation, and lose their focus or interest in a task
                        </li>
            <li>
                May have difficulty organizing a complex task into simple steps, and following those steps in a sequence without becoming frustrated
                        </li>
        </ul>
        <p>
            Of course, all of these difficulties can affect people without ADHD to some degree, but they exist to an extreme degree in those with it.
                    </p>
        <p>
            Tomatokei seeks to alleviate these issues by offering the user a visually minimalist task and project management system that guides the user through a path of their own creation.
            This is done by empowering the user with a series of tools designed for objectives of different complexity.
                    </p>


        <p>
            A user can create projects and tasks. A project is a framework which holds individual tasks, and their association to one another.
            The user can take notes as meticulously (or not) as they like within both the project and the task itself.
                    </p>

        <p>
            From there, each task within the project is associated with settings on a Pomodoro Clock, and the user is kept on-task by this clock.
            The Pomodoro Technique is particularly suited to assisting people suffering from ADHD.
            It provides an inherent safeguard from prolonged distraction, and reminders to stay on task, yet also encourages the user to take breaks, which ADHD sufferrers require in order to avoid burnout.
                    </p>

        <p>
            Once the user is happy with a project or task, they can organize themselves even further by sending it directly to Google Calendar.
            This integration allows a much better ease of use than most tools, especially if the user already used Google Calendar,
            as most tools rely upon their own internal alarm system, which becomes another thing to keep track of.
                    </p>
    </>

    let tech = <>

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
    </>

    let learned = <>
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
                It uses JSON web tokens to this end.
                There was little practical reason to do this other than learning, and I would definitely avoid reinventing the wheel in the future, and use something like Passport instead.
                        </li>

        </ul>
    </>


    return (
        <div id="portfolio" className='py-5 my-4  text-light'>

            {
                <ProjectPage
                    name='Tomatokei'
                    what={what}
                    how={how}
                    tech={tech}
                    techBadges={['html5', 'css3', 'javascript', 'react', 'redux', 'mongodb', 'nodejs', 'bootstrap']}
                    learned={learned}
                    buttons={['youtube', 'embed', 'heroku']}
                    heroku={`tomatokei`}
                />
            }

        </div>
    )
}

export default Tomatokei
