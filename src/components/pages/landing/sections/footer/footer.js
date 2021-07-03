import React from 'react'
import {FacebookFilled, TwitterCircleFilled, WechatFilled, YoutubeFilled} from "@ant-design/icons";
import './footer.css';

class Footer extends React.Component {

    render() {
        return (<>
            <div id="footer-bg">
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <div id="footer-header-container">
                                <h4>Get in touch</h4>
                                <p>If you have any questions, send me a message</p>
                            </div>
                        </div>
                    </div>
                    <div className={"row"}>
                        <div className={"col-lg-6 col-lg-offset-6 col-xs-12 social-container"}>
                            <div>
                                <WechatFilled id={"wechat-icon"}/>
                            </div>
                            <div>
                                <FacebookFilled id={"facebook-icon"}/>
                            </div>
                            <div>
                                <TwitterCircleFilled id={"twitter-icon"}/>
                            </div>
                            <div>
                                <YoutubeFilled id={"youtube-icon"}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>)
    }
}

export default Footer