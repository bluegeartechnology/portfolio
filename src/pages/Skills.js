import React, { useEffect } from 'react'


const Skills = () => {


    useEffect(() => {

        setTimeout(() => document.getElementById('webdevSkillsButton').click(), 500)

    }, [])

    return (
        <div id="skills" className='bg-light animate__animated animate__fadeIn'>

            <div id="skillsContainer" className='container col-12 col-xs-12 col-md-10 col-lg-10 col-xl-8 py-5 mb-4'>

                <div className='my-4 bg-white px-4 py-4 rounded border shadow'>

                    <div className="row d-flex justify-content-between">

                        <h2 className={'col-9 mx-2'}>Skills & Certifications</h2>

                        <button className={'btn btn-secondary rounded float-end col-2'} id='openCloseAll' onClick={() => {
                            Array.from(document.getElementsByTagName('button')).map((el, i) => {
                                if (document.getElementById('openCloseAll').innerHTML == 'Open All' && el.classList.contains('collapsed')) {
                                    el.click();
                                    document.getElementById('openCloseAll').innerHTML = 'Close All'
                                }

                                if (document.getElementById('openCloseAll').innerHTML == 'Close All' && el.classList.contains('collapse')) {
                                    el.click();
                                    document.getElementById('openCloseAll').innerHTML = 'Open All'
                                }
                            })
                        }
                        }>Open All</button>


                    </div>







                    <button id='webdevSkillsButton' class="btn btn-primary my-4 w-100 collpase" type="button" data-bs-toggle="collapse" data-bs-target="#webdevSkills" aria-expanded="false" aria-controls="webdevSkills">
                        <h3 className='text-center my-2'>Web Development Skills <i className="fa fa-arrow-down"></i></h3>
                    </button>

                    <div id="webdevSkills" className='bg-light rounded border collapse row justify-content-center '>

                        <div className="row justify-content-around my-4 p-4">

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="html5.png" alt="" />
                                <h3 className='text-center text-dark'>HTML 5</h3>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="css3.png" alt="" />
                                <h3 className='text-center text-dark'>CSS 3</h3>
                            </div>


                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="javascript.png" alt="" />
                                <h3 className='text-center text-dark'>JavaScript</h3>
                            </div>


                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="react.png" alt="" />
                                <h3 className='text-center text-dark'>ReactJS</h3>
                            </div>

                            <div className='col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                                <img className='skillIcon col-12' src="redux.png" alt="" />
                                <h3 className='text-center'>Redux</h3>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row-column justify-content-between my-auto'>
                                <img className='skillIcon col-12 py-4' src="mongodb.png" alt="" />
                                <h3 className='text-center text-dark'>mongoDB</h3>
                            </div>






                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="wordpress.png" alt="" />
                                <h3 className='text-center text-dark'>WordPress</h3>
                            </div>






                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob row my-auto'>
                                <svg width="" height="100" viewBox="0 0 16 16" className="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                                </svg>
                                <h3 className='text-center text-dark'>Bootstrap</h3>
                            </div>




                        </div>










                    </div>

                    <button class="btn btn-success my-4 w-100 collpase" type="button" data-bs-toggle="collapse" data-bs-target="#digitalMediaSkills" aria-expanded="false" aria-controls="digitalMediaSkills">
                        <h3 className='text-center my-2'>Digital Media Skills <i className="fa fa-arrow-down"></i></h3>
                    </button>

                    <div id='digitalMediaSkills' className="collapse bg-light rounded border row justify-content-center ">



                        <div className="row justify-content-around my-4 p-4">

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="photoshop.png" alt="" />
                                <h4 className='text-center text-dark'>Photoshop</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="premiere.png" alt="" />
                                <h4 className='text-center text-dark'>Premiere</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="aftereffects.png" alt="" />
                                <h4 className='text-center text-dark'>After Effects</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="audition.png" alt="" />
                                <h4 className='text-center text-dark'>Audition</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="flstudio.png" alt="" />
                                <h4 className='text-center text-dark'>FL Studio</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob py-4'>
                                <img className='skillIcon col-12' src="blender.svg" alt="" />
                                <h4 className='text-center text-dark'>Blender</h4>
                            </div>

                        </div>



                    </div>


                    <button class="btn btn-info text-light my-4 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#mobiledevSkills" aria-expanded="false" aria-controls="mobiledevSkills">
                        <h3 className='text-center my-2'>Mobile Development Skills <i className="fa fa-arrow-down"></i></h3>
                    </button>

                    <div id='mobiledevSkills' className="collapse bg-light rounded border  row justify-content-center ">

                        <div className="row justify-content-around my-4 p-4">

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="android.png" alt="" />
                                <h4 className='text-center text-dark'><i className="fa"></i>Android</h4>
                            </div>


                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="kotlin.png" alt="" />
                                <h4 className='text-center text-dark'><i className="fa"></i>Kotlin</h4>
                            </div>

                        </div>



                    </div>


                    <button class="btn btn-danger my-4 w-100" type="button" data-bs-toggle="collapse" data-bs-target="#certifications" aria-expanded="false" aria-controls="certifications">
                        <h3 className='text-center my-2'>Certifications <i className="fa fa-arrow-down"></i></h3>
                    </button>

                    <div id='certifications' className="collapse bg-light rounded border  row justify-content-center ">


                        <div className="row justify-content-around my-4 p-4">

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="GoogleAdsSearch.png" alt="" />
                                <h4 className='text-center text-dark'>Google Ads<br />Search</h4>
                            </div>

                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="GoogleAdsSearch.png" alt="" />
                                <h4 className='text-center text-dark'>Paraben <br /> DSMO-DS</h4>
                            </div>

                        </div>



                    </div>


                </div>



            </div>

        </div>
    )
}

export default Skills
