import logo from './logo.svg';
import './App.css';
import { useLocation, BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import "animate.css"
import "hover.css"
import Home from './pages/Home'
import About from './pages/About'

import Portfolio from './pages/Portfolio';
import Tomatokei from './pages/projects/Tomatokei'
import JYST from './pages/projects/JYST'
import PortfolioSite from './pages/projects/PortfolioSite'
import BarBelle from './pages/projects/BarBelle'

import Skills from './pages/Skills';
import Contact from './pages/Contact';

import ScrollToTop from './ScrollToTop'

import { useEffect } from 'react'


function App() {


  return (
    <div className="App">



      <Router>

        <ScrollToTop />

        <nav id='navbar' className='bg-light'>

          <div className="row-col d-flex justify-content-around py-1">
            <HashLink to="/" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Home</HashLink>
            <HashLink to="/about" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>About</HashLink>
            <HashLink to="/portfolio" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Portfolio</HashLink>
            <HashLink to="/skills" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`}>Skills</HashLink>
            <HashLink to="/contact" className={`App-link btn btn-light ${window.innerWidth < 360 ? 'px-0' : ''}`} >Contact</HashLink>
          </div>
        </nav>


        <div className="d-hidden" id="home"></div>

        <Switch>
          <Route exact path='/' component={Home} />

          <Route path='/about' component={About} />

          <Route path='/portfolio' component={Portfolio} />
          <Route path='/tomatokei' component={Tomatokei} />
          <Route path='/JYST' component={JYST} />
          <Route path='/PortfolioSite' component={PortfolioSite} />
          <Route path='/BarBelle' component={BarBelle} />

          <Route path='/skills' component={Skills} />
          <Route path='/contact' component={Contact} />


        </Switch>
      </Router>






      <div id="footer" className='bg-light p-2 border'>
        <h6 className='text-dark m-0 text-center'>{`© ${new Date().getFullYear()} BlueGearTechnology`}</h6>
      </div>




    </div>
  );
}

export default App;
