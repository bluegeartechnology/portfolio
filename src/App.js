import logo from './logo.svg';
import './App.css';
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "animate.css"
import "hover.css"
import Home from './Home'
import Tomatokei from './projects/Tomatokei'

import ScrollToTop from './ScrollToTop'

import { useEffect } from 'react'




function App() {


  return (
    <div className="App">



      <Router>


        <nav id='navbar' className='bg-light'>

          <div className="row-col d-flex justify-content-around ">
            <HashLink to="/#home" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Home</HashLink>
            <HashLink to="/#about" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>About</HashLink>
            <HashLink to="/#portfolio" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Portfolio</HashLink>
            <HashLink to="/#skills" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Skills</HashLink>
            <HashLink to="/#contact" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Contact</HashLink>

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
