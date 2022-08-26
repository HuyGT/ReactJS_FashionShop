import React from "react";
import Input from "../../components/form/input/InputWrrapp";
import { useSelector } from "react-redux";

const Info = ({ control, errors }) => {
  const { profile } = useSelector((state) => state.authReducer);

  return (
    <div className="infomation-pay">
      <h3 className="info-title">1. Contast Infomation</h3>
      <div className="flex gap-5 my-3">
        <div className="relative w-full opacity-50">
          <Input
            name="fullName"
            placeholder="Enter your full name"
            defaultValue={profile.fullName}
            disabled={true}
            label="Full Name"
            control={control}
          ></Input>
          {errors?.fullName?.message && (
            <p className="text-red-500 top-full  absolute">
              {errors?.fullName?.message}
            </p>
          )}
        </div>
        <div className="relative w-full opacity-50">
          <Input
            name="email"
            placeholder="Enter your email"
            defaultValue={profile.email}
            disabled={true}
            label="Email Address"
            control={control}
          ></Input>
          {errors?.email?.message && (
            <p className="text-red-500 bottom-0 absolute">
              {errors?.email?.message}
            </p>
          )}
        </div>
      </div>

      <div className="flex gap-5">
        <div className="relative w-full">
          <Input
            name="phone"
            id="phone"
            placeholder="Enter your phone number"
            control={control}
            defaultValue={profile.phone}
            label="Phone number"
          ></Input>
          {errors?.phone?.message && (
            <p className="text-red-500 top-full absolute">
              {errors?.phone?.message}
            </p>
          )}
        </div>
        <div className="relative w-full">
          <Input
            name="address"
            id="address"
            placeholder="Enter your address"
            control={control}
            label="Address"
            defaultValue={profile.address}
          ></Input>
          {errors?.address?.message && (
            <p className="text-red-500 top-full  absolute">
              {errors?.address?.message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Info;
