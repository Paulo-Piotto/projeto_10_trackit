import { IoCheckmark } from "react-icons/io5"
import styled from "styled-components";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import UserContext from "./userContext";

export default function TodayHabit({habit, allDone, setAllDone, todayHabits}){
    const [selected, setSelected] = useState(false);
    const user = useContext(UserContext);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        if(habit.done){
            setSelected(true);
        }
    }, [])

    


    function setDone(){
        if(!selected){
            setSelected(true);
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/check`,{}, config)
            .then(() => setAllDone([...allDone, habit.id]));
        }
        else if(selected){
            setSelected(false);
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}/uncheck`,{}, config)
            .then(() => setAllDone([...allDone].filter((el) => 
                el === habit.id ? false : true
            )));

        }
    }

    return (
        <TodayContainer onClick={setDone}>
            <section>
                <h4>{habit.name}</h4>
                <span>Sequência atual: {habit.currentSequence} dias</span>
                <span>Seu recorde: {habit.highestSequence} dias</span>
            </section>                
             <Check selected={selected}>
                 <IoCheckmark />
            </Check>
        </TodayContainer>
    );
}

const TodayContainer = styled.div`
    width: 95%;
    background-color: white;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #666666;
    margin-top: 20px;

    section{
        display: flex;
        flex-direction: column;
        word-wrap: break-word;
        width: 80%;
    }

    h4{
        font-size: 20px;
        margin-bottom: 10px;
    }

    span{
        font-size: 13px;
    }
`

const Check = styled.div`
    width: 69px;
    height: 69px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({selected}) => selected ? '#8FC549' : '#EBEBEB'};
    border-radius: 5px;
    color: white;
    font-size: 40px;
`