import React from "react";
import { RiVisaLine } from "react-icons/ri";
import { FaApplePay, FaWallet } from "react-icons/fa";
import { AiFillCreditCard } from "react-icons/ai";
import { PaymentTypes } from "../../common/types";

const paymentMethods = [
  {
    id: 1,
    name: PaymentTypes.MOMO,
    icon: <FaWallet />,
    image: "https://demo.megapay.vn/public/assets/images/momo_icon.png",
  },
  {
    id: 2,
    name: PaymentTypes.VISA,
    icon: <RiVisaLine />,
    image: "https://logowiki.net/uploads/logo/v/visa.svg",
  },
  {
    id: 3,
    name: PaymentTypes.PAYPAL,
    icon: <FaApplePay />,
    image:
      "https://seeklogo.com/images/P/paypal-logo-C83095A82C-seeklogo.com.png",
  },
  {
    id: 4,
    name: PaymentTypes.BANK,
    icon: <AiFillCreditCard />,
    image:
      "https://cdn.haitrieu.com/wp-content/uploads/2022/02/Icon-Vietcombank.png",
  },
];

const Payment = ({ payment, setPayment }) => {
  // useClickActive(".checkout-method");
  const handleClick = (e) => {
    const dataname = e.target.dataset.name;
    setPayment(dataname);
  };
  return (
    <div>
      <h3 className="info-title">3. Payment method</h3>
      <div className="payment-methods-wrapp flex gap-5 mt-5">
        {paymentMethods.map((item) => (
          <div
            key={item.id}
            data-name={item.name}
            onClick={handleClick}
            className={`cursor-pointer checkout-method flex-1 p-2 ${
              payment === item.name ? "active" : ""
            }`}
            style={{ fontSize: "3.5rem" }}
          >
            <div className="w-[60px] h-[60px] mx-auto pointer-events-none">
              <img
                className="w-full h-full object-cover"
                src={item.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Payment;
