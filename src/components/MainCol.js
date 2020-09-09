import React from "react";
import {Col, Card, CardHeader,CardBody, CardText} from "reactstrap";
import BudgetTracker from "./img/BudgetTracker.jpg";
import Lyngua from "./img/Lyngua.jpg";
const MainCol = () => {
  return (
  <Col md={8} xs={12}>
    <Card>
      <CardHeader>
        Budget Tracker
      </CardHeader>
      <CardBody>
        <img src={BudgetTracker} id="budgettracker" alt="budget tracker app"/>
      </CardBody>
      <CardText>
        <span>Summary: A budget-tracking progressive web application </span>
        <span>Technologies Used: </span>
        <ul>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>IndexedDB</li>
        </ul>
        <a href="https://github.com/akarpisz/budget-trackerPWA">Github</a>
        <br/>
        
        
      </CardText>
    </Card>
    <br/>
    <Card>
      <CardHeader>
        Lyngua
      </CardHeader>
      <CardBody>
        <img src={Lyngua} alt="Coming Soon"/>
      </CardBody>
      <CardText>
        <span>Summary: An MERN-Stack Application allowing users to translate text, save translations, and share translations with other users </span>
        <span></span>
        <span>Technologies Used: </span>
        <ul>
          <li>NodeJS</li>
          <li>ReactJS</li>
          <li>ExpressJS</li>
          <li>MongoDB/Mongoose</li>
          <li>Azure Translator API</li>
          <li>Reactstrap, React-Icons</li>
  
        </ul>
        <a href="https://github.com/akarpisz/lyngua">Github</a>
        <br/>
        <a href="https://lyngua.herokuapp.com">Heroku</a>
        
      </CardText>
    </Card>
    <br/>
    <Card>
      <CardHeader>
        oTravelTo
      </CardHeader>
      <CardBody>
        {/* <img src={null} alt="nothing yet"/> */}
      </CardBody>
      <CardText>
        <span>Summary:</span>
        <span>Technologies Used: </span>
        <ul>
          <li>NodeJS</li>
          <li>ExpressJS</li>
          <li>MongoDB</li>
          <li>IndexedDB</li>
        </ul>
        <a href="https://github.com/NekoCarreraDesigns/project-2">Github</a>
        <br/>
        {/* <a href="https://project-2c.herokuapp.com/">Heroku</a> */}
        
        
        
      </CardText>
    </Card>
  </Col>
  )
};
export default MainCol;
