import React from "react";
import Flag from "react-world-flags";
import ItemMethod from "./ItemMethod";

const Country = ({ country, setCountry }) => {
  const handleClick = (e) => {
    const dataName = e.target.dataset.name;
    setCountry(dataName);
  };

  return (
    <div>
      <h3 className="info-title">2. Choose Country</h3>
      <div className=" flex gap-5 mt-5">
        <ItemMethod datatype="vn" name="Việt Nam" handleClick={handleClick}>
          <Flag code={"vn"} style={{ height: "20px", width: "30px" }} />
        </ItemMethod>
        <ItemMethod datatype="cn" name="Trung Của" handleClick={handleClick}>
          <Flag code={"cn"} style={{ height: "20px", width: "30px" }} />
        </ItemMethod>
        <ItemMethod datatype="us" name="Mỹ" handleClick={handleClick}>
          <Flag code={"us"} style={{ height: "20px", width: "30px" }} />
        </ItemMethod>
        <ItemMethod datatype="jp" name="Nhật" handleClick={handleClick}>
          <Flag code={"jp"} style={{ height: "20px", width: "30px" }} />
        </ItemMethod>
        <ItemMethod datatype="gb" name="Anh" handleClick={handleClick}>
          <Flag code={"gb"} style={{ height: "20px", width: "30px" }} />
        </ItemMethod>
      </div>
    </div>
  );
};

export default Country;
