import React from 'react'
import './LoginPage.css'
import { Button, Checkbox, ConfigProvider, Flex, Form, Input, Radio, Upload } from 'antd'
import { PlusOutlined, UserOutlined, LockOutlined, PhoneOutlined, FormOutlined } from '@ant-design/icons'

const { TextArea } = Input;

export default LoginRegisterForm

function LoginRegisterForm() {
  return (
    <div className="login-register-page">
      <LoginForm />
      <RegisterForm />
    </div>
  )
}

function LoginForm() {
  return ( 
    <div className='login-page-container'>
      <p className="login-page-title">Login</p>
      <Form 
        name='login' 
        style={{width: 270}}
        className='login-form'
        >
        <Form.Item label="Username" name="username" rules={[
          {
            required: true,
            message: 'Please input your username!',
          }
        ]}>
          <Input prefix={<UserOutlined />} />
        </Form.Item>
        <Form.Item label="Password" name="password" rules={[
          {
            required: true,
            message: 'Please input your password!',
          }
        ]}>
          <Input.Password prefix={<LockOutlined />}/>
        </Form.Item>
        <Form.Item name="remember" valuePropName='checked'>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType='login'>Login</Button>
        </Form.Item>
      </Form>
    </div>
  )
}

function RegisterForm() {
  return (
    <div className='register-page-container'>
      <p className='register-page-title'>Registeration</p>
      <ConfigProvider theme={{
        token: {
          'colorFillAlter': '#ffffff',
        }
      }}>
        <Form 
          name='register'
          style={{maxWidth: 500}}
          className='register-form'
          >
          <Form.Item label="Name" name="name" rules={[
            {
              required: true,
              message: 'Please input your name!',
            }
          ]}> 
            <Input prefix={<FormOutlined />}/>
          </Form.Item>
          <Form.Item label="Upload SSN Image" name="uploadSSN" valuePropName='fileList' rules={[
            {
              required: true,
              message: 'Please upload your photo!',
            }
          ]}>
            <Upload.Dragger action="http://localhost:2004/" listType="SSD-card-image">
              <button type='button' style={{ border: 0, background: 'none'}}>
                <PlusOutlined />
                <div style={{marginTop: 8}}>Upload your SSN card image</div>
              </button>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item label='Gender'name="gender" rules={[
            {
              required: true,
              message: 'Please select your gender!',
            }
          ]}>
            <Radio.Group>
              <Radio value="Male">Male</Radio>
              <Radio value="Female">Female</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label='Vehicle type' name="vehicleType" rules={[
            {
              required: true,
              message: 'Please select your vehicle type!',
            }
          ]}>
            <Radio.Group>
              <Radio value="Car">Car</Radio>
              <Radio value="Motorbike">Motorbike</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item label="Upload VRC Image" name="vrcimage" rules={[
            {
              required: true,
              message: 'Please upload your photo!',
            }
          ]}>
            <Upload.Dragger action="http://localhost:2004/" listType="SSN-card-image">
              <button type='button' style={{ border: 0, background: 'none'}}>
                <PlusOutlined />
                <div style={{marginTop: 8}}>Upload your VRC card img</div>
              </button>
            </Upload.Dragger>
          </Form.Item>
          <Form.Item label="Phone number" name="phoneNumber" rules={[
            {
              required: true,
              message: 'Please input your phone number!',
            }
          ]}>
            <Input type='text' prefix={<PhoneOutlined />}/>
          </Form.Item>
          <Form.Item label="More information">
            <TextArea rows={4}/>
          </Form.Item>
          <Form.Item label="Username" name="username_register" rules={[
            {
              required: true,
              message: 'Please input your username!',
            }
          ]}>
            <Input prefix={<UserOutlined />}/>
          </Form.Item>
          <Form.Item label="Password" name="password_register" rules={[
            {
              required: true,
              message: 'Please input your password!',
            }
          ]}>
            <Input.Password prefix={<LockOutlined />}/>
          </Form.Item>
          <Form.Item label="Password" name="password_register_checked"rules={[
            {
              required: true,
              message: 'Please rewrite your password!',
            }
          ]}>
            <Input.Password prefix={<LockOutlined />}/>
          </Form.Item>
          <Form.Item>
            <Button htmlType='register' >Register</Button>
          </Form.Item>
        </Form> 
      </ConfigProvider>
    </div>
  )
}4