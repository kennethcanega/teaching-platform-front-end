import React from 'react'
import {Button, Checkbox, Form, Input} from 'antd';
import 'antd/dist/antd.css';
import './LoginPage.css';


const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class LoginPage extends React.Component {

    onFinish = (values) => {
        console.log('Success:', values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (<div id="login-background">
                <div className={"container"}>
                    <div className={"row"}>
                        <div id="login-section">
                            <div className={"col-lg-8 col-lg-offset-4 login-form-container"}>
                                <Form
                                    {...layout}
                                    name="basic"
                                    initialValues={{
                                        remember: true,
                                    }}
                                    onFinish={this.onFinish}
                                    onFinishFailed={this.onFinishFailed}
                                >
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>

                                    <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your password!',
                                            },
                                        ]}
                                    >
                                        <Input.Password/>
                                    </Form.Item>

                                    <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                                        <Checkbox>Remember me</Checkbox>
                                    </Form.Item>

                                    <Form.Item {...tailLayout}>
                                        <Button type="primary" htmlType="submit">
                                            Submit
                                        </Button>
                                    </Form.Item>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LoginPage