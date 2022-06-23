import { Button, Container } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetAll } from '../app/worksSlice';

function ResetAll() {

    const dispatch = useDispatch()

    const handleClick = () => {
        if(prompt('Сбросить данные') === 'mnmn343458'){
            dispatch(resetAll())
        }else{
            alert('Неправильный пароль')
        }
        
    }

    return (
        <Container sx={{mt: '75px', textAlign: 'center'}}>
            <Button variant="outlined" onClick={handleClick}>Сброс данные</Button>
        </Container>
    );
}

export default ResetAll;