import React, { Component } from "react";

import { Card, CardText, CardBody, CardTitle, List } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCube,
  faCubes,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinux,
  faPhp,
  faJsSquare,
  faPython,
  faCss3,
  faHtml5,
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
            <div class="col-lg-4">
              <Card className="shadow mb-3 bottom-color">
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
            <div class="col-lg-4">
              <Card className="shadow mb-3 bottom-color">
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    SKILLS
                  </CardTitle>
                  <CardText>
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
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div class="col-lg-4">
              <Card className="shadow mb-3 bottom-color">
                <CardBody>
                  <CardTitle tag="h5" className="text-center">
                    STACK
                  </CardTitle>
                  <CardText>
                    <List type="unstyled">
                      <li>
                        <FontAwesomeIcon icon={faPhp} /> PHP (Symfony)
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faPython} /> Python (Django)
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faJsSquare} /> JS (ReactJS)
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCubes} /> SQL
                        (Mariadb/PostgreSQL)
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faCss3} /> CSS 3 (Bootstrap)
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faHtml5} /> HTML 5
                      </li>
                      <li>
                        <FontAwesomeIcon icon={faLinux} /> Linux (Debian,
                        Ubuntu, Raspbian)
                      </li>
                    </List>
                  </CardText>
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
