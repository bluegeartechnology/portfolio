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

        <div id="skillsContainer" className='container p-4 mb-4'>
          <h2>Skills</h2>



          <div className='my-4'>

            <h3 className='text-center my-5'>Web Development Skills</h3>

            <div className="row justify-content-around">

              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <img className='skillIcon col-12' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBvbHlnb24gZmlsbD0iI0U0NEQyNiIgcG9pbnRzPSIyNy4zNzcsMjguODg5IDE2LjAwMSwzMiA0LjYyNSwyOC44ODkgMiwwIDMwLjAwMiwwICAiLz48cG9seWdvbiBmaWxsPSIjRkY2QzM5IiBwb2ludHM9IjE2LDIgMTYsMjkuNzUgMjUuMjMyLDI3LjAwOCAyNy42ODgsMiAgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC4zNjMsNiA3LjYwNyw2IDgsMTAgOC42MTksMTcgMTkuNTAzLDE3IDE5LjE0OCwyMC45ODQgMTYsMjEuOTkgMTIuODU3LDIwLjk4NCAxMi42NDgsMTkgICAgOC44MDMsMTkgOS4yNjIsMjMuOTg3IDE2LDI1Ljk5IDIyLjcyOCwyMy45ODYgMjMuNzE4LDEzIDEyLjI1MiwxMyAxMi4wMDIsMTAgMjQsMTAgICIvPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" alt="" />
                <h3 className='text-center text-dark'>HTML 5</h3>
              </div>

              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <img className='skillIcon col-12' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMC8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMS9SRUMtU1ZHLTIwMDEwOTA0L0RURC9zdmcxMC5kdGQnPjxzdmcgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgMzIgMzIiIGhlaWdodD0iMzJweCIgaWQ9IkxheWVyXzEiIHZlcnNpb249IjEuMCIgdmlld0JveD0iMCAwIDMyIDMyIiB3aWR0aD0iMzJweCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PHBvbHlnb24gZmlsbD0iIzFGNjJBRSIgcG9pbnRzPSIyNy4zNzcsMjguODg5IDE2LjAwMSwzMiA0LjYyNSwyOC44ODkgMiwwIDMwLjAwMiwwICAiLz48cG9seWdvbiBmaWxsPSIjMzQ3REM2IiBwb2ludHM9IjE2LDIgMTYsMjkuNzUgMjUuMjMyLDI3LjAwOCAyNy42ODgsMiAgIi8+PHBvbHlnb24gZmlsbD0iI0ZGRkZGRiIgcG9pbnRzPSIyNC4zNjMsNiA3LjYwNyw2IDgsMTAgMTYsMTAgOC4yNSwxMi45OSA4LjYxOSwxNyAxOS41MDIsMTcgMTkuMTU4LDIxIDE2LDIxLjk5IDEyLjg2MSwyMC45ODQgICAgMTIuNTMzLDE5IDguODAzLDE5IDkuMjYyLDIzLjk4NyAxNiwyNS45OSAyMi43MjgsMjMuOTg2IDIzLjcxOSwxMi45OSAxNi4wMjYsMTIuOTkgMjQsMTAgICIvPjwvZz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" alt="" />
                <h3 className='text-center text-dark'>CSS 3</h3>
              </div>


              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <img className='skillIcon col-12' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGlkPSJMYWdlcl8xIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAxMjggMTI4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMTI4IDEyOCIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGc+PGc+PGc+PGNpcmNsZSBjeD0iNjQiIGN5PSI2NCIgcj0iNTAiIHN0eWxlPSJmaWxsOiNGMERCNEY7Ii8+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMV8xXyI+PGc+PGc+PHBhdGggZD0iTTQ4LjQsNDQuNmg4Ljd2MjQuNWMwLDExLTUuMywxNC45LTEzLjcsMTQuOWMtMi4xLDAtNC43LTAuMy02LjQtMC45bDEtNy4xICAgICAgYzEuMiwwLjQsMi44LDAuNyw0LjUsMC43YzMuNywwLDYtMS43LDYtNy42TDQ4LjQsNDQuNkw0OC40LDQ0LjZ6IiBzdHlsZT0iZmlsbDojMzIzMzMwOyIvPjxwYXRoIGQ9Ik02NC44LDc0LjRjMi4zLDEuMiw2LDIuNCw5LjcsMi40YzQsMCw2LjEtMS43LDYuMS00LjNjMC0yLjQtMS44LTMuOC02LjUtNS40ICAgICAgYy02LjQtMi4zLTEwLjctNS45LTEwLjctMTEuNkM2My40LDQ5LDY5LDQ0LDc4LjEsNDRjNC40LDAsNy42LDAuOSw5LjksMmwtMiw3Yy0xLjUtMC43LTQuMy0xLjgtOC0xLjhjLTMuOCwwLTUuNiwxLjgtNS42LDMuNyAgICAgIGMwLDIuNSwyLjEsMy42LDcuMiw1LjVjNi44LDIuNSwxMCw2LjEsMTAsMTEuNmMwLDYuNS00LjksMTItMTUuNiwxMmMtNC40LDAtOC44LTEuMi0xMS0yLjRMNjQuOCw3NC40eiIgc3R5bGU9ImZpbGw6IzMyMzMzMDsiLz48L2c+PC9nPjwvZz48L2c+PC9zdmc+" alt="" />
                <h3 className='text-center text-dark'>JavaScript</h3>
              </div>


              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <img className='skillIcon col-12' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxhZ2VyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDEyOCAxMjg7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxMjggMTI4IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiMyOTI5Mjk7fQoJLnN0MXtmaWxsOiMwMERCRkM7fQo8L3N0eWxlPjxnPjxnPjxnPjxnPjxjaXJjbGUgY2xhc3M9InN0MCIgY3g9IjY0IiBjeT0iNjQiIHI9IjUwIi8+PC9nPjwvZz48L2c+PC9nPjxnPjxjaXJjbGUgY2xhc3M9InN0MSIgY3g9IjY0IiBjeT0iNjMuOSIgcj0iNS41Ii8+PHBhdGggY2xhc3M9InN0MSIgZD0iTTkxLjYsNTguNWMtMS45LTEuNi00LjYtMy03LjgtNC4xYy0wLjYtMC4yLTEuMy0wLjQtMi0wLjZjMC4xLTAuNSwwLjItMC45LDAuMy0xLjRjMS41LTcuNCwwLjQtMTMuMi0yLjgtMTUuMSAgIGMtMS42LTAuOS0zLjgtMC45LTYuMywwYy0yLjMsMC45LTQuOSwyLjUtNy40LDQuN2MtMC41LDAuNC0xLDAuOS0xLjUsMS40Yy0wLjMtMC4zLTAuNy0wLjYtMS0wLjljLTUuNi01LTExLjItNy0xNC41LTUuMSAgIGMtMS42LDAuOS0yLjcsMi44LTMuMiw1LjVjLTAuNCwyLjQtMC4zLDUuNSwwLjQsOC44YzAuMSwwLjcsMC4zLDEuMywwLjUsMmMtMC44LDAuMi0xLjYsMC41LTIuMywwLjdjLTYuNywyLjMtMTAuNyw1LjktMTAuNyw5LjUgICBjMCwxLjksMS4xLDMuOSwzLjIsNS42YzIsMS43LDQuOCwzLjIsOCw0LjNjMC41LDAuMiwxLjEsMC40LDEuNywwLjVjLTAuMiwwLjctMC4zLDEuNS0wLjUsMi4yYy0xLjMsNi45LTAuMiwxMi4yLDIuOSwxNCAgIGMwLjgsMC41LDEuOCwwLjcsMi45LDAuN2MxLjEsMCwyLjMtMC4yLDMuNi0wLjdjMi41LTAuOSw1LjEtMi41LDcuNy00LjhjMC40LTAuNCwwLjktMC44LDEuMy0xLjJjMC42LDAuNSwxLjEsMSwxLjcsMS41ICAgYzMuOSwzLjQsNy43LDUuMiwxMC43LDUuMmMxLjEsMCwyLjEtMC4yLDIuOS0wLjdjMS42LTEsMi44LTIuOSwzLjMtNS42YzAuNS0yLjYsMC40LTUuNy0wLjMtOS4xYy0wLjEtMC41LTAuMi0xLjEtMC40LTEuNiAgIGMwLjQtMC4xLDAuOC0wLjIsMS4xLTAuNGM3LjItMi40LDExLjYtNi4yLDExLjYtMTBDOTQuNyw2Mi4xLDkzLjYsNjAuMiw5MS42LDU4LjV6IE03My45LDM5LjhjMS44LTAuNiwzLjItMC43LDQuMS0wLjIgICBjMS44LDEsMyw1LjMsMS42LDEyLjNjLTAuMSwwLjQtMC4yLDAuOC0wLjMsMS4yYy0yLjYtMC42LTUuMy0xLTguMi0xLjNjLTEuNy0yLjQtMy40LTQuNi01LjItNi41YzAuNS0wLjUsMC45LTAuOSwxLjQtMS4zICAgQzY5LjYsNDIsNzEuOSw0MC42LDczLjksMzkuOHogTTcyLjYsNjljLTEsMS43LTEuOSwzLjMtMi45LDQuN2MtMS44LDAuMS0zLjcsMC4yLTUuNiwwLjJjLTEuOSwwLTMuOC0wLjEtNS42LTAuMiAgIGMtMS0xLjUtMi4xLTMuMS0zLTQuOGMtMS0xLjYtMS44LTMuMy0yLjYtNWMwLjgtMS43LDEuNy0zLjMsMi42LTQuOWwwLDBjMS0xLjYsMi0zLjIsMy00LjhjMS44LTAuMSwzLjctMC4yLDUuNi0wLjIgICBjMS45LDAsMy44LDAuMSw1LjYsMC4yYzEsMS41LDIsMy4xLDMsNC43YzEsMS43LDEuOSwzLjMsMi43LDQuOUM3NC40LDY1LjYsNzMuNiw2Ny4zLDcyLjYsNjl6IE03Ni42LDY3YzAuOCwxLjksMS41LDMuNywyLjEsNS40ICAgYy0xLjgsMC40LTMuNywwLjctNS43LDFjMC42LTEsMS4zLTIuMSwxLjktMy4xQzc1LjUsNjkuMiw3Ni4xLDY4LjEsNzYuNiw2N3ogTTY0LjEsODAuOWMtMS4yLTEuMy0yLjUtMi44LTMuNy00LjQgICBjMS4yLDAsMi40LDAuMSwzLjYsMC4xYzEuMywwLDIuNSwwLDMuNy0wLjFDNjYuNSw3OC4xLDY1LjMsNzkuNiw2NC4xLDgwLjl6IE01NS4xLDczLjRjLTItMC4yLTMuOS0wLjUtNS43LTAuOSAgIGMwLjUtMS44LDEuMi0zLjYsMi01LjRjMC42LDEuMSwxLjEsMi4xLDEuNywzLjJDNTMuOCw3MS40LDU0LjQsNzIuNCw1NS4xLDczLjR6IE01My4yLDU3LjdjLTAuNiwxLjEtMS4yLDIuMS0xLjcsMy4yICAgYy0wLjgtMS44LTEuNC0zLjYtMi01LjNjMS44LTAuNCwzLjYtMC43LDUuNi0xQzU0LjQsNTUuNiw1My44LDU2LjcsNTMuMiw1Ny43eiBNNjQsNDcuMmMxLjIsMS4zLDIuNCwyLjgsMy42LDQuNCAgIGMtMS4yLTAuMS0yLjQtMC4xLTMuNy0wLjFjLTEuMiwwLTIuNCwwLTMuNiwwLjFDNjEuNiw1MCw2Mi44LDQ4LjUsNjQsNDcuMnogTTc0LjgsNTcuN2MtMC42LTEuMS0xLjItMi4xLTEuOS0zLjEgICBjMiwwLjIsMy44LDAuNiw1LjYsMWMtMC41LDEuNy0xLjIsMy41LTIsNS4zQzc2LjEsNTkuOSw3NS41LDU4LjgsNzQuOCw1Ny43eiBNNDguMyw1MS4yYy0wLjYtMy0wLjctNS43LTAuMy03LjggICBjMC4zLTEuOCwxLTMuMSwxLjktMy43YzEuOC0xLDYuMSwwLDExLjQsNC44YzAuMywwLjMsMC42LDAuNiwwLjksMC45Yy0xLjgsMS45LTMuNSw0LjEtNS4yLDYuNWMtMi45LDAuMy01LjcsMC43LTguMiwxLjMgICBDNDguNiw1Mi40LDQ4LjUsNTEuOCw0OC4zLDUxLjJ6IE00NS40LDcxLjRjLTYuNS0yLjItOS41LTUuNC05LjUtNy41YzAtMiwyLjgtNC45LDguOS03YzAuNy0wLjIsMS40LTAuNSwyLjEtMC43ICAgYzAuOCwyLjUsMS44LDUuMSwzLDcuOGMtMS4yLDIuNy0yLjMsNS4zLTMsNy45QzQ2LjQsNzEuNyw0NS45LDcxLjYsNDUuNCw3MS40eiBNNTEuNSw4OC43Yy0wLjcsMC0xLjItMC4xLTEuNi0wLjQgICBjLTEuNy0xLTIuOS00LjgtMS42LTExLjJjMC4xLTAuNywwLjMtMS4zLDAuNC0yYzIuNSwwLjYsNS4zLDEsOC4zLDEuMmMxLjcsMi40LDMuNSw0LjYsNS4zLDYuNWMtMC40LDAuNC0wLjgsMC43LTEuMiwxLjEgICBDNTcuMiw4Ny4zLDUzLjcsODguNyw1MS41LDg4Ljd6IE03OS44LDc2LjRjMS4zLDYuNywwLDEwLjktMS43LDExLjljLTEuNywxLTUuNiwwLjEtMTAuNS00LjJjLTAuNS0wLjQtMS0wLjktMS41LTEuNCAgIGMxLjctMS45LDMuNS00LjEsNS4yLTYuNWMzLTAuMyw1LjgtMC43LDguMy0xLjNDNzkuNiw3NS40LDc5LjcsNzUuOSw3OS44LDc2LjR6IE04Mi4zLDcxLjRjLTAuMywwLjEtMC43LDAuMi0xLDAuMyAgIGMtMC44LTIuNC0xLjgtNS4xLTMuMS03LjhjMS4yLTIuNiwyLjItNS4yLDMtNy43YzAuNiwwLjIsMS4yLDAuNCwxLjgsMC42YzIuOSwxLDUuMywyLjMsNi45LDMuNmMxLjQsMS4yLDIuMiwyLjQsMi4yLDMuNSAgIEM5Mi4xLDY2LDg5LDY5LjIsODIuMyw3MS40eiIvPjwvZz48L3N2Zz4=" alt="" />
                <h3 className='text-center text-dark'>ReactJS</h3>
              </div>

              <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiAxNDY7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgMTQ2IiB4bWw6c3BhY2U9InByZXNlcnZlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPgoJLnN0MHtmaWxsOiM4RTcxNEU7fQoJLnN0MXtmaWxsOiM0NDJEMjI7fQoJLnN0MntmaWxsOiNGRkZGRkY7fQoJLnN0M3tmaWxsOiNBNkEzODU7fQoJLnN0NHtmaWxsOiM0OTlENEE7fQoJLnN0NXtmaWxsOiM1OEFBNTA7fQo8L3N0eWxlPjxnPjxnPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00NjYuMiw2MmMtMC40LDAuMS0wLjksMS0wLjksMS42Yy0wLjEsMy41LTAuMiwxMi43LTAuMiwxOWMwLDAuMiwwLjMsMC41LDAuNSwwLjVjMS4zLDAuMSw0LjQsMC4yLDcuMSwwLjIgICAgYzMuNywwLDUuOS0wLjUsNy4xLTFjMy4xLTEuNiw0LjYtNSw0LjYtOC43YzAtOC40LTUuOS0xMS43LTE0LjctMTEuN0M0NjkuMiw2MS43LDQ2Ny41LDYxLjcsNDY2LjIsNjJMNDY2LjIsNjJMNDY2LjIsNjJ6ICAgICBNNDg4LjYsMTAwLjljMC04LjYtNi4zLTEzLjQtMTcuOC0xMy40Yy0wLjUsMC00LjItMC4xLTUsMC4xYy0wLjMsMC4xLTAuNiwwLjMtMC42LDAuNWMwLDYuMi0wLjEsMTYsMC4yLDE5LjggICAgYzAuMiwxLjcsMS40LDQsMi45LDQuN2MxLjYsMC45LDUuMSwxLDcuNiwxQzQ4Mi42LDExMy42LDQ4OC42LDEwOS44LDQ4OC42LDEwMC45TDQ4OC42LDEwMC45TDQ4OC42LDEwMC45eiBNNDQ4LjQsNTcuMiAgICBjMC45LDAsMy41LDAuMywxMC4yLDAuM2M2LjMsMCwxMS40LTAuMiwxNy42LTAuMmM3LjYsMCwxOCwyLjcsMTgsMTRjMCw1LjYtMy45LDEwLTksMTIuMmMtMC4zLDAuMS0wLjMsMC4zLDAsMC4zICAgIGM3LjMsMS44LDEzLjcsNi4zLDEzLjcsMTQuOWMwLDguMy01LjIsMTMuNy0xMi44LDE3Yy00LjYsMi0xMC4zLDIuNy0xNi4yLDIuN2MtNC40LDAtMTYuMy0wLjUtMjMtMC4zYy0wLjctMC4zLDAuNi0zLjQsMS4yLTMuOSAgICBjMS42LTAuMSwyLjgtMC4yLDQuNC0wLjdjMi4zLTAuNiwyLjYtMS4zLDMtNC45YzAuMi0zLDAuMi0xMy44LDAuMi0yMS41YzAtMTAuNSwwLjEtMTcuNywwLTIxLjFjLTAuMS0yLjctMS0zLjYtMy00LjEgICAgYy0xLjUtMC4zLTMuOS0wLjYtNS45LTAuOUM0NDYuNCw2MC41LDQ0Ny45LDU3LjUsNDQ4LjQsNTcuMkw0NDguNCw1Ny4yTDQ0OC40LDU3LjJ6IE0zOTguMywxMTEuM2MyLjEsMS43LDYuMiwyLjMsOS44LDIuMyAgICBjNC43LDAsOS40LTAuOSwxMy45LTVjNC42LTQuMiw3LjgtMTAuNiw3LjgtMjAuOWMwLTkuOC0zLjctMTcuOC0xMS40LTIyLjVjLTQuMy0yLjctOS45LTMuOC0xNi4zLTMuOGMtMS45LDAtMy43LDAuMS00LjksMC42ICAgIGMtMC4zLDAuMi0wLjksMS0wLjksMS40Yy0wLjIsMS43LTAuMiwxNS4xLTAuMiwyM2MwLDguMSwwLDE5LjQsMC4yLDIwLjdDMzk2LjQsMTA4LjQsMzk3LDExMC40LDM5OC4zLDExMS4zTDM5OC4zLDExMS4zICAgIEwzOTguMywxMTEuM3ogTTM3OC41LDU3LjJjMS43LDAsOCwwLjMsMTEsMC4zYzUuNSwwLDkuNC0wLjMsMTkuNy0wLjNjOC43LDAsMTYsMi4zLDIxLjIsNi44YzYuMyw1LjUsOS43LDEzLDkuNywyMi4zICAgIGMwLDEzLjEtNiwyMC43LTEyLDI1Yy02LDQuNC0xMy44LDctMjUsN2MtNS45LDAtMTYuMS0wLjItMjQuNS0wLjNoLTAuMWMtMC40LTAuOCwwLjctMy44LDEuNC0zLjljMi4zLTAuMywyLjktMC4zLDQtMC44ICAgIGMxLjgtMC43LDIuMi0xLjcsMi40LTQuOWMwLjMtNiwwLjItMTMuMiwwLjItMjEuNGMwLTUuOCwwLjEtMTcuMi0wLjEtMjAuOWMtMC4zLTMtMS42LTMuOC00LjItNC4zYy0xLjMtMC4zLTMtMC42LTUuNS0wLjkgICAgQzM3Ni41LDYwLjQsMzc4LjEsNTcuNywzNzguNSw1Ny4yTDM3OC41LDU3LjJMMzc4LjUsNTcuMnoiLz48cGF0aCBjbGFzcz0ic3QxIiBkPSJNMjczLjMsMTE0LjdjLTIuMi0wLjMtMy43LTAuNi01LjctMS41Yy0wLjMtMC4yLTAuNy0xLTAuNy0xLjRjLTAuMi0zLTAuMi0xMS43LTAuMi0xNy42ICAgIGMwLTQuNy0wLjgtOC44LTIuOC0xMS43Yy0yLjMtMy4zLTUuNy01LjItMTAuMS01LjJjLTMuOCwwLTksMi42LTEzLjIsNi4zYy0wLjEsMC4xLTAuOCwwLjctMC43LTAuM2MwLTEsMC4yLTIuOSwwLjMtNC4yICAgIGMwLjEtMS4yLTAuNi0xLjgtMC42LTEuOGMtMi44LDEuNC0xMC42LDMuMi0xMy41LDMuNWMtMi4xLDAuNC0yLjYsMi40LTAuNCwzLjFoMC4xYzIuMywwLjcsMy45LDEuNSw1LjEsMi4zICAgIGMwLjksMC43LDAuOCwxLjcsMC44LDIuNGMwLjEsNi41LDAuMSwxNi41LTAuMiwyMmMtMC4xLDIuMi0wLjcsMy0yLjMsMy4zbDAuMi0wLjFjLTEuMiwwLjMtMi4yLDAuNS0zLjcsMC43ICAgIGMtMC41LDAuNS0wLjUsMy4zLDAsMy45YzEsMCw2LTAuMywxMC4yLTAuM2M1LjcsMCw4LjcsMC4zLDEwLjIsMC4zYzAuNi0wLjcsMC44LTMuMywwLjQtMy45Yy0xLjctMC4xLTIuOS0wLjMtNC0wLjYgICAgYy0xLjYtMC4zLTItMS4xLTIuMS0zYy0wLjItNC42LTAuMi0xNC4zLTAuMi0yMWMwLTEuOCwwLjUtMi43LDEtMy4yYzItMS43LDUuMi0zLDguMS0zYzIuOCwwLDQuNiwwLjksNiwyICAgIGMxLjksMS42LDIuNSwzLjgsMi44LDUuNWMwLjQsMy43LDAuMywxMS4xLDAuMywxNy42YzAsMy41LTAuMyw0LjMtMS42LDQuOGMtMC42LDAuMy0yLjIsMC42LTQsMC44Yy0wLjYsMC42LTAuNCwzLjMsMCwzLjkgICAgYzIuNSwwLDUuNS0wLjMsOS44LTAuM2M1LjQsMCw4LjksMC4zLDEwLjMsMC4zQzI3My41LDExNy45LDI3My43LDExNS40LDI3My4zLDExNC43TDI3My4zLDExNC43TDI3My4zLDExNC43eiBNMjk3LjQsODEuNSAgICBjLTQuNiwwLTcuNSwzLjYtNy41LDkuMWMwLDUuNywyLjUsMTIuMiw5LjcsMTIuMmMxLjIsMCwzLjUtMC41LDQuNS0xLjdjMS43LTEuNiwyLjgtNC43LDIuOC04QzMwNi45LDg1LjgsMzAzLjMsODEuNSwyOTcuNCw4MS41ICAgIEwyOTcuNCw4MS41TDI5Ny40LDgxLjV6IE0yOTYuOCwxMTkuOWMtMS43LDAtMywwLjUtMy43LDFjLTMuNywyLjMtNS4zLDQuNi01LjMsNy4zYzAsMi41LDEsNC41LDMsNi4zYzIuNSwyLjIsNiwzLjIsMTAuNCwzLjIgICAgYzguOSwwLDEyLjgtNC44LDEyLjgtOS41YzAtMy4zLTEuNy01LjUtNS02LjdDMzA2LjUsMTIwLjQsMzAyLjEsMTE5LjksMjk2LjgsMTE5LjlMMjk2LjgsMTE5LjlMMjk2LjgsMTE5Ljl6IE0yOTcuNCwxNDIuNSAgICBjLTUuMywwLTkuMS0xLjEtMTIuNC0zLjdjLTMuMi0yLjQtNC42LTYuMS00LjYtOC42YzAtMC43LDAuMi0yLjYsMS43LTQuM2MxLTEsMy0zLDgtNi40YzAuMi0wLjEsMC4zLTAuMiwwLjMtMC4zICAgIGMwLTAuMi0wLjItMC4zLTAuMy0wLjRjLTQuMS0xLjYtNS4zLTQuMS01LjctNS41VjExM2MtMC4xLTAuNS0wLjMtMSwwLjUtMS42YzAuNi0wLjQsMS41LTEsMi40LTEuNmMxLjUtMC45LDMtMS44LDQtMi42ICAgIGMwLjItMC4yLDAuMi0wLjMsMC4yLTAuNXMtMC4yLTAuMy0wLjMtMC40Yy02LjEtMi05LjEtNi41LTkuMS0xMy4zYzAtNC40LDItOC40LDUuNi0xMWMyLjQtMS45LDguNS00LjMsMTIuNS00LjNoMC4zICAgIGM0LjEsMC4xLDYuMywxLDkuNiwyLjFjMS43LDAuNiwzLjQsMC45LDUuNywwLjljMy40LDAsNC45LTEsNi4xLTIuM2MwLjEsMC4yLDAuMywwLjYsMC4zLDEuN2MwLjEsMS4xLTAuMywyLjgtMS4xLDQgICAgYy0wLjcsMS0yLjMsMS43LTMuOCwxLjdoLTAuNGMtMS42LTAuMi0yLjMtMC4zLTIuMy0wLjNsLTAuMywwLjJjLTAuMSwwLjIsMCwwLjMsMC4xLDAuNmwwLjEsMC4yYzAuMiwwLjgsMC41LDMuMSwwLjUsMy43ICAgIGMwLDcuMS0yLjksMTAuMy01LjksMTIuNmMtMywyLjItNi4zLDMuNi0xMC4yLDMuOWMtMC4xLDAtMC40LDAtMS4yLDAuMWMtMC40LDAtMSwwLjEtMS4xLDAuMWgtMC4xYy0wLjcsMC4yLTIuNCwxLTIuNCwyLjUgICAgYzAsMS4zLDAuOCwyLjksNC41LDMuMWMwLjgsMC4xLDEuNiwwLjEsMi40LDAuMmM1LDAuMywxMS4xLDAuOCwxNCwxLjdjNCwxLjUsNi41LDUsNi41LDkuM2MwLDYuNC00LjYsMTIuNC0xMi4zLDE2LjIgICAgQzMwNS4yLDE0MS42LDMwMS41LDE0Mi41LDI5Ny40LDE0Mi41TDI5Ny40LDE0Mi41TDI5Ny40LDE0Mi41eiBNMzQ3LDgxLjljLTEuOCwwLTMuNSwwLjQtNC43LDEuM2MtMy40LDIuMS01LjEsNi4zLTUuMSwxMi4zICAgIGMwLDExLjQsNS43LDE5LjQsMTMuOSwxOS40YzIuNCwwLDQuMy0wLjcsNi0yLjFjMi41LTIuMSwzLjgtNi4zLDMuOC0xMi4xQzM2MC45LDg5LjUsMzU1LjIsODEuOSwzNDcsODEuOUwzNDcsODEuOUwzNDcsODEuOXogICAgIE0zNDguNSwxMTkuMWMtMTQuOCwwLTIwLjEtMTAuOS0yMC4xLTIxYzAtNy4xLDIuOS0xMi42LDguNi0xNi41YzQuMS0yLjUsOS0zLjksMTMuMy0zLjljMTEuMywwLDE5LjIsOC4xLDE5LjIsMTkuNyAgICBjMCw3LjktMy4xLDE0LjItOS4xLDE4QzM1Ny42LDExNy4zLDM1Mi42LDExOS4xLDM0OC41LDExOS4xTDM0OC41LDExOS4xTDM0OC41LDExOS4xeiBNMTkzLjYsODEuOWMtMS44LDAtMy41LDAuNC00LjcsMS4zICAgIGMtMy40LDIuMS01LjEsNi4zLTUuMSwxMi4zYzAsMTEuNCw1LjcsMTkuNCwxMy45LDE5LjRjMi40LDAsNC4zLTAuNyw2LTIuMWMyLjUtMi4xLDMuOC02LjMsMy44LTEyLjEgICAgQzIwNy41LDg5LjUsMjAxLjksODEuOSwxOTMuNiw4MS45TDE5My42LDgxLjlMMTkzLjYsODEuOXogTTE5NS4yLDExOS4xYy0xNC44LDAtMjAuMS0xMC45LTIwLjEtMjFjMC03LjEsMi45LTEyLjYsOC42LTE2LjUgICAgYzQuMS0yLjUsOS0zLjksMTMuMy0zLjljMTEuMywwLDE5LjIsOC4xLDE5LjIsMTkuN2MwLDcuOS0zLjEsMTQuMi05LjEsMThDMjA0LjMsMTE3LjMsMTk5LjMsMTE5LjEsMTk1LjIsMTE5LjFMMTk1LjIsMTE5LjEgICAgTDE5NS4yLDExOS4xeiBNOTUuOCwxMTguMmMtMC4yLTAuMy0wLjMtMS0wLjMtMmMwLTAuNywwLjItMS4xLDAuMy0xLjNjMS44LTAuMywyLjgtMC41LDMuOC0wLjhjMS43LTAuNCwyLjQtMS40LDIuNS0zLjYgICAgYzAuMy01LjIsMC4zLTE1LjEsMC4yLTIydi0wLjJjMC0wLjgsMC0xLjctMS0yLjRjLTEuNC0wLjktMy0xLjctNS4yLTIuM2MtMC44LTAuMy0xLjMtMC43LTEuMi0xLjJjMC0wLjUsMC41LTEuMSwxLjctMS4zICAgIGMyLjktMC4zLDEwLjMtMi4xLDEzLjMtMy40YzAuMiwwLjIsMC40LDAuNywwLjQsMS40bC0wLjEsMWMtMC4xLDEtMC4yLDIuMS0wLjIsMy4yYzAsMC4zLDAuMywwLjYsMC43LDAuNmMwLjIsMCwwLjMtMC4xLDAuNS0wLjIgICAgYzUuNi00LjMsMTAuNi01LjksMTMuMi01LjljNC4zLDAsNy42LDIsMTAuMSw2LjJjMC4yLDAuMywwLjMsMC4zLDAuNiwwLjNjMC4yLDAsMC40LTAuMSwwLjUtMC4zYzUuMS0zLjksMTAuMy02LjMsMTMuNy02LjMgICAgYzguMSwwLDEyLjksNiwxMi45LDE2LjJjMCwyLjksMCw2LjYtMC4xLDEwYzAsMy0wLjEsNS44LTAuMSw3LjhjMCwwLjQsMC42LDEuOCwxLjYsMi4xYzEuMiwwLjYsMi45LDAuOSw1LDEuMmgwLjEgICAgYzAuMiwwLjYtMC4yLDIuOS0wLjUsMy4zYy0wLjUsMC0xLjMsMC0yLjItMC4xYy0xLjctMC4xLTQtMC4yLTYuNi0wLjJjLTUuNCwwLTguMiwwLjEtMTAuOSwwLjNjLTAuMi0wLjctMC4zLTIuOCwwLTMuMyAgICBjMS42LTAuMywyLjMtMC41LDMuMy0wLjhjMS43LTAuNSwyLjItMS4zLDIuMy0zLjZjMC0xLjcsMC4zLTE1LjctMC4yLTE5LjFjLTAuNS0zLjUtMy4xLTcuNi04LjktNy42Yy0yLjIsMC01LjYsMC45LTguOSwzLjQgICAgYy0wLjIsMC4yLTAuMywwLjYtMC4zLDAuOXYwLjFjMC4zLDEuOCwwLjMsMy45LDAuMyw3LjF2NS43YzAsMy45LTAuMSw3LjYsMCwxMC4zYzAsMS45LDEuMSwyLjMsMi4xLDIuN2MwLjUsMC4xLDAuOSwwLjIsMS4zLDAuMyAgICBjMC44LDAuMiwxLjYsMC4zLDIuOCwwLjZjMC4yLDAuMywwLjIsMS41LTAuMSwyLjRjLTAuMSwwLjUtMC4zLDAuOC0wLjMsMC45Yy0zLTAuMS02LTAuMi0xMC40LTAuMmMtMS4zLDAtMy42LDAuMS01LjUsMC4xICAgIGMtMS42LDAtMywwLjEtMy45LDAuMWMtMC4xLTAuMi0wLjMtMC44LTAuMy0xLjdjMC0wLjgsMC4yLTEuNCwwLjMtMS42YzAuNC0wLjEsMC44LTAuMiwxLjItMC4yYzEtMC4yLDEuOS0wLjMsMi44LTAuNSAgICBjMS41LTAuNCwyLTEuMiwyLjEtMy4xYzAuMy00LjMsMC41LTE2LjgtMC4xLTE5LjljLTEtNS0zLjktNy42LTguNS03LjZjLTIuNywwLTYuMSwxLjMtOC45LDMuNGMtMC40LDAuMy0wLjgsMS4yLTAuOCwydjUuMSAgICBjMCw2LjMsMCwxNC4xLDAuMSwxNy41YzAuMSwxLDAuNCwyLjMsMi40LDIuN2MwLjQsMC4xLDEuMSwwLjMsMiwwLjNsMS42LDAuM2MwLjIsMC41LDAuMSwyLjYtMC4zLDMuM2MtMC45LDAtMS45LTAuMS0zLjEtMC4xICAgIGMtMS44LTAuMS00LjItMC4yLTYuOC0wLjJjLTMsMC01LjIsMC4xLTcsMC4yQzk3LjgsMTE4LjIsOTYuOCwxMTguMiw5NS44LDExOC4yTDk1LjgsMTE4LjJMOTUuOCwxMTguMnoiLz48Zz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNTAsMTM5LjFsLTMuNi0xLjJjMCwwLDAuNC0xOC4yLTYuMS0xOS41Yy00LjMtNSwwLjctMjEzLjksMTYuMy0wLjdjMCwwLTUuNCwyLjctNi4zLDcuMyAgICAgQzQ5LjMsMTI5LjUsNTAsMTM5LjEsNTAsMTM5LjFMNTAsMTM5LjFMNTAsMTM5LjF6Ii8+PHBhdGggY2xhc3M9InN0MyIgZD0iTTUwLDEzOS4xbC0zLjYtMS4yYzAsMCwwLjQtMTguMi02LjEtMTkuNWMtNC4zLTUsMC43LTIxMy45LDE2LjMtMC43YzAsMC01LjQsMi43LTYuMyw3LjMgICAgIEM0OS4zLDEyOS41LDUwLDEzOS4xLDUwLDEzOS4xTDUwLDEzOS4xTDUwLDEzOS4xeiIvPjxwYXRoIGNsYXNzPSJzdDIiIGQ9Ik01MS45LDEyMS41YzAsMCwzMS4yLTIwLjUsMjMuOS02My4yYy03LTMxLTIzLjctNDEuMi0yNS41LTQ1LjFjLTItMi44LTMuOS03LjctMy45LTcuN2wxLjMsODYuMyAgICAgQzQ3LjgsOTIsNDUuMSwxMTguMyw1MS45LDEyMS41Ii8+PHBhdGggY2xhc3M9InN0NCIgZD0iTTUxLjksMTIxLjVjMCwwLDMxLjItMjAuNSwyMy45LTYzLjJjLTctMzEtMjMuNy00MS4yLTI1LjUtNDUuMWMtMi0yLjgtMy45LTcuNy0zLjktNy43bDEuMyw4Ni4zICAgICBDNDcuOCw5Miw0NS4xLDExOC4zLDUxLjksMTIxLjUiLz48cGF0aCBjbGFzcz0ic3QyIiBkPSJNNDQuNiwxMjIuN2MwLDAtMjkuMy0yMC0yNy42LTU1LjJjMS43LTM1LjIsMjIuMy01Mi41LDI2LjMtNTUuN0M0Niw5LDQ2LjEsOCw0Ni4zLDUuMiAgICAgYzEuOCwzLjksMS41LDU4LjUsMS43LDY1QzQ4LjgsOTQuOSw0Ni42LDExOCw0NC42LDEyMi43TDQ0LjYsMTIyLjdMNDQuNiwxMjIuN3oiLz48cGF0aCBjbGFzcz0ic3Q1IiBkPSJNNDQuNiwxMjIuN2MwLDAtMjkuMy0yMC0yNy42LTU1LjJjMS43LTM1LjIsMjIuMy01Mi41LDI2LjMtNTUuN0M0Niw5LDQ2LjEsOCw0Ni4zLDUuMiAgICAgYzEuOCwzLjksMS41LDU4LjUsMS43LDY1QzQ4LjgsOTQuOSw0Ni42LDExOCw0NC42LDEyMi43TDQ0LjYsMTIyLjdMNDQuNiwxMjIuN3oiLz48L2c+PC9nPjwvZz48L3N2Zz4=" alt="" />




              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <img className='skillIcon col-12' src="iconfinder-icon.svg" alt="" />
                <h3 className='text-center text-dark'>Node.js</h3>
              </div>




              <div className='col-lg-2 col-sm-5 col-6 hvr-bob'>
                <svg width="" height="100" viewBox="0 0 16 16" class="col-12 bi bi-bootstrap-fill hvr-bob" fill="#7952b3" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062V12zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
                </svg>
                <h3 className='text-center text-dark'>Bootstrap</h3>
              </div>



              <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="iconfinder-icon.svg" alt="" />

            </div>


          </div>

          <div className="my-4">
            <h3 className='text-center my-5'>Digital Media Skills</h3>

            <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDMyXzNfeDJDX19QaG90b3Nob3BfeDJDX19BZG9iZSI+PGc+PHJlY3QgaGVpZ2h0PSI1MTAuNTc4IiBzdHlsZT0iZmlsbDojNEZDN0VDOyIgd2lkdGg9IjUxMC41NzYiIHg9IjEuMjA3IiB5PSIwLjcxMSIvPjxyZWN0IGhlaWdodD0iNDY1LjY0NiIgc3R5bGU9ImZpbGw6IzI0MjIzODsiIHdpZHRoPSI0NjUuNjQ2IiB4PSIyMy42NjkiIHk9IjIzLjE3OSIvPjxnPjxnPjxnPjxnIGlkPSJYTUxJRF8yMzlfIj48Zz48cGF0aCBkPSJNMTI1LjM4OSwxMjQuMDUxYzAtMS43NiwwLjMwMi0yLjQ1OSwxLjgxMS0yLjQ1OSAgICAgICAgIGMxMS40OC0wLjM1NCwzNC4xNDQtMC43MDMsNTcuMTA1LTAuNzAzYzU5LjIxNSwwLDgxLjgwMiwzNC40NTQsODIuMTA0LDc1LjIwNWMwLDU1Ljg0OC00MS42MjMsNzcuMDI0LTg2LjAzMyw3Ny4wMjQgICAgICAgICBjLTguNDU5LDAtMTYuNjE2LDAtMTguNzM0LDB2NzkuNzk1YzAsMi4xMDgtMC42MDEsMi44MTMtMi4xMTQsMi44MTNoLTMyLjAyNmMtMS41MDksMC0yLjExNC0wLjcwNC0yLjExNC0yLjQ1OVYxMjQuMDUxeiAgICAgICAgICBNMTYxLjY0MywyMzkuMDQ3YzIuNDIsMC4zNSw2Ljk1LDAuNjk5LDE5LjY0MiwwLjY5OWMyMy44NjQsMCw0Ni44MjYtNi44MDEsNDYuODI2LTQxLjkyOSAgICAgICAgIGMwLTI4LjEwMi0xNS40MDYtNDIuNTM2LTQzLjgwNS00Mi41MzZjLTExLjc4MywwLTIwLjI0MywwLjM1LTIyLjY2MywwLjcwNFYyMzkuMDQ3eiIgaWQ9IlhNTElEXzI0MF8iIHN0eWxlPSJmaWxsOiM0RkM3RUM7Ii8+PC9nPjwvZz48ZyBpZD0iWE1MSURfMjM2XyI+PGc+PHBhdGggZD0iTTM0MS44MTksMjEyLjc5MWMtMTQuNTQ5LDAtMTguNDA1LDkuMDk5LTE4LjQwNSwxNS43NzMgICAgICAgICBjMCw4LjQzMywzLjg1NiwxMi45OTcsMjYuMTIzLDIzLjUzN2MzMC41NzcsMTQuNzUzLDQzLjY0LDI3Ljc1Miw0My42NCw1My4wNGMwLDM1LjEyOS0yMi44NTksNTUuMTE1LTU1LjUxNyw1NS4xMTUgICAgICAgICBjLTE1LjczMywwLTM1LjU4NS0xLjUtNDguMDU0LTEwLjYzMmMtMS4xODgtMC43MDQtMS43ODItMS43NTYtMS43ODItMy41MTZ2LTMyLjMxNmMwLTEuNzU2LDEuMTg5LTIuNDU5LDIuMDgtMS43NTYgICAgICAgICBjMTUuNDM2LDExLjU5MiwzMi42NTIsMTQuODg2LDQ4LjA4OCwxNC44ODZjMTMuNjU4LDAsMTguNDA2LTkuMTAzLDE4LjQwNi0xNi44MjljMC05LjEzMy0zLjI5OS0xNC40MDQtMjQuNjc1LTI0LjU5ICAgICAgICAgYy0zMC41NzctMTQuNzU0LTQzLjMwNi0yNy40MzItNDMuMzA2LTUzLjA3NGMwLTI4LjQ1NSwyMS4zMzctNTEuOTU4LDU2LjM2OC01MS45NThjMTguMTA3LDAsMzAuODcxLDAuNDg1LDM5LjE4Niw2LjEwMiAgICAgICAgIGMxLjQ4MiwxLjQwNiwxLjc4MSwyLjQ1OSwxLjc4MSw0LjU2OHYyOC44MDRjMCwyLjEwNS0xLjE4OCwzLjE2My0yLjY3MiwyLjEwNSAgICAgICAgIEMzNzIuMzkzLDIxNS4wMjgsMzU3LjI1NSwyMTIuNzkxLDM0MS44MTksMjEyLjc5MXoiIGlkPSJYTUxJRF8yMzdfIiBzdHlsZT0iZmlsbDojNEZDN0VDOyIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==" alt="" />

            <img className='skillIcon col-lg-2 col-sm-5 col-6 hvr-bob' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGhlaWdodD0iNTEycHgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIGlkPSJfeDM4X194MkNfX1ByZW1pZXJfUHJvX3gyQ19fQWRvYmUiPjxnPjxyZWN0IGhlaWdodD0iNTEwLjU3OCIgc3R5bGU9ImZpbGw6I0VBNzdGRjsiIHdpZHRoPSI1MTAuNTc2IiB4PSIxLjIwNyIgeT0iMC43MTEiLz48cmVjdCBoZWlnaHQ9IjQ2NS42NDYiIHN0eWxlPSJmaWxsOiMyQTAwMzQ7IiB3aWR0aD0iNDY1LjY0NiIgeD0iMjMuNjY5IiB5PSIyMy4xNzkiLz48Zz48Zz48Zz48ZyBpZD0iWE1MSURfMjY5XyI+PGc+PHBhdGggZD0iTTEzNC41ODEsMTI1LjA3YzAtMS43NTYsMC4zMDMtMi40NiwxLjgxMi0yLjQ2ICAgICAgICAgYzExLjQ4LTAuMzQ5LDM0LjE0Mi0wLjcwMyw1Ny4xMDMtMC43MDNjNTkuMjE2LDAsODEuODA1LDM0LjQ1NSw4Mi4xMDMsNzUuMjA1YzAsNTUuODUzLTQxLjYyLDc3LjAyNC04Ni4wMzIsNzcuMDI0ICAgICAgICAgYy04LjQ1NywwLTE2LjYxNiwwLTE4LjczMSwwdjc5LjhjMCwyLjEwNS0wLjYwNSwyLjgwOS0yLjExNCwyLjgwOWgtMzIuMDI2Yy0xLjUxMSwwLTIuMTE0LTAuNzAzLTIuMTE0LTIuNDU5VjEyNS4wN3ogICAgICAgICAgTTE3MC44MzUsMjQwLjA2NWMyLjQxNiwwLjM1NCw2Ljk0OCwwLjcwNCwxOS42NCwwLjcwNGMyMy44NjcsMCw0Ni44MjktNi44MDcsNDYuODI5LTQxLjkzNSAgICAgICAgIGMwLTI4LjEwMi0xNS40MS00Mi41MzUtNDMuODA4LTQyLjUzNWMtMTEuNzgzLDAtMjAuMjQ1LDAuMzU0LTIyLjY2MSwwLjcwM1YyNDAuMDY1eiIgaWQ9IlhNTElEXzI3MF8iIHN0eWxlPSJmaWxsOiNFQTc3RkY7Ii8+PC9nPjwvZz48ZyBpZD0iWE1MSURfMjY1XyI+PGc+PHBhdGggZD0iTTM4Mi43OTksMTc5Ljk3MmMxLjI2Mi0wLjA2OCwyLjg0OCwwLDQuMTEzLDAuMzU0ICAgICAgICAgYzEuNTg2LDAuMzUsMS45LDAuNzA0LDEuOSwzLjUxMnYzMC40NjZjMCwxLjc1Ni0wLjYzNCwyLjQ1OS0yLjUzMSwyLjQ1OWMtMTguMDQ0LTAuNzAzLTI2LjU3Mi0xLjI3LTM5LjQ1OCw0LjAwNnYxMzIuMTQ2ICAgICAgICAgYzAsMi4xMDgtMC42MzUsMi44MDktMi41MzIsMi44MDloLTMzLjIyOGMtMS45MDEsMC0yLjUzNS0wLjctMi41MzUtMi44MDl2LTExOC4zOGMwLTE1LjQ1Ny0wLjYzNS0yNy4xMjUtMS41ODItMzguNzE2ICAgICAgICAgYy0wLjMxNC0xLjQwNywwLjMxNi0yLjExMSwxLjkwMS0yLjExMUMzMDguODQ4LDE5My43MDcsMzM5LjQ1NCwxODIuMzA3LDM4Mi43OTksMTc5Ljk3MnoiIGlkPSJYTUxJRF8yNjdfIiBzdHlsZT0iZmlsbDojRUE3N0ZGOyIvPjwvZz48L2c+PC9nPjwvZz48L2c+PC9nPjwvZz48ZyBpZD0iTGF5ZXJfMSIvPjwvc3ZnPg==" alt="" />

          </div>









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
