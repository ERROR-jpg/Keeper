import React from 'react'
import { Link } from 'react-router-dom';
// import LandingImage from '../assets/images/landing_main.svg';
// import InfoSectionImageEasy from '../assets/images/info_section_1.svg';
// import InfoSectionImageNote from '../assets/images/info_section_2.svg';
// import InfoSectionImageOrganize from '../assets/images/info_section_3.svg';
import DescriptionIcon from "@material-ui/icons/Description";
import HighlightIcon from "@material-ui/icons/Highlight";
import './Landing.css';

function Landing() {
    return (
        <div className='body'>
            <div className="jumbotron centered">
                <div className="container">
                    {/* <i class="fas fa-key fa-6x"></i> */}
                    <HighlightIcon className="svg_icon"/>
                    <h1 class="display-3">Keeper</h1>
                    <p class="lead">Free Note Taking App for Personal Use</p>
                    <hr />
                        <Link to='/Register' className="auth-link" ><button className="btn reg">Register</button></Link>
                        <Link to='/login' className="auth-link" ><button className="btn log">Login</button></Link>
                        </div>
                </div>
            </div>

    )
}

export default Landing;

