import { Button, Form, Input } from "antd";
import Title from "antd/es/typography/Title";

const SignUp = () => {
  const onSubmit = (values) => {
    console.log("values", values);
  };
  return (
    <div className="form_container">
      <Form
        layout="vertical"
        initialValues={{ remember: true }}
        className="form"
        onFinish={onSubmit}
      >
        <Title level={3}> Register Account</Title>
        <Form.Item
          label="Name"
          name="name"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter name"></Input>
        </Form.Item>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
            },
            {
              type: "email",
            },
          ]}
        >
          <Input placeholder="Enter email"></Input>
        </Form.Item>
        <Form.Item
          label="Phone Number"
          name="phNumber"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter phone number"></Input>
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
            },
            {
              type: "password",
            },
          ]}
        >
          <Input.Password placeholder="Enter password"></Input.Password>
        </Form.Item>
        <Form.Item
          label="Confirm Password"
          name="confirm password"
          rules={[
            {
              required: true,
            },
            ({ getFieldValue }) => ({
              validator(_, value) {
                if (!value || getFieldValue("password") === value) {
                  return Promise.resolve();
                }

                return Promise.reject(new Error("password not match!"));
              },
            }),
          ]}
        >
          <Input.Password placeholder="Enter confirm password"></Input.Password>
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUp;
