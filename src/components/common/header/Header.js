import React from 'react'
import {Nav, Navbar,} from 'react-bootstrap'
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getContentByTypeAndCode} from "../helper/helper";

import {setContents} from "../../actions";
import {TEXT_TYPE} from "../helper/constant";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData()
    }

    fetchData() {

        const {setContents} = this.props
        const allContents = [
            {
                id: 1,
                language: "ENGLISH",
                type: "MENU",
                code: "BOOK",
                htmlContent: "Book"
            },
            {
                id: 2,
                language: "ENGLISH",
                type: "MENU",
                code: "ENROLL",
                htmlContent: "Enroll"
            },
            {
                id: 3,
                language: "ENGLISH",
                type: "MENU",
                code: "COURSES",
                htmlContent: "Courses"
            },
            {
                id: 4,
                language: "ENGLISH",
                type: "MENU",
                code: "LOGIN",
                htmlContent: "Login"
            },
            {
                id: 5,
                language: "ENGLISH",
                type: "MENU",
                code: "SIGN_UP",
                htmlContent: "Sign Up"
            }
        ]
        setContents(allContents)
    }

    render() {
        const {contents} = this.props


        return (
            <Navbar expand="lg">
                <div className={"container"}>
                    <Navbar.Brand as={Link} to="/">LOGO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link as={Link} to="/book">
                                {getContentByTypeAndCode(contents, TEXT_TYPE.MENU, "BOOK")}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/enroll">
                                {getContentByTypeAndCode(contents, TEXT_TYPE.MENU, "ENROLL")}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/courses">
                                {getContentByTypeAndCode(contents, TEXT_TYPE.MENU, "COURSES")}
                            </Nav.Link>
                            <Nav.Link as={Link} to="/login">
                                {getContentByTypeAndCode(contents, TEXT_TYPE.MENU, "LOGIN")}
                            </Nav.Link>
                            <Nav.Link id="signup-nav" as={Link} to="/signup">
                                {getContentByTypeAndCode(contents, TEXT_TYPE.MENU, "SIGN_UP")}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        )
    }

}


const mapStateToProps = (state) => {

    return {
        contents: state.contentReducer.contents
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({setContents}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)