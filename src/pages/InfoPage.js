import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {  updateWorkMoney, updateWorkName, updateWorkPerecent } from "../app/worksSlice";
import "./InfoPage.scss";

function InfoPage() {
  const state = useLocation().state;
  const dispatch = useDispatch()

  const [newName, setNewName] = useState("");
  const [newMoney, setNewMoney] = useState("");
  const [newPerecent, setNewPerecent] = useState("");

  const works = useSelector(state => state.works.works);
  const work = works.find(worker => worker.id === state.id);


  const handleChangeName = e => {
    setNewName(e.target.value);
  };

  const handleChangeMoney = e => {
    setNewMoney(e.target.value);
  };

  const handleChangePerecent = e => {
    setNewPerecent(e.target.value);
  };

  const handleUpdateName = () => {
    if(newName){
        dispatch(updateWorkName({name:newName, id:work.id}))
    }
  };

  const handleUpdateMoney = () => {
    dispatch(updateWorkMoney({money:newMoney, id:work.id}))
  };

  const handleUpdatePerecent = () => {
    dispatch(updateWorkPerecent({perecent:newPerecent, id:work.id}))
  };

  return (
    <div className="infoWorker">
      <div>
        {work.name}{" "}
        <div style={{ border: 0 }}>
          <input
            placeholder="Новая имя"
            value={newName}
            onChange={handleChangeName}
          />{" "}
          <button onClick={handleUpdateName}>Сохранить</button>
        </div>
      </div>
      <div>
        {work.money}
        <div style={{ border: 0 }}>
          <input
            placeholder="Новая Зарплата"
            value={newMoney}
            onChange={handleChangeMoney}
          />{" "}
          <button onClick={handleUpdateMoney}>Сохранить</button>
        </div>
      </div>
      <div>
        {work.perecent}%
        <div style={{ border: 0 }}>
          <input
            placeholder="Изменить проценты"
            value={newPerecent}
            onChange={handleChangePerecent}
          />{" "}
          <button onClick={handleUpdatePerecent}>Сохранить</button>
        </div>
      </div>
      <div>
        {work.id}
      </div>
    </div>
  );
}

export default InfoPage;
