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

    let i = 0;
    let availableWeights = []

    let fourtyFives = document.getElementById('45s').value / 2
    while (i < fourtyFives) { availableWeights.push(45); i++ }
    i = 0;

    let thirtyFives = document.getElementById('35s').value / 2
    while (i < thirtyFives) { availableWeights.push(35); i++ }
    i = 0;

    let twentyFives = document.getElementById('25s').value / 2
    while (i < twentyFives) { availableWeights.push(25); i++ }
    i = 0;

    let tens = document.getElementById('10s').value / 2
    while (i < tens) { availableWeights.push(10); i++ }
    i = 0;

    let fives = document.getElementById('5s').value / 2
    while (i < fives) { availableWeights.push(5); i++ }
    i = 0;

    let twoPointFives = document.getElementById('2.5s').value / 2
    while (i < twoPointFives) { availableWeights.push(2.5); i++ }
    i = 0;


    let quantities = [fourtyFives, thirtyFives, twentyFives, tens, fives, twoPointFives]


    //    let availableWeights = [45, 35, 25, 10, 5, 5, 2.5]
    console.log(availableWeights);

    //Double the weights, since weights work by being symmetrical.
    availableWeights = availableWeights.map(weight => weight * 2)


    let barWeight = 45;
    let desiredWeight = document.getElementById('desiredWeight').value;
    let accWeight = barWeight;

    let usedWeights = []
    let weightErrors = []

    document.getElementById('finalWeights').innerHTML = ``
    document.getElementById('errors').innerHTML = ``



    availableWeights.map((weight, i) => {
        console.log(`${accWeight} + ${weight} = ${accWeight + weight}`);





        if (i == 0 && !desiredWeight) { weightErrors.push(`Please enter a desired weight. It must be an integer that's a multiple of five.`); console.log(weightErrors); }

        if (i == 0 && desiredWeight < 45) { weightErrors.push(`Your desired weight is less than 45 lbs. The bar itself weighs 45 lbs.`) }

        if (i == 0 && desiredWeight == 45) { let finalWeights = "Just The Bar"; document.getElementById('finalWeights').innerHTML = `<h3>${finalWeights}</h3>` }

        if ((i == 0) && (desiredWeight % 5) != 0) { weightErrors.push(`Your desired weight must be an integer that's divisble by 5. <br/> Make sure the number ends in either a 5 or a 0.`) }

        if (i == availableWeights.length - 1 && (accWeight + weight) < desiredWeight) {

            if ((availableWeights.reduce((a, b) => a + b)) + barWeight < desiredWeight) {
                weightErrors.push(`Your available weights (including the 45 lbs bar) have a total weight of ${(availableWeights.reduce((a, b) => a + b)) + barWeight} lbs. <br/>This is less than your desired weight of ${desiredWeight} lbs. <br/>You will need more available weights to reach your desired weight.`);
            } else {
                weightErrors.push(`There is no combination of your available weights which will equal your desired weight.`)
            }


        }


        document.getElementById('errors').innerHTML = weightErrors.map((weightError) => `<h6 class='bg-danger m-2 p-2 rounded' >${weightError}</h6>`).join('')



        if ((accWeight + weight) > desiredWeight) {

            console.log(`Adding ${weight} would exceed the desired weight of ${desiredWeight}. Discarding.`);

        } else if (accWeight + weight < desiredWeight) {

            console.log(`Adding ${weight} would still leave room until ${desiredWeight}. Using it and adding to the used weights array.`);
            accWeight += weight;
            usedWeights.push(weight)

        } else if ((accWeight + weight) == desiredWeight) {
            accWeight += weight;
            console.log(`Adding ${accWeight} to ${weight} brings us to our desired weight of ${desiredWeight}! Using it and adding to the used weights array.`);
            usedWeights.push(weight)
            console.log(`Final array of used weights: ${usedWeights}`);

            console.log(`Dividing and symmetrizing.`);
            usedWeights = usedWeights.map(weight => weight / 2)

            //usedWeights = usedWeights.push(usedWeights.reverse())
            console.log(usedWeights);

            let finalWeights = [...usedWeights.reverse(), "Bar", ...usedWeights.reverse()]
            console.log(finalWeights);

            document.getElementById('finalWeights').innerHTML = `<h3>${finalWeights}</h3>`




        } else {
            console.log('Something went wrong. No criteria met.');
        }






    })




}








const BarBella = () => {


    useHistory();

    return (
        <div id="portfolio" className='py-5 my-4  text-light'>
            <div className="animate__animated animate__fadeIn">
                <h2 className='text-center col-9 mx-auto'>BarBella</h2>


                <form className='form-group col-12 col-sm-12 col-md-8 col-lg-8 bg-secondary rounded p-4 m-4 mx-auto' action="">

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
                        <button className="btn btn-warning col-6 col-md-4" onClick={(e) => setStandardOlympic(e)}>Reset Available Weights to <br />Standard 300lb Olympic Barbell Set</button>
                    </div>

                    <div id="finalWeights" className='p-4 mx-auto col-10 text-center '></div>
                    <div id="errors" className='p-4 mx-auto col-10 text-center '></div>

                    <div className="row mx-auto mw-100">
                        <div id="thirtyFive" className=' px-0 my-5 border rounded col text-center bg-light text-dark '>2.5</div>
                        <div id="thirtyFive" className=' px-0 my-4 border rounded col text-center bg-info'>5</div>
                        <div id="thirtyFive" className=' px-0 my-3 border rounded col text-center bg-primary'>10</div>
                        <div id="thirtyFive" className=' px-0 my-2 border rounded col text-center bg-success'>25</div>
                        <div id="fourtyFive" className=' px-0 my-1 border rounded col text-center bg-warning text-dark'>35</div>
                        <div id="thirtyFive" className=' px-0 my-0 border rounded col text-center bg-danger'>45</div>
                        <div id="thirtyFive" className=' px-0 my-0 border rounded col text-center bg-danger'> 45</div>
                        <div id="bar" className='border bg-dark p-0 my-5 col-1 col-sm-4 col-md-4 col-lg-6'><div className="text-center">45</div></div>
                        <div id="fourtyFive" className=' px-0 my-0 border rounded col text-center bg-danger'>45</div>
                        <div id="thirtyFive" className=' px-0 my-0 border rounded col text-center bg-danger'>45</div>
                        <div id="thirtyFive" className=' px-0 my-1 border rounded col text-center bg-warning text-dark'>35</div>
                        <div id="thirtyFive" className=' px-0 my-2 border rounded col text-center bg-success'>25</div>
                        <div id="thirtyFive" className=' px-0 my-3 border rounded col text-center bg-primary'>10</div>
                        <div id="thirtyFive" className=' px-0 my-4 border rounded col text-center bg-info'>5</div>
                        <div id="thirtyFive" className=' px-0 my-5 border rounded col text-center bg-light text-dark'>2.5</div>

                    </div>

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
                    <p></p>

                    <h2>How does it work?</h2>
                    <p></p>


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

                    </p>

                </div>


            </div>
        </div >
    )
}

export default BarBella