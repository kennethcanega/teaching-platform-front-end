import React from 'react'
import Header from './common/header/Header'
import Footer from './pages/landing/sections/footer/footer'
import LandingPage from './pages/landing/LandingPage'
import LoginPage from './pages/login/LoginPage'
import {Route, Switch} from 'react-router-dom';


class App extends React.Component {


    render() {
        return (
            <>
                <Header/>
                <Switch>
                    <Route path='/login' component={LoginPage}/>
                    <Route exact path='/' component={LandingPage}/>
                </Switch>
                <Footer/>
            </>
        )
    }
}

export default App