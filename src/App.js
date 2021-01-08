import React from 'react';
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <Router>
    <div className="app">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="app__sidebar">
              <Sidebar />
            </div>
          </div>
          <div className="col-lg-9 app__main-content">
            <Navbar/>
            <Route exact path="/">
              <About />
            </Route>
            <Route path="/Resume">
              <Resume />
            </Route>
            <Route path="/Projects">
              <Projects />
            </Route>
            <Route path="/Contact">
              <Contact />
            </Route>
      </div>
        </div>
      </div>
    </div>
    </Router>
  );
}

export default App;
