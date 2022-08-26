import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { VALIDATE_YUP } from "../../common/validateYup";
import Form from "../../components/form/Form";
import CheckBoxWrapp from "../../components/form/input/CheckBoxWrapp";
import Input from "../../components/form/input/InputWrrapp";
import { useDispatch } from "react-redux";
import { actRegiter } from "../../redux/actions/userAction";

const schema = Yup.object({
  email: VALIDATE_YUP.EMAIL,
  password: VALIDATE_YUP.PASSWORD,
  confirmPassword: VALIDATE_YUP.PASSWORDCONFIRMATION,
  term: VALIDATE_YUP.TERM,
});

const FormSingUp = () => {
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
    const index = values.email.indexOf("@");
    const fullName = values.email.slice(0, index);

    const valuesRegister = {
      ...values,
      fullName,
      role: "user",
    };

    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(actRegiter(valuesRegister));
        reset();
      }, 2000);
    });
  };

  return (
    <>
      <h2 className="login-title">Wellcome </h2>
      <p className="title-sup">Fill out the form to become a part of us</p>
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
            placeholder="PassWord minimum 8 characters..."
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
        <div className="relative mt-5">
          <Input
            name="confirmPassword"
            placeholder="Confirm Password"
            control={control}
            label="Confirm Password"
            type="password"
            error={errors?.confirmPassword?.message}
          ></Input>
          {errors?.confirmPassword?.message && (
            <p className="text-red-500 top-full  absolute">
              {errors?.confirmPassword?.message}
            </p>
          )}
        </div>
        <div className="flex items-center relative justify-between mt-5">
          <CheckBoxWrapp name="term" control={control}>
            <span className="sub_checkbox">I agree to the term of service</span>
          </CheckBoxWrapp>
          <p className="text-red-500 -bottom-9  absolute pt-4 ">
            {errors?.term?.message}
          </p>
        </div>
        <button type="submit" className="btn-submit relative">
          <div
            className={`w-9 h-9 rounded-full left-1/2 translate-x-[-1/2]  border-3 animate-spin border-t-transparent absolute  ${
              isSubmitting ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          <p className={`${isSubmitting ? "opacity-0" : "opacity-100"}`}>
            Save
          </p>
        </button>
      </Form>
    </>
  );
};

export default FormSingUp;
