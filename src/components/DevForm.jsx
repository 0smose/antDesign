import React from 'react';
import { Form, Input, Button, Checkbox, DatePicker, Select, message } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';


const DevForm = ({next}) => {

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


    const onFinish = values => {
        console.log('Success:', values);    
        message.success('we will contact you soon!');
      };
    
      const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
      };

      return(
        <>
        

      <Form
        {...layout}
        name="development"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label = "Development"
          name="Development"
          rules={[
            {
              required: true, 
              message: 'Please input your general development level'
            },
          ]}> 
           <Select
          placeholder="Select a option and change input text above"
  
          allowClear
        >
          <Option value="beginner">beginner</Option>
          <Option value="intermediate">intermediate</Option>
          <Option value="expert">expert</Option>
        </Select>
          
      </Form.Item>
      
      <Form.List name="names">
      {(fields, { add, remove }) => {
          return (
            <div>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0 ? layout : layout)}
                  label={index === 0 ? 'Language' : ''}
                  required={false}
                  key={field.key}
                >
                  <Form.Item
                    {...field}
                    validateTrigger={['onChange', 'onBlur']}
                    rules={[
                      {
                        required: true,
                        message: "Please input language's name or delete this field.",
                      },
                    ]}
                    noStyle
                  >
                    <Input  placeholder="language" style={{ width: '60%' }} />
           
                    
                  </Form.Item>

                  {fields.length > 1 ? (
                    <MinusCircleOutlined
                      className="dynamic-delete-button"
                      style={{ margin: '0 8px' }}
                      onClick={() => {
                        remove(field.name);
                      }}
                    />
                  ) : null}
                </Form.Item>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => {
                    add();
                  }}
                  style={{ width: '60%' }}
                >
                  <PlusOutlined /> Add Language
                </Button>
              </Form.Item>
            </div>
          );
        }}
      </Form.List>

      <Form.Item
          label = "which language do you want to learn next ?"
          name="test"
          rules={[
            {
              required: true, 
              message: 'test'
            },
          ]}> 
           <Select
          placeholder="Select a option"
  
          allowClear
        >
          <Option value="js">javascript</Option>
          <Option value="ruby">ruby</Option>
          <Option value="python">python</Option>
          <Option value="C">C</Option>
        </Select>
          
      </Form.Item>

      <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" onClick={onFinish}>
            Submit
          </Button>
        </Form.Item>

          


      </Form> 
        </>
      
      )
}

export default DevForm;