import React, { Component } from "react";

import { Row, Col, Card, CardText, CardBody, CardTitle, List } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCube,
  faStar,
  faDatabase,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinux,
  faPhp,
  faJsSquare,
  faPython,
  faCss3,
  faHtml5,
  faReact,
  faAngular,
  faVuejs,
  faSass,
  faBootstrap,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";

class AboutMe extends Component {
  render() {
    return (
      <section class="page-section text-dark mb-0" id="about">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-white">
            About Me
          </h2>
          <div class="divider-custom divider-light">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row justify-content-center">
            <div class="col-md-4" data-aos="zoom-in">
              <Card className="shadow mb-3  crystal-card">
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    ME
                  </CardTitle>
                  <CardText>
                    <p class="lead text-justify">
                      Hello there, I'm Alexis Mora, an enthusiastic software
                      engineer with 3+ years of experience in web development,
                      automatization with Raspberry Pi (Raspbian + Python), and
                      mobile development. In my previous roles, I worked as a
                      Full Stack Web Developer.
                    </p>
                    <p class="lead text-justify">My hobbies are: </p>
                    <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faStar} /> Keep me learn about
                        tech, programming and Linux.
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} /> Play videogames.
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faStar} /> Discover new music.
                      </li>
                    </List>
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-3" data-aos="zoom-in">
              <Card className="shadow mb-3  crystal-card">
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    SKILLS
                  </CardTitle>
                    <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Adaptability
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Agile processes
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Excellent
                        communication skills
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Strong collaboration
                        skills
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Practical knowledge of
                        SQL and database concepts
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Intermediate knowledge
                        of GIT
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCube} /> Intermediate knowledge
                        of Bash/Shell
                      </li>
                    </List>
                </CardBody>
              </Card>
            </div>
            <div class="col-md-5" data-aos="zoom-in">
              <Card className="shadow mb-3 px-2 crystal-card">
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    STACK
                  </CardTitle>
                  <Row>
                    <Col md="4" className="text-center">
                    <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faJsSquare} size="2x" /> <br /> Javascript
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faPhp} size="2x" /> <br /> PHP 
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faPython} size="2x" /> <br /> Python
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faDatabase} size="2x" /> <br /> SQL
                      </li>                  
                    </List>
                    </Col>
                    <Col md="4" className="text-center">
                      <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faReact} size="2x" /> <br /> ReactJS
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faAngular} size="2x" /> <br /> Angular
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faVuejs} size="2x" /> <br /> Vue
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faSymfony} size="2x" /> <br /> Symfony
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faBootstrap} size="2x" /> <br /> Bootstrap
                      </li>
                      </List>
                    </Col>
                    <Col md="4" className="text-center">
                      <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faHtml5} size="2x" /> <br /> HTML 5
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faCss3} size="2x" /> <br /> CSS 3 
                      </li>    
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faSass} size="2x" /> <br /> Sass
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faLinux} size="2x" /> <br /> Linux
                      </li>
                      <br />
                      <li>
                        <FontAwesomeIcon icon={faTerminal} size="2x" /> <br /> Terminal
                      </li>
                      </List>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default AboutMe;
