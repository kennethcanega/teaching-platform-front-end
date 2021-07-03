import React from 'react'
import './about.css';

class About extends React.Component {

    render() {
        return (<div id="about-bg" className={"bg-slanted"}>
                <div className={"container"}>
                    <div className={"row"}>

                        <div id="about">
                            <img src="http://placehold.it/400x300" className={"img-fluid"} alt="Author"/>

                            <div className={"col-md-6 col-md-offset-6 col-xs-12 col-lg-4 col-lg-offset-8"}
                                 id="description-container">
                                <div className={"description"}>
                                    <h4>Hi, I'm Cristy!</h4>
                                    <p>
                                        It is a long established fact that a reader will be distracted by the
                                        readable
                                        content of a page when looking at its layout. The point of using Lorem Ipsum
                                        is
                                        that it has a more-or-less normal distribution of letters, as opposed to
                                        using
                                        'Content here, content here', making it look like readable English.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About