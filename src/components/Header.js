import React from "react";
import { Jumbotron, Row, Col} from "reactstrap";
import FadeIn from "react-fade-in";
const Header = () => {
  return (
    
      <Row>
        <Col>
          <Jumbotron className="jumbotron">
            <FadeIn delay="500">
              <span>An Inquisitive Problem Solver</span>
              <br />
              <span>With a Love of Learning,</span>
              <br />
              <span>And Passion for Technology.</span>
              <br />
              <span>&hearts; Lifelong Nerd &hearts; </span>
            </FadeIn>
          </Jumbotron>
        </Col>
      </Row>
  );
};
export default Header;
