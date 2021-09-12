import styled from "styled-components";

export default function DayHabit({day, days}){
    const selected = days.includes(day.id);
    
    return(
        <Day selected={selected}>
            {day.name}
        </Day>
    );
}


const Day = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({selected}) => selected ? '#d4d4d4' : 'white'};
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    color: ${({selected}) => selected ? 'white' : '#DBDBDB'};
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`