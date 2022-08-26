import React from "react";
import BackTop from "../../components/backTop/BackTop";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import DarkMode from "../../components/toggleDarkMode/DarkMode";

const LayoutUser = ({ children }) => {
  return (
    <div>
      <Header></Header>
      {children}
      <DarkMode></DarkMode>
      <BackTop></BackTop>
      <Footer></Footer>
    </div>
  );
};

export default LayoutUser;
