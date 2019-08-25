import React from 'react';
import logo from './logo.svg';
import About from './About';
import Navigation from './Navigation';
import Services from './Services';
import Home from './Home';
import './App.css';
import ShowChart from './ShowChart';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import {Row,Col} from 'reactstrap';
import Contact from './contacts';
import SignUp from './SignUp';
import {Switch ,Route,HashRouter as Router}  from 'react-router-dom';

function App() {
  return (
    <Router >
    <Navigation />

    <Route path='/' exact component={Home}/>
   <Route path='/about' component={About}/>
    <Route path='/services' component={Services}/>
    <Route path='/ourWorks' component={Contact}/>
    <Route path='/signup' component={SignUp}/>
    
   
    <footer className="footer">
    
    <div className="footer-bar">
    <Row>
    <Col>
    <div class="SocialMedia">

    <h2> <a href="tel:01-549074"><i class="material-icons" >local_phone</i> Contact: 01-549074</a></h2>
    <h2> <a href="mailto:xyz@abc.com"><i class="material-icons" >email</i>email: xyz@abc.com</a></h2>
  </div>
    </Col>
    <Col>
    <div class="SocialMedia">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-instagram"></a>
    </div>
    </Col>
    </Row>
        <MessengerCustomerChat
    pageId="173630249340239"
    />
    
    </div>

    </footer>
    </Router>

  );
}

export default App;
