import styled from "styled-components";
import { useState, useContext } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import Day from "./day";
import UserContext from "./userContext";

export default function CreateHabit({create, setCreate, habits, setHabits}){
    const week = [
        { 
            name: 'D',
            id: 0 
        },
        { 
            name: 'S',
            id: 1 
        },
        { 
            name: 'T',
            id: 2 
        },
        { 
            name: 'Q',
            id: 3 
        },
        { 
            name: 'Q',
            id: 4 
        },
        { 
            name: 'S',
            id: 5 
        },
        { 
            name: 'S',
            id: 6 
        },
        
       
    ];
    const user = useContext(UserContext);
    const history = useHistory();
    const [days, setDays] = useState([]);
    const [newHabit, setNewHabit] = useState('');

    function saveNewHabit(){
        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            }
        }
        const body = {
            name: newHabit,
            days: days
        }
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', body, config)
            .then((resp) => {
                setCreate(false);
                setDays([]);
                setNewHabit('');
                setHabits([...habits, resp.data]);
            })
            .catch(() => console.error);
    }

    return(
        <CreateContainer create={create}>
            <input 
            type='text' 
            placeholder='nome do hábito'
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            />
            <div>
                {week.map((day, index) => 
                <Day 
                key={index}
                id={index}
                day={day}
                setDays={setDays}
                days={days}
                ></Day>)}
            </div>
            <ButtonsContainer>
                <span onClick={() => setCreate(false)}>Cancelar</span>
                <button onClick={saveNewHabit}>Salvar</button>
            </ButtonsContainer>
        </CreateContainer>
    );
}

const CreateContainer = styled.div`
    background-color: white;
    width: 95%;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;
    display: ${(props) => props.create ? 'block' : 'none'};

    input{
        width: 100%;
        height: 45px;
        border: 1px solid #d4d4d4;
        outline: none;
        border-radius: 5px;
        padding: 10px;
        margin-bottom: 8px;
        font-size: 20px;
    }

    input::placeholder{
        color: #DBDBDB;
    }

    div{
        display: flex;
    }

`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    margin: 30px 0 0 35%;

    span{
        font-size: 16px;
        color: #52B6FF;
        margin-right: 23px;
    }

    button{
        background-color: #52B6FF;
        color: white;
        font-size: 16px;
        border-radius: 5px;
        border: none;
        outline: none;
        width: 84px;
        height: 35px;
    }
`