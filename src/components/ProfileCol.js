import React from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import me from "./img/me.png";
const ProfileCol = () => {
  return (
    <Col md={4} xs={12}>
      <Card>
        <CardHeader className="text-center">
          <h3>Andrew Karpisz</h3>
          <h3>Full-Stack Web Developer</h3>
        </CardHeader>
        <CardBody className="text-center">
          <img src={me} id="portrait" alt="andrew karpisz" />
        </CardBody>
        <div>
          Proficient In:
          <ul>
            <li>Javascript and NodeJS</li>
            <li>ReactJS</li>
            <li>MongoDB</li>
            <li>MySQL</li>
            <li>ExpressJS</li>
            <li>REST APIs</li>
            <li>HTML, CSS and CSS Frameworks</li>
          </ul>
          <span>Next Step(s):</span>
          <ul>
            <li>Bachelors in Computer Science</li>
            then...
            <li>Masters in Computer Science</li>
          </ul>
        </div>
      </Card>
    </Col>
  );
};
export default ProfileCol;
