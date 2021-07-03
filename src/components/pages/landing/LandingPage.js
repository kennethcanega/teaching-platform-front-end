import React from 'react'
import './LandingPage.css';
import Intro from './sections/intro/intro'
import About from './sections/about/about'
import Benefit from './sections/benefit/benefit'
import Course from './sections/course/course'
import Enroll from './sections/enroll/enroll'
import axios from './../../common/helper/axios'


class LandingPage extends React.Component {
    constructor(props) {
        super(props);
    }

    onLoad() {
        axios.get("/contents", {}).then(response => {
            console.log(response)
        })
    }

    render() {
        return (<>
            <Intro/>
            <About/>
            <Benefit/>
            <Course/>
            <Enroll/>
        </>)
    }
}

export default LandingPage