import React, { useState } from "react";
import { Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { addWork } from "../app/worksSlice";

function AddWork() {
  const [name, setName] = useState("");
  const [money, setMoney] = useState('');
  const [perecent, setPerecent] = useState('')

  const dispatch = useDispatch();

  const handleChange = e => {
    setName(e.target.value);
  };

  const handleChangeMoney = e => {
    setMoney(e.target.value);
  };

  const handleChangePerecent = e => {
    setPerecent(e.target.value)
  }

  const hanldeClick = () => {
    if (name && money && perecent) {
      dispatch(addWork({name, money, perecent}));
      setName("");
      setMoney('')
      setPerecent('')
    }
  };

  return (
    <Container sx={{ mt: 5, display: 'flex', justifyContent: 'space-evenly' }}>
      <TextField value={name} onChange={handleChange} placeholder='Имя'/>
      <TextField type='number' value={money} onChange={handleChangeMoney} placeholder="Зарплата"/>
      <TextField type='number' value={perecent} onChange={handleChangePerecent} placeholder='%'/>
      <Button onClick={hanldeClick}>Добавить</Button>
    </Container>
  );
}

export default AddWork;
