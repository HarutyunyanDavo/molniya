import React, { useState } from "react";
import newWork from "../work";

function WorksHeader() {
  const mounts = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь",
  ];

  const [thisMount, setThisMount] = useState(0);

  const handleChangeMount = () => {
    if (thisMount === 11) {
      setThisMount(0);
    } else {
      setThisMount(thisMount + 1);
    }
  };

  return (
    <tr>
      <th>
        <button onClick={handleChangeMount} style={{ width: "100%" }}>
          {mounts[thisMount]}
        </button>
      </th>
      {newWork.map((day, i) => (
        <td key={i}>{i + 1}</td>
      ))}
      <th>День</th>
      <th>Замес</th>
    </tr>
  );
}

export default WorksHeader;
