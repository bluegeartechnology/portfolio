import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Link } from 'react-router-dom'
import "animate.css"
import "hover.css"

function App() {
  return (
    <div className="App">
      <div className="d-hidden" id="home"></div>

      <header className="App-header">


        <div id='headerOverlay' className="text-dark">

          <video autoPlay muted loop id="headerVideo" src="./CircuitBoards7_Videvo.mov" type="video/mp4" />


        </div>

        <nav id='navbar' className='bg-light'>

          <div className="row-col d-flex justify-content-around ">
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="#home">Home</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="#about">About</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="#portfolio">Portfolio</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="#skills">Skills</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="#contact">Contact</a>

          </div>
        </nav>

        {/*<img src={logo} className="App-logo" alt="logo" /> */}

        <div id='headerJumbotron' className="jumbotron container mx-auto align-content-middle text-center overflow-hidden row d-flex justify-content-around">
          <div id="headshotContainer" className='col-lg-3 col-md-5 col-sm-4 col-4 animate__animated animate__fadeIn'>
            <img id='headshot' className='rounded' src="./PictureSquared.jpg" alt="" />
          </div>

          <div className="container justify-content-center text-dark col-lg-8 col-md-12">
            <h1 className='mr-5 mb-0  text-primary animate__animated animate__fadeInTopLeft'>######</h1>
            <h1 className='ml-5 mb-2 text-primary animate__animated animate__fadeInBottomRight'>######</h1>


            <h4 className='animate__animated animate__fadeIn mb-0'>Full Stack Web Developer</h4>
          </div>




        </div>



      </header>


      <div id="about" className="bg-light px-2 py-5 my-5">
        <div id="aboutContainer" className='container px-2 py-5 my-4'>
          <h2 className='mb-2'>About Me</h2>

          <h3>Why I Got Into Code</h3>


          <h3>Why I like It</h3>
          <p>Coding is equal parts puzzle solving and engineering. Every puzzle solved yields a new machine which affects the universe.</p>

          <h3>Why I want to be a developer</h3>
          <p>Information is the current frontier for humanity, in a literal sense. All land has been explored, and now we're building new lands in an abstract space. Programming is the means to explore and settle that frontier.
			I want to explore that space, and build it out even further.</p>

          <h3>Where I'm at with code</h3>
          <p>I am currently looking to delve into the business side of web development. For example, building digital services, products</p>
        </div>

      </div>


      <div id="portfolio" className='text-light'>

        <div id="portfolioContainer" className='py-5 my-5 mb-4'>

          <h2 className='my-5 text-center container'>Portfolio</h2>

          <div className="d-flex row justify-content-around my-5 mx-auto">


            <a href="https://tomatokei.herokuapp.com" target='blank' className="btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob">
              <div>
                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                  <img src="\tomatokei.png" alt="" className='rounded my-auto' />
                </div>
                <h3>Tomatokei</h3>
                <small>A Pomodoro Clock and Time Management Tool</small>
                <br />
                <br />
                <p>Designed to help manage ADHD symptoms and stay on task.</p>
                <p>Integrated with Google Calendar for optimal ease of use.</p>
                <div className="row justify-content-center d-flex p-2">
                  <a href="https://tomatokei.herokuapp.com" target='blank'><button className="btn btn-primary mx-1"><i className="fa fa-globe"></i> Visit</button></a>
                  <a href="./tomatokei" ><button className="btn btn-success mx-1"><i className="fa fa-bar-chart"></i> Details</button></a>
                  <a href="https://github.com/bluegeartechnology/Tomatokei" target='blank'><button className="btn btn-dark mx-1"><i className="fa fa-github"></i> GitHub</button></a>
                </div>

              </div>
            </a>


            <a href="https://jystdev.herokuapp.com" target='blank' className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob">
              <div>
                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                  <img src="\JYST.png" alt="" className='rounded' />
                </div>
                <h3>JYST</h3>
                <small>Junk Yard Scraper Tool</small>
                <br />
                <br />
                <p>A web app that grabs inventory data from local junkyard websites and APIs, then sorts, displays, and emails that data to clients.</p>
                <p>Uses web scraping and browser automation. (Cheerio and Puppeteer)</p>
                <div className="row justify-content-center d-flex p-2">
                  <a href="https://jystdev.herokuapp.com" target='blank'><button className="btn btn-primary mx-1"><i className="fa fa-globe"></i> Visit</button></a>
                  <a href="./JYST" ><button className="btn btn-success mx-1"><i className="fa fa-bar-chart"></i> Details</button></a>
                  <a href="https://github.com/bluegeartechnology/JYST" target='blank'><button className="btn btn-dark mx-1"><i className="fa fa-github"></i> GitHub</button></a>
                </div>
              </div>
            </a>

            <a href="#portfolio" onClick={(e) => { }} className="btn bg-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob">
              <div>
                <div className="my-3 rounded projectImageDiv align-middle d-flex justify-content-center">
                  <img src="\tomatokei.png" alt="" className='rounded my-auto' />
                </div>

                <div className="d-flex flex-column justify-content-between">
                  <h3>Portfolio Site</h3>
                  <small>Yes, the very portfolio site you're looking at right now!</small>

                  <p>Serves as a playground for me to flex new skills I've learned.</p>
                  <p>Come take a look under the hood at GitHub.</p>
                  <div className="row justify-content-center d-flex p-2">
                    <a href="" onClick={(e) => { e.preventDefault(); alert(`You're already here, wise guy.`) }}><button className="btn btn-primary mx-1"><i className="fa fa-globe"></i> Visit</button></a>
                    <a href="./portfolio" ><button className="btn btn-success mx-1"><i className="fa fa-bar-chart"></i> Details</button></a>
                    <a href="https://github.com/bluegeartechnology/portfolio" target='blank'><button className="btn btn-dark mx-1"><i className="fa fa-github"></i> GitHub</button></a>
                  </div>
                </div>

              </div>
            </a>




            <div className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
              <h3>ACCESS</h3>
            </div>





            <div className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 ">
              <div className="my-3 rounded projectImageDiv align-middle">
                <img src="\tomatokei.png" alt="" className='rounded my-auto' />
              </div>
              <h3>Tomatokei</h3>
              <small>A Pomodoro Clock and Time Management Tool</small>
              <br />
              <br />
              <p>Designed to help manage ADHD symptoms and stay on task.</p>
              <p>Integrated with Google Calendar for optimal ease of use.</p>
            </div>




          </div>

          <a href="/projects"><button className='btn btn-warning d-block mx-auto'><h3>See Even More Projects!</h3></button></a>

        </div>



      </div>


      <div id="skills" className='bg-light '>

        <div id="aboutContainer" className='container p-4 mb-4'>
          <h2>Skills</h2>

          <h3>Why I Got Into Code</h3>


          <h3>Why I like It</h3>
          <p>Coding is equal parts puzzle solving and engineering. Every puzzle solved yields a new machine which affects the universe.</p>

          <h3>Why I want to be a developer</h3>
          <p>Programming is the current frontier for humanity. All land has been explored, and now we're building new land in an abstract space.
			I want to explore that space, and build it out even further.</p>

          <h3>Where I'm at with code</h3>
          <p>I am currently looking to delve into the business side of web development. For example, building digital services, products</p>
        </div>

      </div>


      <div id="contact" className='bg-light '>

        <div id="contactContainer" className='container p-5 mb-5'>
          <h2>Contact</h2>

          <h3 className='text-center py-5'>Let's work together.</h3>


          <div className="d-flex row justify-content-center my-5 ">

            <div target='blank' className='contactLink text-center text-primary mx-2'>
              <a href='mailto:joshc@bluegeartechnology.com' className="mx-auto btn text-primary">
                <i className="fa fa-envelope fa-5x"></i>
              </a>
              <h3 id='email' >joshc@bluegeartechnology.com</h3>
            </div>

            <a href='/resume' target='blank' className='contactLink text-success text-center btn mx-2'>
              <i className="fa fa-file fa-5x mx-auto"></i>
              <h3 id='github' className='text-center' >Résumé</h3>
            </a>

          </div>


          <hr />

          <div className="d-flex row justify-content-around my-5">



            <a href='https://github.com/bluegeartechnology' target='blank' className='contactLink text-center text-dark btn col-12 col-sm-6 col-md-4 col-lg-3'>
              <i className="fa fa-github fa-5x mx-auto"></i>
              <h3 id='github' className='text-center' >GitHub</h3>
            </a>

            <a href='https://youtube.com/' target='blank' className='contactLink text-center text-primary btn col-12 col-sm-6 col-md-4 col-lg-3'>
              <i className="fa fa-linkedin-square fa-5x mx-auto"></i>
              <h3 id='youtube' >LinkedIn</h3>
            </a>

            <a href='https://youtube.com/' target='blank' className='contactLink text-center text-danger btn col-12 col-sm-6 col-md-4 col-lg-3'>
              <i className="fa fa-youtube-play fa-5x mx-auto"></i>
              <h3 id='youtube' >YouTube</h3>
            </a>

          </div>

          <hr />



        </div>

      </div>




    </div>
  );
}

export default App;
