import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
 import NavMenu from "./components/NavMenu";
  import Navbar from "./components/Navbar/Navbar";
// import SideBar  from "./components/Sidebar";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Services} from "./pages/Services";
import { Contact } from "./pages/Contact";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Profile } from "./pages/Profile";


function App() {
  return (
    <>
      <Router>
     
          <NavMenu />  
         
        {/* <SideBar/>  */}

        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/services" component={Services} />
            <Route path="/contact" component={Contact} />
            <Route path="/signUp" component={SignUp} />
            <Route path="/signIn" component={SignIn} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;





// // import React from 'react';


// // import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// // import 'bootstrap/dist/css/bootstrap.min.css';
 
// // import './App.css';



// // import { Navbar, Container, Nav,NavDropdown 
// // } from 'react-bootstrap';




// // import Home from './pages/Home';
// // import About from './pages/About';
// // import Skills from './pages/Skills';
// // import Services from './pages/Services';
// // import Works from './pages/Works';
// // import Contacts from './pages/Contacts';
// // import SignUp from './pages/SignUp';


// // function App() {
// //   return (
   
// //   <div className = "App">
// // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// //   <Container>
// //   <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
// //   <Navbar.Toggle aria-controls="responsive-navbar-nav" />
// //   <Navbar.Collapse id="responsive-navbar-nav">
// //     <Nav className="me-auto">
// //     <Nav.Link href = '/'>Home</Nav.Link>
// //           <Nav.Link to = '/About'>About</Nav.Link>
// //           <Nav.Link href = '/Skills'>Skills</Nav.Link>
// //           <Nav.Link href = '/Services'>Services</Nav.Link>
// //           <Nav.Link href = '/Works'>Works</Nav.Link>
// //           <Nav.Link href = '/Contacts'>Contacts</Nav.Link>
         
// //               <Nav.Link href='/SignUp'>Sign Up</Nav.Link>
// //               <Nav.Link href='/SignIn'>Sign In</Nav.Link>
// //     </Nav>
// //   </Navbar.Collapse>
// //   </Container>
// // </Navbar>


// //     <Router>
      
// //      <Switch>
// //           <Route exact path='/' component={Home} />
// //           <Route path='/about' component={About} />
// //           <Route path='/Skills' component={Skills} />
// //           <Route path='/Services' component={Services} />
// //           <Route path='/Works' component={Works} />
// //           <Route path='/Contacts' component={Contacts} />
// //           <Route path='/Signup' component={SignUp} />
// //      </Switch>
// //   </Router> 
// //    </div>
// //   );
// // }
// //     /* <Route path='/' exact component={Home} />
// //          <Route path ='/about' component={About} />
// //          <Route path='/Skills' component={Skills} />
// //        <Route path='/Services' component={Services} />
// //         <Route path='/Works' component={Works} />
// //       <Route path='/Contacts' component={Contacts} />
// //         <Route path='/Signup' component={SignUp} />
// //      </Switch>
// //      </Router> */
// // export default App;
// // // import React from "react";
// // // import './App.css';
// // // import Navbar from "./components/Navbar";
// // // import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// // // import Home from './pages';
// // // import About from './pages/About';
// // // import Contact from './pages/Contact';
// // // import SignUp from './pages/SignUp';
// // // import SignIn from './pages/SignIn';

// // // function App() {
// // //   return (
// // //     <Router>
// // //        <Navbar /> 
// // //       <Switch>
// // //         <Route path="/" exact component={Home} />
// // //         {/* <Route path="/about" component={About} />
// // //         <Route path="/contact" component={Contact} />
// // //         <Route path="/signin" component={SignIn} />
// // //         <Route path="/sign-up" component={SignUp} /> */}
// // //       </Switch>
// // //     </Router>
// // //   );
// // // }

