import React, { useState } from "react";
import { BiStore } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { GiAirplaneDeparture } from "react-icons/gi";
import ItemMethod from "./ItemMethod";
import useClickActive from "../../hooks/useClickActive";

const Delivery = ({ setDelivery }) => {
  const [showDelivery, setShowDelivery] = useState(false);

  useClickActive(".deliv-method");

  const handleClick = (e) => {
    const dataName = e.target.dataset.name;
    setDelivery(dataName);
  };
  const handleStore = (e) => {
    setShowDelivery(false);
    const dataName = e.target.dataset.name;
    setDelivery(dataName);
  };
  const handleShowDelevery = () => {
    setShowDelivery(!showDelivery);
    setDelivery("");
  };

  return (
    <div className="delivery-pay">
      <h3 className="info-title">2. Delivery method</h3>
      <div className="deliv-method-wrapp flex gap-5 mt-5">
        <ItemMethod datatype="store" name="Store" handleClick={handleStore}>
          <BiStore></BiStore>
        </ItemMethod>
        <ItemMethod name="Delivery" handleClick={handleShowDelevery}>
          <TbTruckDelivery></TbTruckDelivery>
        </ItemMethod>

        <div
          className={`${
            showDelivery ? "opacity-100 visible" : "opacity-0 invisible"
          } flex gap-5`}
        >
          <ItemMethod
            datatype="fast"
            name="Fast Shipping"
            handleClick={handleClick}
          >
            <GiAirplaneDeparture></GiAirplaneDeparture>
          </ItemMethod>
          <ItemMethod
            datatype="normal"
            name="Normal shipping"
            handleClick={handleClick}
          >
            <TbTruckDelivery></TbTruckDelivery>
          </ItemMethod>
        </div>
      </div>
    </div>
  );
};

export default Delivery;
