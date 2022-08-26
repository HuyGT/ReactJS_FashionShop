import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import CheckBoxWrapp from "../../components/form/input/CheckBoxWrapp";
import Input from "../../components/form/input/InputWrrapp";
import Form from "../../components/form/Form";
import { useSelector, useDispatch } from "react-redux";
import { VALIDATE_YUP } from "../../common/validateYup";
import { actLogin } from "../../redux/actions/auth/authAction";
import { useHistory } from "react-router-dom";

const schema = Yup.object({
  // email: VALIDATE_YUP.EMAIL,
  // password: VALIDATE_YUP.PASSWORD,
});
const FormSignIng = () => {
  const { isLoggIn } = useSelector((state) => state.authReducer);
  const history = useHistory();

  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(actLogin(values));
        reset();
      }, 2000);
    });
  };

  useEffect(() => {
    if (isLoggIn) {
      history.goBack();
    } else {
      // toast.error("Bình luận không thành công", { autoClose: 2000 });
    }
  }, [history, isLoggIn]);

  return (
    <>
      <ToastContainer />

      <h2 className="login-title">Wellcome back</h2>
      <p className="title-sup">Wellcome back! Please enter your details</p>
      <Form handleSubmit={handleSubmit(onSubmit)}>
        <div className="relative pb-5">
          <Input
            name="email"
            placeholder="Enter your email"
            control={control}
            label="Email Address"
            error={errors?.email?.message}
          ></Input>
          {errors?.email?.message && (
            <p className="text-red-500 bottom-0 absolute">
              {errors?.email?.message}
            </p>
          )}
        </div>
        <div className="relative">
          <Input
            name="password"
            placeholder="Enter your password"
            control={control}
            label="Password"
            type="password"
            error={errors?.password?.message}
          ></Input>
          {errors?.password?.message && (
            <p className="text-red-500 top-full  absolute">
              {errors?.password?.message}
            </p>
          )}
        </div>
        <div className="flex items-center mt-[50px] justify-between">
          <CheckBoxWrapp name="remember" control={control}>
            <span className="sub_checkbox">Remember me </span>
          </CheckBoxWrapp>
          <span className="font-semibold cursor-pointer">Forgot password</span>
        </div>
        <button type="submit" className="btn-submit relative">
          <div
            className={`w-9 h-9 rounded-full left-1/2 translate-x-[-1/2]  border-3 animate-spin border-t-transparent absolute  ${
              isSubmitting ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <span className={`${isSubmitting ? "opacity-0" : "opacity-100"}`}>
            Sign in
          </span>
        </button>
      </Form>
    </>
  );
};

export default FormSignIng;
