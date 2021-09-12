import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "./userContext";
import Header from "./header";
import Footer from "./footer";
import { Container } from "./history";
import Habit from "./Habit";
import CreateHabit from "./createHabit";



export default function Habits(){

    const user = useContext(UserContext);
    const [habits, setHabits] = useState(null);
    const [create, setCreate] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }


    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then((resp) => {
                setHabits([...resp.data])
            })
    }, [])


    return (
    <>
        <Header />
        <Container>
            <Content>
            <h3>Meus Hábitos</h3>
            <AddButton onClick={() => setCreate(true)}>+</AddButton>
            <CreateHabit create={create} setCreate={setCreate} setHabits={setHabits} habits={habits}/>
            {habits ? habits.map((habit) => <Habit setHabits={setHabits} habits={habits} key={habit.id} habit={habit} />)
            :<p>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</p>
            }
            </Content>
        </Container>
        <Footer />
    </>
    );
}

const AddButton = styled.button`
    width: 40px;
    height: 35px;
    color: white;
    background-color: #52B6FF;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 27px;
    position: absolute;
    right: 18px;
    top: 85px;
`

const Content = styled.div`
    margin-bottom: 80px;
`