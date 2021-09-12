import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5"
import { useContext } from "react";
import DayHabit from "./dayHabit";
import UserContext from "./userContext";
import axios from "axios";

export default function Habit({habit, setHabits, habits}){
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
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    function deleteHabit(){
        const confirm = window.confirm('Quer mesmo deletar esse hábito?')
        if(confirm){
            axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${habit.id}`, config)
            .then(() => setHabits(habits.filter((el) =>
                el.name === habit.name ? false : true
            )))
        }  
    }

    return(
        <HabitContainer>
            <section>
                <span>{habit.name}</span>
                <IoTrashOutline onClick={deleteHabit} />
            </section>
            <div>
                {week.map((day) => 
                <DayHabit
                days={habit.days}
                day={day}
                key={day.id}
                />)}
            </div>
        </HabitContainer>
    );
}

const HabitContainer = styled.div`
    background-color: white;
    width: 95%;
    border-radius: 5px;
    padding: 18px;
    margin-bottom: 10px;

    div{
        display: flex;
    }

    section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 8px;
    }
`