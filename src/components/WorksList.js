import "./WorksList.scss";
import WorksHeader from "./WorksHeader";
import WorksRow from "./WorksRow";
import WorksFooter from "./WorksFooter";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import newWork from "../work";

export const WorksList = () => {
  const works = useSelector(state => state.works.works);

  const [update, setUpdate] = useState(false);

  const handleAddDays = () => {
    setUpdate(true);
  };

  const stopUpdate = () => {
    setUpdate(false);
  };

  return (
    <table border="1" className="list-container">
      <tbody>
        <WorksHeader />
        {works
          ? works.map(work => (
              <WorksRow
                work={work}
                key={work.id}
                stopUpdate={stopUpdate}
                updateDays={update}
              />
            ))
          : null}
        <WorksFooter handleAddDays={handleAddDays} />
      </tbody>
    </table>
  );
};
