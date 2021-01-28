import React, { Component } from "react";

import IndividualProjects from "./IndividualProjects";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

import image01 from "../images/portfolio/accessklic_app.png";
import image02 from "../images/portfolio/jcfh.png";
import image03 from "../images/portfolio/react_weather_app.jpg";
import image04 from "../images/portfolio/accessklic_site.png";
import image05 from "../images/portfolio/react_simple_sidebar.jpg";
import image06 from "../images/portfolio/accessklic_dashboard.jpg";

class Portfolio extends Component {
  render() {
    return (
      <section class="page-section portfolio" id="portfolio">
        <div class="container">
          <h2 class="page-section-heading text-center text-uppercase text-secondary mb-0">
            Portfolio
          </h2>
          <div class="divider-custom">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon">
              <FontAwesomeIcon icon={faCode} />
            </div>
            <div class="divider-custom-line"></div>
          </div>
          <div class="row justify-content-center">
            <IndividualProjects
              title="Accessklic App"
              body="A hybrid app for access control published in Play Store and App Store."
              image={image01}
              skills={["Apache Cordova", "Javascript", "HTML5", "CSS3", "API"]}
              link="https://apps.apple.com/mx/app/accessklic/id1536610184"
            />
            <IndividualProjects
              title="JCHF Construcción"
              body="A modern website development for a construction company."
              image={image02}
              skills={[
                "Symfony 5",
                "Bootstrap 4",
                "PHP",
                "Javascript",
                "HTML5",
                "CSS3",
              ]}
              link="https://jcfhconstruccion.com.mx/"
            />
            <IndividualProjects
              title="React Weather Site"
              body="A site that allows users to obtain the current weather of its city."
              image={image03}
              skills={["ReactJS", "Shards UI", "Javascript", "HTML5", "CSS3"]}
              link="https://alxsmora1.github.io/react-weather-app/"
            />
            <IndividualProjects
              title="Accessklic Landing Page"
              body="A promotional landing page for the Accessklic App."
              image={image04}
              skills={["Bootstrap 4", "Javascript", "HTML5", "CSS3"]}
              link="https://accessklic.com.mx/"
            />
            <IndividualProjects
              title="React Simple Sidebar"
              body="A Start Bootstrap HTML template which I turned into a React application."
              image={image05}
              skills={["ReactJS", "Bootstrap 4", "Javascript", "HTML5", "CSS3"]}
              link="https://alxsmora1.github.io/react-simple-sidebar/"
            />
            <IndividualProjects
              title="Accessklic Dashboard"
              body="A dashboard that allows the administrator of accessklic to handle API REST, handle users/system data, and other admin functions."
              image={image06}
              skills={[
                "Symfony 5",
                "TailwindCSS",
                "PHP",
                "Javascript",
                "HTML5",
                "CSS3",
              ]}
              link="https://dashboard.accessklic.com.mx/"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
