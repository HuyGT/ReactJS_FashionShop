import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { modalAction } from "../../redux/actions/modal";
import "./style.scss";

const ModalLayout = ({ children }) => {
  const modalRef = useRef();
  const isShow = useSelector((state) => state.modalReducer.isShow);
  const dispatch = useDispatch();

  const handleHideModal = (e) => {
    const modal = modalRef.current;
    const target = e.target;
    if (target.contains(modal)) {
      dispatch(modalAction.actHideModal());
    }
  };

  return (
    <div
      className={`modal-layout ${isShow ? "isShow-modal" : ""}`}
      onClick={handleHideModal}
      ref={modalRef}
    >
      {children}
    </div>
  );
};

export default ModalLayout;
