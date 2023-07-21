import React from "react";
import Dialog from "../../components/modal";
import { Button, Divider, Form, Input } from "antd";

const EditUser = ({ handleCancel, handleOk, user }) => {
  const onFinish = (values) => {
    handleOk(values);
  };

  return (
    <Dialog
      open={user}
      title="Edit User"
      handleCancel={handleCancel}
      handleOk={handleOk}
      footer={null}
    >
      <Divider />
      <Form
        name="edit-user"
        onFinish={onFinish}
        initialValues={user}
        layout="vertical"
      >
        <Form.Item
          name={"name"}
          label="Name"
          rules={[
            {
              required: true,
              message: "The field is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"email"}
          label="Email"
          rules={[
            {
              required: true,
              message: "The field is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"phone"}
          label="Phone"
          rules={[
            {
              required: true,
              message: "The field is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={"website"}
          label="Website"
          rules={[
            {
              required: true,
              message: "The field is required!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Divider />
        <div style={{ textAlign: "right" }}>
          <Button key="back" onClick={handleCancel}>
            Cancel
          </Button>
          <Button
            key="submit"
            type="primary"
            htmlType="submit"
            style={{ marginLeft: "10px" }}
          >
            Ok
          </Button>
        </div>
      </Form>
    </Dialog>
  );
};

export default EditUser;
