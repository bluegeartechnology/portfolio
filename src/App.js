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


            <a href="https://tomatokei.herokuapp.com" target='blank' className="btn btn-light col-11 col-sm-11 col-md-5 col-lg-3 my-2 mx-1 hvr-bob animate__animated animate__fadeIn">
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
                <p>Uses web scraping and browser automation. (Cheerio and Puppetteer)</p>
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

        <div id="contactContainer" className='container p-4 mb-4'>
          <h2>Contact</h2>

          <h3 id='email' >Email: <a href="mailto:joshc@bluegeartechnology.com">joshc@bluegeartechnology.com</a></h3>


          <h3>Why I like It</h3>
          <p>Coding is equal parts puzzle solving and engineering. Every puzzle solved yields a new machine which affects the universe.</p>

          <h3>Why I want to be a developer</h3>
          <p>Programming is the current frontier for humanity. All land has been explored, and now we're building new land in an abstract space.
			I want to explore that space, and build it out even further.</p>

          <h3>Where I'm at with code</h3>
          <p>I am currently looking to delve into the business side of web development. For example, building digital services, products</p>
        </div>

      </div>




    </div>
  );
}

export default App;
