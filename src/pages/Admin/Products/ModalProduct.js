import React, { useEffect } from "react";
import { Button, Form, Input, InputNumber, Modal, Select } from "antd";
import { addProduct, editProduct } from "../../../apis/productApi";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllProduct } from "../../../redux/actions/productAction";
import { SUCCESS_MESSAGE } from "../../../common/message";
import { config, layout, layoutWithOutLabel } from "../../../common/table";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

export default function ModalProduct(props) {
  const { isModalVisible, setIsModalVisible, modalTitle, productEdit } = props;
  const { listCategory } = useSelector((state) => state?.categoryReducer);
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const { Option } = Select;

  useEffect(() => {
    if (!isModalVisible) return;
    if (modalTitle === "Edit") {
      form.setFieldsValue(productEdit);
    } else if (modalTitle === "Add") {
      form.resetFields();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isModalVisible]);

  const handleSubmit = async (product) => {
    if (modalTitle === "Add") {
      toast.success(SUCCESS_MESSAGE.STATUS_200, { autoClose: 1000 });
      await addProduct({ ...product, dateAdd: new Date().getTime(), sold: 0 });
      dispatch(actGetAllProduct());
      form.resetFields();
      setIsModalVisible(false);
    } else {
      toast.success("Edit success", { autoClose: 1000 });
      await editProduct(product, productEdit.id);
      dispatch(actGetAllProduct());
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
        <Form.Item
          label="Name"
          name={["productName"]}
          rules={[...config.ruleProductName]}
        >
          <Input />
        </Form.Item>
        <Form.Item label="Price" name={["price"]} rules={[...config.rulePrice]}>
          <InputNumber min={1} max={100000000000} />
        </Form.Item>

        {/* <Form.Item label="Sales" name={["sales"]} rules={[...config.ruleSales]}>
          <InputNumber min={0} max={100} />
        </Form.Item> */}
        <Form.Item
          label="Quantity"
          name={["quantity"]}
          rules={[...config.ruleQuantity]}
        >
          <InputNumber min={1} max={10000000} />
        </Form.Item>
        <Form.Item name="gender" label="Gender" rules={[...config.ruleGender]}>
          <Select placeholder="Please select gender" mode="multiple">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
          </Select>
        </Form.Item>
        <Form.Item name="size" label="Size" rules={[...config.ruleSize]}>
          <Select mode="multiple" placeholder="Please select size">
            <Option value="s">S</Option>
            <Option value="m">M</Option>
            <Option value="l">L</Option>
            <Option value="xl">XL</Option>
          </Select>
        </Form.Item>
        <Form.Item name="color" label="Color" rules={[...config.ruleColor]}>
          <Select mode="multiple" placeholder="Please select color">
            <Option value="red">Red</Option>
            <Option value="green">Green</Option>
            <Option value="blue">Blue</Option>
            <Option value="pink">Pink</Option>
            <Option value="purple">Purple</Option>
            <Option value="yellow">Yellow</Option>
            <Option value="black">Black</Option>
            <Option value="white">White</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["categoryId"]}
          label="Category"
          rules={[...config.ruleCat]}
        >
          <Select placeholder="Please select a category">
            {listCategory.map((cat) => {
              return (
                <Select.Option value={cat.id} key={cat.id}>
                  {cat.categoryName}
                </Select.Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item
          label="Description"
          name={["description"]}
          rules={[...config.ruleDescription]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={["image"]} label="Image" rules={[...config.ruleImage]}>
          <Input />
        </Form.Item>
        <Form.List name="imageRelated">
          {(fields, { add, remove }, { errors }) => (
            <>
              {fields.map((field, index) => (
                <Form.Item
                  {...(index === 0 ? layout : layoutWithOutLabel)}
                  label={index === 0 ? "ImgRelated" : ""}
                  required={false}
                  key={field.key}
                >
                  <Form.Item {...field} rules={[...config.ruleImage]} noStyle>
                    <Input placeholder="URL Image" style={{ width: "85%" }} />
                  </Form.Item>
                  <MinusCircleOutlined
                    className="dynamic-delete-button"
                    onClick={() => remove(field.name)}
                  />
                </Form.Item>
              ))}
              <Form.Item {...layoutWithOutLabel}>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  icon={<PlusOutlined />}
                >
                  Add field
                </Button>

                <Form.ErrorList errors={errors} />
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item name={["sold"]} className="d-none">
          <Input type={"hidden"} />
        </Form.Item>
        <Form.Item name={["dateAdd"]} className="d-none">
          <Input type={"hidden"} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
