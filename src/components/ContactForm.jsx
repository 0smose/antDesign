import React, {useState, useEffect} from 'react';
import { Form, Input, Button, Checkbox, DatePicker, Select, Steps } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons'; 



const ContactForm = ({next}) => {


    const { Option } = Select;


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

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 4 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 20 },
    },
  };
  const formItemLayoutWithOutLabel = {
    wrapperCol: {
      xs: { span: 24, offset: 0 },
      sm: { span: 20, offset: 4 },
    },
  };




  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="33">+336</Option>
      
      </Select>
    </Form.Item>
  );



  
    const onFinish = values => {
      console.log('Success:', values);
      next();
      
    };

  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };


  
    return (

      <div>


      <Form
        {...layout}
        name="contact"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="FirstName"
          name="FirstName"
          rules={[
            {
              required: true,
              message: 'Please input your firstname!',
            },
          ]}
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="LastName"
          name="LastName"
          rules={[
            {
              required: true,
              message: 'Please input your lastname!',
            },
          ]}
        >
          <Input/>
        </Form.Item>

        <Form.Item
          label="Gender"
          name="Gender"
          rules={[
            {
              required: true,
              message: 'Please input your gender!',
            },
          ]}
        >
          <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="male">male</Option>
          <Option value="female">female</Option>
          <Option value="other">other</Option>
        </Select>

        </Form.Item>

        <Form.Item label="DatePicker"
        name="date"
        rules={[
            {
              required: true,
              message: 'Please input your birthdate!',
            },
          ]}>
          <DatePicker />
        </Form.Item>
  
        <Form.Item
        name= 'email'
        label="Email"
        rules={[
          {
            type: 'email',
            required: true, 
            message: 'Please input your email'
          },
        ]}
      >
        <Input />
      </Form.Item>
  

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          addonBefore={prefixSelector}
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item
          label="City"
          name="City"
          rules={[
            {
              required: true,
              message: 'Please input your city!',
            },
          ]}
        >
          <Input/>
        </Form.Item>
      
  




      <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onFinish}>
            Submit
          </Button>
        </Form.Item>
      </Form>

          
 
      </div>

    );

}

export default ContactForm;