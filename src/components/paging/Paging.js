import React, { memo } from "react";

import "./style.scss";

const Paging = ({ handleCallPage1, handleCallPage2, handleCallAllApi }) => {
  return (
    <div className="paging">
      <button onClick={() => handleCallPage1(1)} className="p-3 btn-paging">
        1
      </button>
      <button onClick={() => handleCallPage2(2)} className="p-3 btn-paging">
        2
      </button>
      <span>|</span>
      <button className="btn-paging" onClick={handleCallAllApi}>
        View All
      </button>
    </div>
  );
};

export default memo(Paging);
