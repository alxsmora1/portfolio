import React, { Component } from 'react';

import Navbarx from '../components/Navbarx';
import Masthead from '../components/Masthead';
import AboutMe from '../components/AboutMe';
import Portfolio from '../components/Portfolio';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

class LandingPage extends Component {

    render() {
        return (
            <>
                <Navbarx />
                <Masthead />
                <AboutMe />
                <Portfolio />
            </>
        );
    }
}

export default LandingPage;
