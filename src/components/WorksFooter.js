import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import newWork from "../work";

function WorksFooter({ handleAddDays }) {
  const works = useSelector(state => state.works.works);
  const [resultDays, setResultDays] = useState([]);

  useEffect(() => {
    works.forEach(() => {
      setResultDays(
        newWork.map(
          (v, i) =>
            Math.round(
              works.reduce((aggr, worker) => {
                if (+worker.days[i]) {
                  return aggr + +worker.days[i];
                } else return aggr;
              }, 0) * 10
            ) / 10
        )
      );
    });
  }, [handleAddDays, works]);

  return (
    <>
      <tr>
        <th>Зм/День</th>

        {newWork.map((day, i) => (
          <th key={day + i}>
            {Math.round(
              works.reduce((aggr, worker) => {
                if (+worker.days[i]) {
                  return aggr + +worker.days[i];
                } else return aggr;
              }, 0) * 10
            ) / 10}
          </th>
        ))}
        <th>
          {resultDays.reduce((aggr, val) => {
            if (val) {
              return aggr + val;
            } else {
              return aggr;
            }
          }, 0)}
        </th>
        <th>
          <Button fullWidth sx={{ fontSize: "30px" }} onClick={handleAddDays}>
            +
          </Button>
        </th>
      </tr>
    </>
  );
}

export default WorksFooter;
