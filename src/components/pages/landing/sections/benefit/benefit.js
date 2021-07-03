import React from 'react'
import './benefit.css';
import {CheckCircleOutlined} from "@ant-design/icons";

class Benefit extends React.Component {

    render() {
        return (<>
            <div id="benefit-bg" className={"bg-slanted"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div id="benefit-header-container" className={"col-xs-12 col-md-6 col-offset-6"}>
                            <h2 id="benefit-header">Main Features / Benefits</h2>
                            <p>
                                The point of using Lorem Ipsum is that it has a more-or-less normal distribution of
                                letters, as opposed to using 'Content here, content here', making it look like readable
                                English.
                            </p>
                        </div>
                    </div>

                    <div className={"row"}>
                        <div className={"col-lg-4 col-xs-12 benefit-benefits"}>
                            <div className={"row"}>
                                <div className={"col-2 benefit-check-container"}>
                                    <CheckCircleOutlined className={"benefit-check"}/>

                                </div>
                                <div className={"col-10 benefit-descriptions"}>
                                    <h1>One On One Mentorship</h1>
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

                        <div className={"col-lg-4 col-xs-12 benefit-benefits"}>
                            <div className={"row"}>
                                <div className={"col-2 benefit-check-container"}>
                                    <CheckCircleOutlined className={"benefit-check"}/>

                                </div>
                                <div className={"col-10 benefit-descriptions"}>
                                    <h1>Courses Available</h1>
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

                        <div className={"col-lg-4 col-xs-12 benefit-benefits"}>
                            <div className={"row"}>
                                <div className={"col-2 benefit-check-container"}>
                                    <CheckCircleOutlined className={"benefit-check"}/>

                                </div>
                                <div className={"col-10 benefit-descriptions"}>
                                    <h1>Veteran Teacher</h1>
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

export default Benefit