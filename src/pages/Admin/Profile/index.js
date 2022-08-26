/* eslint-disable jsx-a11y/alt-text */
import { Form, Input, Tabs, Button } from "antd";
import React, { useEffect } from "react";
import { config } from "../../../common/table";
import { useSelector, useDispatch } from "react-redux";
import "../style.scss";
import { actGetUserById } from "../../../redux/actions/userAction";
import { AuthTypes } from "../../../common/types";
import { editUser } from "../../../apis/userApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Profile() {
  const { TabPane } = Tabs;
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { detailUser } = useSelector((state) => state?.userReducer);
  const id = JSON.parse(localStorage.getItem(AuthTypes.AUTH_LOCALSTORAGE)).id;
  const handleEditProfile = async (values) => {
    toast.success("Edit success", { autoClose: 1000 });
    await editUser(
      {
        ...detailUser,
        fullName: values.fullName,
        address: values.address,
        prefix: values.prefix,
        phone: values.phone,
        avatar: values.avatar,
      },
      id
    );
    dispatch(actGetUserById(id));
  };
  const handleChangePassword = async (values) => {
    console.log(detailUser.password);
    if (values.password === detailUser.password) {
      toast.success("Change password success", { autoClose: 1000 });
      await editUser(
        {
          ...detailUser,
          password: values.newPassword,
        },
        id
      );
      form.resetFields();
      dispatch(actGetUserById(id));
    } else {
      toast.warning("Current password not valid", { autoClose: 1000 });
    }
  };

  useEffect(() => {
    dispatch(actGetUserById(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    form.setFieldsValue({ ...detailUser, password: "", confirmPassword: "" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [detailUser]);
  return (
    <div className="row">
      <ToastContainer />
      <div className="col-lg-4 col-xlg-3 col-md-5">
        <div className="card">
          <div className="card-body">
            <center className="mt-4">
              <img
                src={detailUser.avatar}
                className="rounded-circle"
                width="150"
              />
              <h4 className="card-title mt-4">{detailUser.fullName}</h4>
              <h6 className="card-subtitle">Admin of NikaStore</h6>
              <div className="row text-center justify-content-center">
                <div className="col-4">
                  <i className="fa-solid fa-signs-post mr-2"></i>
                  <span>169</span>
                </div>
                <div className="col-4">
                  <i className="fa-solid fa-comment mr-2"></i>
                  <span>69</span>
                </div>
              </div>
            </center>
          </div>
        </div>
      </div>
      <div className="col-lg-8 col-xlg-9 col-md-7">
        <div className="card">
          <div className="card-body">
            <Tabs defaultActiveKey="1">
              <TabPane tab="Profile" key="1">
                <Form
                  layout="vertical"
                  onFinish={handleEditProfile}
                  form={form}
                >
                  <Form.Item label="Email" name={["email"]}>
                    <Input disabled />
                  </Form.Item>
                  <Form.Item
                    label="Full Name"
                    name={["fullName"]}
                    rules={[...config.ruleFullName]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Address"
                    name={["address"]}
                    rules={[...config.ruleAddress]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    label="Phone"
                    name={["phone"]}
                    rules={[...config.rulePhone]}
                  >
                    <Input
                      style={{
                        width: "100%",
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Avatar" name={["avatar"]}>
                    <Input />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Update
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Change Password" key="2">
                <Form
                  layout="vertical"
                  form={form}
                  onFinish={handleChangePassword}
                >
                  <Form.Item
                    label="Current Password"
                    name="password"
                    rules={[...config.rulePassword]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="New Password"
                    name="newPassword"
                    rules={[...config.rulePassword]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                      ...config.rulePassword,
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (
                            !value ||
                            getFieldValue("newPassword") === value
                          ) {
                            return Promise.resolve();
                          }

                          return Promise.reject(
                            new Error("Password do not match!")
                          );
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit">
                      Change
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}
