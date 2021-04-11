import React from "react";
import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';

import styles from './LoginUserPage.module.scss';

const LoginUserPage = () => {
    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <div className={styles.loginPageWrapper}>
            <div className={styles.loginForm}>
                <h3>Логин</h3>
                <Form
                    name="normal_login"
                    className={styles.loginInput}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[{required: true, message: 'Пожалуйства введите логин!'}]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder=""/>
                    </Form.Item>
                    <h3>Пароль</h3>
                    <Form.Item
                        name="password"
                        rules={[{required: true, message: 'Пожалуйста введите пароль!'}]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder=""
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Войти
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LoginUserPage;