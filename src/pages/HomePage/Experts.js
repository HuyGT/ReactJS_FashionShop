import React from "react";

const Experts = ({ image }) => {
  return (
    <div className="experts-author mt-8">
      <h3 className="desc  text-center mb-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit atque
        nulla quibusdam fugiat sint, at consectetur sed sapiente saepe nostrum
      </h3>
      <div className="flex items-center justify-center gap-5">
        <div className="w-[50px] h-[50px] rounded-full ">
          <img
            className="w-full h-full object-cover rounded-full"
            src={image}
            alt=""
          />
        </div>
        <div>
          <p>NameNamename</p>
          <p>Name</p>
        </div>
      </div>
    </div>
  );
};

export default Experts;
