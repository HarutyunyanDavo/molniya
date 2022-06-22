import React from "react";
import { useSelector } from "react-redux";
import InfoWorkRow from "./InfoWorkRow";
import { Container } from "@mui/material";
import "./InfoWorkers.scss";

function InfoWorkers() {
  const works = useSelector(state => state.works.works);

  return (
    <Container>
      <table border="1" className="info-works">
        <tbody>
          <tr>
            <th>Имя</th>
            <th>Замеси</th>
            <th>Зарплата</th>
          </tr>
          {works.map(work => (
            <InfoWorkRow work={work} key={work.id} />
          ))}
        </tbody>
      </table>
    </Container>
  );
}

export default InfoWorkers;
