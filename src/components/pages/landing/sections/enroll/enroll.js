import React from 'react'
import './enroll.css';
import {CheckOutlined, ShoppingCartOutlined} from "@ant-design/icons";
import {Button} from 'antd';


class Enroll extends React.Component {

    render() {
        return (<>
            <div id={"enroll-bg"}>
                <div className={"container"}>
                    <h4 id={"get-started-header"}>Get started now!</h4>
                    <div className={"row justify-content-center"}>
                        <div className={"col-lg-4"}>
                            <div className={"parent-course-header"}>
                                <h4>Schedule a class</h4>
                            </div>
                            <div className={"enroll-container"}>
                                <div className={"course-desc-container"}>
                                    <p>Buy a single course for as low as <b>$10</b> per class can have:</p>
                                </div>
                                <div className={"row enroll-perks-container"}>
                                    <div className={"col-2 check-container"}>
                                        <CheckOutlined/>
                                    </div>
                                    <div className={"col-9"}>
                                        <span className={"perk-text"}>Lifetime access to a course</span>
                                    </div>
                                </div>
                                <div className={"row enroll-perks-container"}>
                                    <div className={"col-2 check-container"}>
                                        <CheckOutlined/>
                                    </div>
                                    <div className={"col-9"}>
                                        <span className={"perk-text"}>Lifetime access to a course</span>
                                    </div>
                                </div>
                                <div className={"row enroll-perks-container"}>
                                    <div className={"col-2 check-container"}>
                                        <CheckOutlined/>
                                    </div>
                                    <div className={"col-9"}>
                                        <span className={"perk-text"}>Lifetime access to a course</span>
                                    </div>
                                </div>
                                <div className={"row enroll-perks-container"}>
                                    <div className={"col-2 check-container"}>
                                        <CheckOutlined/>
                                    </div>
                                    <div className={"col-9"}>
                                        <span className={"perk-text"}>Lifetime access to a course</span>
                                    </div>
                                </div>

                                <div className={"purchase-button-container"}>
                                    <Button type="primary" className={"purchase-button"}>
                                        <div className={"purch-cart-icon"}>
                                            <ShoppingCartOutlined/>
                                        </div>
                                        <span className={"purch-text"}>
                                    Schedule now for $10
                                    </span>
                                    </Button>
                                </div>
                            </div>
                        </div>

                        <div className={"col-lg-4"}>
                            <div id="parent-course-container">
                                <div className={"parent-course-header"}>
                                    <h4>Buy the course</h4>
                                </div>
                                <div className={"enroll-container"}>
                                    <div className={"course-desc-container"}>
                                        <p>Buy all the courses for as low as <b>$50</b> you can have:</p>
                                    </div>
                                    <div className={"row enroll-perks-container"}>
                                        <div className={"col-2 check-container"}>
                                            <CheckOutlined/>
                                        </div>
                                        <div className={"col-9"}>
                                            <span className={"perk-text"}>Lifetime access to a course</span>
                                        </div>
                                    </div>
                                    <div className={"row enroll-perks-container"}>
                                        <div className={"col-2 check-container"}>
                                            <CheckOutlined/>
                                        </div>
                                        <div className={"col-9"}>
                                            <span className={"perk-text"}>Lifetime access to a course</span>
                                        </div>
                                    </div>
                                    <div className={"row enroll-perks-container"}>
                                        <div className={"col-2 check-container"}>
                                            <CheckOutlined/>
                                        </div>
                                        <div className={"col-9"}>
                                            <span className={"perk-text"}>Lifetime access to a course</span>
                                        </div>
                                    </div>
                                    <div className={"row enroll-perks-container"}>
                                        <div className={"col-2 check-container"}>
                                            <CheckOutlined/>
                                        </div>
                                        <div className={"col-9"}>
                                            <span className={"perk-text"}>Lifetime access to a course</span>
                                        </div>
                                    </div>

                                    <div className={"purchase-button-container"}>
                                        <Button type="primary" className={"purchase-button"}>
                                            <div className={"purch-cart-icon"}>
                                                <ShoppingCartOutlined/>
                                            </div>
                                            <span className={"purch-text"}>
                                            Enroll now for $10
                                        </span>
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Enroll