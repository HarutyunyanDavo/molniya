import React from "react";
import { Link, useNavigate } from "react-router-dom";

function InfoWorkRow({ work }) {
  const navigate = useNavigate();

  const handleShowInfo = () => {
    navigate("/about", { state: work });
  };

  return (
    <tr>
      <th>
        <button
          onClick={handleShowInfo}
          style={{ width: "100%", background: "rgb(229, 201, 165)" }}
        >
          {" "}
          {work.name}
        </button>
      </th>
      <th>
        {work.days.reduce((aggr, day) => {
          if (+day > 0) {
            return aggr + +day;
          } else {
            return aggr;
          }
        }, 0)}
      </th>
      <th>
        {work.days.reduce((aggr, day) => {
          if (+day > 0) {
            return aggr + +day * work.money;
          } else {
            return aggr;
          }
        }, 0) +
          (work.days.reduce((aggr, day) => {
            if (+day > 0) {
              return aggr + +day * work.money;
            } else {
              return aggr;
            }
          }, 0) /
            100) *
            work.perecent}
      </th>
    </tr>
  );
}

export default InfoWorkRow;
