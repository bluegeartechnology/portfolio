import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import "animate.css"
import "hover.css"
import Home from './Home'
import Tomatokei from './projects/Tomatokei'

function App() {
  return (
    <div className="App">



      <Router>

        <nav id='navbar' className='bg-light'>

          <div className="row-col d-flex justify-content-around ">
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="/#home">Home</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="/#about">About</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="/#portfolio">Portfolio</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="/#skills">Skills</a>
            <a className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} href="/#contact">Contact</a>

          </div>
        </nav>


        <div className="d-hidden" id="home"></div>

        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/tomatokei' component={Tomatokei} />
          <Route path='/projects' component={Tomatokei} />
        </Switch>
      </Router>






      <div id="footer" className='bg-light p-2'>
        <h6 className='text-dark m-0 text-center'>© 2020 BlueGearTechnology</h6>
      </div>




    </div>
  );
}

export default App;
