import React, { useState } from "react";
import { Form, Input, Button, Select, DatePicker, Radio } from "antd";
import "./FormUI.css";
import { country } from "../../../storage/countryData";
import { useData } from "../../../contexts/DataContext";

const layout = {
  labelCol: {
    span: 10,
  },
  wrapperCol: {
    span: 16,
  },
};

const FormUI = () => {
  const [value, setValue] = useState();
  const { formDataSubmit } = useData();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onFinish = (values) => {
    // console.log("Success:", values);
    formDataSubmit(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="form-ui-container">
      <Form
        {...layout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Gender"
          name="gender"
          rules={[
            {
              required: true,
              message: "Please choose your gender!",
            },
          ]}
        >
          <Select placeholder="Select Your Gender" allowClear>
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
            <Select.Option value="other">other</Select.Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Phone Number"
          name="phone"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Address"
          name="address"
          rules={[
            {
              required: true,
              message: "Please input your address!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Nationality"
          name="nationality"
          rules={[
            {
              required: true,
              message: "Please input your nationality!",
            },
          ]}
        >
          <Select placeholder="Select Your Nationality" allowClear>
            {country &&
              country.map((value) => (
                <Select.Option value={value}>{value}</Select.Option>
              ))}
          </Select>
        </Form.Item>

        <Form.Item
          label="Date of birth"
          name="dob"
          rules={[
            {
              required: true,
              message: "Please select your date of birth!",
            },
          ]}
        >
          <DatePicker />
        </Form.Item>

        <Form.Item
          label="Educational Background"
          name="education"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Preferred Mode of Contact"
          name="modeOfContact"
          rules={[
            {
              required: true,
              message: "Please input your preferred mode of contact!",
            },
          ]}
        >
          <Radio.Group onChange={onChange} value={value}>
            <Radio value="email">Email</Radio>
            <Radio value="phone">Phone</Radio>
            <Radio value="none">None</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormUI;
