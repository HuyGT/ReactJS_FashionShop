import React from "react";
import "./style.scss";

export default function CardAnalytics(props) {
  const { title, value, percent, product, customer, earning, order } = props;
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col mt-0">
            <h5 className="card-title">{title}</h5>
          </div>
          <div className="col-auto">
            <div
              className="stat-icon"
              style={{
                background: product
                  ? "#fd79a8"
                  : customer
                  ? "#74b9ff"
                  : earning
                  ? "#55efc4"
                  : order && "#ffeaa7",
                color: product
                  ? "#e84393"
                  : customer
                  ? "#0984e3"
                  : earning
                  ? "#00b894"
                  : order && "#fdcb6e",
              }}
            >
              {product && <i className="fa-solid fa-truck "></i>}
              {customer && <i className="fa-solid fa-users "></i>}
              {earning && <i className="fa-solid fa-dollar-sign"></i>}
              {order && <i className="fa-solid fa-cart-shopping "></i>}
            </div>
          </div>
        </div>
        <h1 className="mt-1 mb-3">{value}</h1>
        {!product && !customer && (
          <div className="mb-0">
            {percent < 0 ? (
              <span className="text-danger">{percent}%</span>
            ) : (
              <span className="text-success">{percent}%</span>
            )}
            <span className="text-muted"> Since last month</span>
          </div>
        )}
      </div>
    </div>
  );
}
