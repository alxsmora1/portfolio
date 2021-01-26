import React, { Component } from 'react';

import Navbarx from '../components/Navbarx';
import Masthead from '../components/Masthead';
import AboutMe from '../components/AboutMe';

class LandingPage extends Component {
    render() {
        return (
            <>
                <Navbarx />
                <Masthead />
                <AboutMe />
            </>
        );
    }
}

export default LandingPage;