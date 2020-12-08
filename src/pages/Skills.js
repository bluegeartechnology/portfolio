import React from 'react'

const Skills = () => {
    return (
        <div id="skills" className='bg-light animate__animated animate__fadeIn'>

            <div id="skillsContainer" className='container py-5 mb-4'>

                <div className='my-4 bg-white px-4 py-4 rounded border shadow'>
                    <h2>Skills & Certifications</h2>




                    <div className='my-4 bg-light px-4 py-4 rounded border '>

                        <h3 className='text-center my-5'>Web Development Skills</h3>

                        <div className="row justify-content-around">

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
                                <img className='skillIcon col-12' src="mongodb.png" alt="" />
                                <h3 className='text-center text-dark'>mongoDB</h3>
                            </div>






                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <img className='skillIcon col-12' src="node.svg" alt="" />
                                <h3 className='text-center text-dark'>Node.js</h3>
                            </div>




                            <div className='my-2 col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob'>
                                <svg width="" height="100" viewBox="0 0 16 16" className="col-12 bi bi-bootstrap-fill" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                                </svg>
                                <h3 className='text-center text-dark'>Bootstrap</h3>
                            </div>



                            <img className='my-2 skillIcon col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob' src="node.svg" alt="" />

                        </div>


                    </div>

                    <div className="my-4 bg-light px-2 py-4 rounded border ">
                        <h3 className='text-center my-5'>Digital Media Skills</h3>

                        <img className='skillIcon col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob' src="photoshop.png" alt="" />

                        <img className='skillIcon col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob' src="premiere.png" alt="" />

                        <img className='skillIcon col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob' src="aftereffects.png" alt="" />

                        <img className='skillIcon col-lg-2 col-md-3 col-sm-5 col-6 hvr-bob' src="audition.png" alt="" />

                    </div>



                    <div className="my-4 bg-light px-2 py-4 rounded border ">
                        <h3 className='text-center my-5'>Certifications</h3>

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
    )
}

export default Skills