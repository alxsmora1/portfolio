import React, { Component } from 'react';

import avatar from '../images/avataaars.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faTwitter, faHackerrank, faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

class Masthead extends Component {
    render() {
        return (
            <header class="masthead bg-primary text-white text-center" id="masthead">
                <div class="container d-flex align-items-center flex-column">
                    <img class="masthead-avatar mb-5" src={avatar} alt="Avatar" />
                    <h1 class="masthead-heading text-uppercase mb-0">Alexis Mora</h1>
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><FontAwesomeIcon icon={faCode} /> </div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <p class="masthead-subheading font-weight-light mb-0">Full Stack Web Developer</p>
                    <br/>
                    <div class="col-lg-4 mb-5 mb-lg-0 justify-items-center">
                        <a class="btn btn-outline-light btn-social mx-1" href="https://twitter.com/alxsmora1" target="__BLANK"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.linkedin.com/in/alexis-mora-a15528171/" target="__BLANK"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://www.hackerrank.com/alxsmora1" target="__BLANK"><FontAwesomeIcon icon={faHackerrank} /></a>
                        <a class="btn btn-outline-light btn-social mx-1" href="https://github.com/alxsmora1" target="__BLANK"><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                </div>
            </header>
        );
    }
}

export default Masthead;