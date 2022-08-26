import React, { useEffect } from "react";
import { Form, Input, Modal, Select } from "antd";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { actGetAllUser } from "../../../redux/actions/userAction";
import { addUser, editUser } from "../../../apis/userApi";
import { config, layout } from "../../../common/table";

export default function ModalUser(props) {
  const { Option } = Select;
  const { isModalVisible, setIsModalVisible, modalTitle, userEdit } = props;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(userEdit);
    } else {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  const handleSubmit = async (user) => {
    if (modalTitle === "Add") {
      toast.success("Add success", { autoClose: 1000 });
      await addUser(user);
      dispatch(actGetAllUser());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      toast.success("Edit success", { autoClose: 1000 });
      await editUser(user, userEdit.id);
      dispatch(actGetAllUser());
      setIsModalVisible(false);
    }
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <Modal
      title={modalTitle === "Add" ? "Add Form" : "Edit Form"}
      visible={isModalVisible}
      onOk={() => form.submit()}
      onCancel={handleCancel}
    >
      <Form {...layout} form={form} onFinish={handleSubmit}>
        <Form.Item label="Email" name={["email"]} rules={[...config.ruleEmail]}>
          <Input />
        </Form.Item>
        <Form.Item
          label="Full Name"
          name={["fullName"]}
          rules={[...config.ruleFullName]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name={["password"]}
          rules={[...config.rulePassword]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item name="role" label="Role" rules={[...config.ruleRole]}>
          <Select placeholder="Select a role" allowClear>
            <Option value="admin">Admin</Option>
            <Option value="user">User</Option>
          </Select>
        </Form.Item>
        <div className="d-none">
          <Form.Item name={["address"]}>
            <Input />
          </Form.Item>
          <Form.Item name={["phone"]}>
            <Input />
          </Form.Item>
          <Form.Item name={["avatar"]}>
            <Input />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
