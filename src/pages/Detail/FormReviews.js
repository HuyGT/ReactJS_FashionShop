import { Form, Rate } from "antd";
import TextArea from "antd/lib/input/TextArea";
import React from "react";
import { addRating } from "../../apis/ratingApi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { actGetRatingByFilter } from "../../redux/actions/ratingAction";
import { useDispatch, useSelector } from "react-redux";
import { actGetAllProduct } from "../../redux/actions/productAction";
import { config } from "../../common/table";

const FormReview = ({ setShowFormReview }) => {
  const { profile } = useSelector((state) => state.authReducer);

  const { id } = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const handleSubmit = async (value) => {
    delete profile.id;
    const date = new Date().toLocaleDateString();
    const data = {
      ...value,
      productId: parseInt(id),
      dateAdd: date,
      ...profile,
    };
    if (value.rate === 0) {
      toast.error("Bình luận không thành công", { autoClose: 2000 });
      return;
    } else if (Object.keys(profile).length <= 0) {
      toast.error("Bạn cần đăng nhập", { autoClose: 2000 });
    } else {
      await addRating(data);
      toast.success("Bình luận thành công", { autoClose: 2000 });
      form.resetFields();
      setShowFormReview(false);
      dispatch(actGetRatingByFilter({ productId: parseInt(id) }));
      dispatch(actGetAllProduct());
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="p-[50px]">
        <h2 className="buyre-name mb-3 text-4xl">
          {profile.fullName || "full name"}
        </h2>
        <Form
          layout="vertical"
          onFinish={handleSubmit}
          form={form}
          initialValues={{
            rate: 5,
          }}
        >
          <div className="relative pb-2">
            <Form.Item name="rate" label="Rate" rules={[...config.ruleRate]}>
              <Rate />
            </Form.Item>
          </div>
          <div className="relative pb-2">
            <Form.Item label="Comment" name="comment">
              <TextArea rows={4} />
            </Form.Item>
          </div>
          <div className="text-end">
            <button
              className="submitRating py-[15px] px-[30px] rounded-md"
              type="submit"
            >
              Submit
            </button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default FormReview;
