import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { updateUser, userById } from "../../services/users";

import { Button, Checkbox, Form, Input, message } from "antd";
import { Loading } from "../Loading";

const EditUser = () => {
  const { id } = useParams();

  const [loading, setLoading] = useState(false);
  const [userDetail, setUserDetail] = useState({});

  // fetch all users from database
  useEffect(() => {
    getUserById(id);
  }, []);

  const getUserById = () => {
    setLoading(true);

    userById(id).then((result) => {
      console.log(result);
      if (result) {
        setUserDetail(result);
      }
      setLoading(false);
    });
  };

  const onFinish = (values) => {
    setLoading(true);
    updateUser(id, values).then((result) => {
      if (result) {
          message.success("User Updated Successfully!");
          setUserDetail(result)
      }
      setLoading(false);
    });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (loading) {
    return (
      <div className="container">
        <Loading type="spokes" />
      </div>
    );
  }

  return (
    <div className="container">
      <Form
        name="basic"
        initialValues={userDetail}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item label="name" name="name">
          <Input />
        </Form.Item>

        <Form.Item label="Username" name="username">
          <Input />
        </Form.Item>

        <Form.Item label="Email" name="email">
          <Input />
        </Form.Item>

        <Form.Item label="phone Number" name="phone">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EditUser;
