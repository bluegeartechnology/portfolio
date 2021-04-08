import React from 'react'
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ProjectPage from '../../Components/ProjectPage'

function useHistory() {
    useEffect(() => {
        window.scrollTo(0, 0)
        document.getElementById('imageAndEmbed').innerHTML = `<img src="\/JYST.png" alt="" className='rounded my-auto' />`
    }, []);
}

const JYST = () => {

    let what = <>
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
    </>

    let how = <>
        <p>
            JYST uses web scraping and browser automation to pull data from local junkyards.
            On the client-side, simple search page enables easy, on-demand searching of all available inventories, while a server-side cron job maintains a daily scrape of all desired cars, and emails them to subscribers.
    </p>
        <p>
            The front end is powered by React, which makes requests to the back end via Axios.
            The back end is powered by Node, Express, and MongoDB. It makes use of Cheerio and Puppeteer for the majority of its scraping activities.
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
    </>

    let learned = <>
        <p>
            This was a tough one.
            No project prior to this one required as much thought about the commercial viability of such a system, or how far it could or should be expanded.
            Who are my users?
            What is my business model?
            Who would pay for such a system?
            What tools and features would they actually use?
            The importance of carefully considering the business side of things, rather just focusing on the coding side and excitedly diving head-first into feature creep, is a lesson I won't soon forget.
    </p>
    </>


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
                    heroku={`jystdev`}
                />
            }

        </div>
    )
}

export default JYST
