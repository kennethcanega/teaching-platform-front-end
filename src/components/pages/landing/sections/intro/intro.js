import React from 'react'
import './intro.css';


class Intro extends React.Component {

    render() {
        return (<div id="intro-background">
                <div className={"container-fluid px-5"}>
                    <div className={"row"}>
                        <div id="intro-section" className={"col-12"}>
                            <div id="intro-message-container">
                                <h1 id="intro-header">Learn Chinese And English</h1>
                                <p id="intro-subheader">Book or enroll to get resources</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Intro