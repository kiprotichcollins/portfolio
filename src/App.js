import React from 'react';
import HomePage from './HomePage/components/index'
import {BrowserRouter as Router,  Route,} from 'react-router-dom';
import NavbarPage from './Common/navbarpage'
import ProjectsPage from './Projects/index'
import Footer from './Common/footer'

function App() {
  return (
    
    <Router>
    <div>
          <NavbarPage></NavbarPage>
    </div>
      <Route exact path='/' component={HomePage}></Route>
      <Route exact path='/projects' component={ProjectsPage}></Route>
      <div>
      <Footer></Footer>
      </div>
  </Router>
  );
}

export default App;
