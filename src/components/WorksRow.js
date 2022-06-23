import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { deleteWork, updateDay } from "../app/worksSlice";

function WorksRow({ work, updateDays, stopUpdate }) {
  const dispatch = useDispatch();

  const [day, setDay] = useState("");
  const [workDay, setWorkDay] = useState("");

  useEffect(() => {
    if (updateDays) {
      if ((day > 0 && workDay >= 0) || workDay === "-") {
        dispatch(updateDay({ id: work.id, day, work: workDay }));
        stopUpdate();
        setDay(+day + 1);
        setWorkDay("");
      } else {
        stopUpdate();
      }
    }
  }, [updateDays]);

  const handleChangeDay = e => {
    setDay(e.target.value);
  };
  const handleChangeWorkDay = e => {
    setWorkDay(e.target.value);
  };

  const handleDelete = () => {
    if (prompt(`Удалить ${work.name}`) === "mnmn343458") {
      dispatch(deleteWork({ id: work.id }));
    }
  };

  return (
    <>
      <tr>
        <th>{work.name}</th>
        {work.days.map((day, i) => (
          <td key={i}>{day}</td>
        ))}
        <th className="add-day">
          <input
            type="number"
            value={day}
            onChange={handleChangeDay}
            placeholder="День"
          />
        </th>
        <th className="add-day">
          <input
            type="text"
            value={workDay}
            onChange={handleChangeWorkDay}
            placeholder={work.name}
          />
        </th>
        <th>
          <button onClick={handleDelete}>X</button>
        </th>
      </tr>
    </>
  );
}

export default WorksRow;
