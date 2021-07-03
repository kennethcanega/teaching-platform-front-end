import React from 'react'
import './course.css';


class Course extends React.Component {

    render() {
        return (<>
            <div id={"courses-bg"}>
                <div className={"container"}>
                    <div id={"courses-header"}>
                        <h2>Available Courses</h2>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for kids level 1</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for kids level 2</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for kids level 3</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for Beginner</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for Intermediate</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-4 col-md-6 col-xs-12 courses-container"}>
                            <div className={"courses"}>
                                <div className={"course-img-container"}>
                                    <img src="http://placehold.it/300x200" className={"img-fluid"}
                                         alt="Course"/>
                                </div>
                                <div className={"course-img-desc-container"}>
                                    <h4>English for Advanced</h4>
                                    <p>
                                        The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                                        of
                                        letters, as opposed to using 'Content here, content here', making it look like
                                        readable
                                        English.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>)
    }
}

export default Course