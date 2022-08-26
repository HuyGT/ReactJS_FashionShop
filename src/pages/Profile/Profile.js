import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { VALIDATE_YUP } from "../../common/validateYup";
import { useSelector, useDispatch } from "react-redux/es/exports";
import Form from "../../components/form/Form";
import Input from "../../components/form/input/InputWrrapp";
import SidebarProfile from "../../components/sidebarProfile/SidebarProfile";
import { actChangeProfile } from "../../redux/actions/auth/authAction";
import useBackPage from "../../hooks/useBackPage";
import { ROUTER_PATH } from "../../common/routerLink";
import { useHistory } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./style.scss";

const schema = Yup.object({
  fullName: VALIDATE_YUP.TITLE,
});

const Profile = () => {
  useBackPage();
  const { height } = useSelector((state) => state.headerReducer);
  const { profile } = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();
  const history = useHistory();
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (values) => {
    const data = {
      ...profile,
      ...values,
    };
    return new Promise((resolver) => {
      setTimeout(() => {
        resolver();
        dispatch(actChangeProfile(data));
        reset();
      }, 2000);
    });
  };

  return (
    <div className="profile" style={{ paddingTop: height }}>
      <div className="container">
        <SidebarProfile></SidebarProfile>
        <div className="profile-main-wrapp">
          <h2
            className="title inline-block"
            onClick={() => history.push(ROUTER_PATH.USER.path)}
          >
            <BsArrowLeft className="icon-back mr-5 inline-block"></BsArrowLeft>
            <span>Back to me</span>
          </h2>
          <div className="profile-main">
            <div className="w-[400px] h-[400px] relative">
              <label
                htmlFor="file-avata"
                className=" cursor-pointer hover:opacity-90"
              >
                <img
                  className="w-full h-full object-cover pointer-events-none"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGdpcmx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </label>
              <div className="absolute w-full ">
                <input type="file" className="hidden" id="file-avata" />
              </div>
            </div>
            <Form handleSubmit={handleSubmit(onSubmit)}>
              <div className="relative pb-5">
                <Input
                  name="fullName"
                  placeholder="Enter your full Name"
                  defaultValue={profile.fullName}
                  control={control}
                  label="Full Name"
                  type="text"
                ></Input>
                {errors?.fullName?.message && (
                  <p className="text-red-500 bottom-0  absolute">
                    {errors?.fullName?.message}
                  </p>
                )}
              </div>
              <div className="relative opacity-50 ">
                <Input
                  name="email"
                  placeholder="Enter your email"
                  defaultValue={profile.email}
                  control={control}
                  disabled={true}
                  label="Email Address"
                ></Input>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
