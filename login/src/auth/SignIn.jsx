import { Form, Input, Button } from "antd";
import Title from "antd/es/typography/Title";

const SignIn = () => {
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
        <Title level={3}> Login Account</Title>

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

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignIn;
