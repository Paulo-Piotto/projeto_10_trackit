import styled from "styled-components";
import { useState } from "react";

export default function Day({day, id, setDays, days}){

    const [selected, setSelected] = useState(false);

    function select(){
        if(!selected){
            setDays([...days, id]);
            setSelected(true);
        }else{
            setSelected(false);
            setDays(days.filter(el => 
                el === day.id ? false : true))
        }

       
    }

    return(
        <DayContainer selected={selected} onClick={select}>
            {day.name}
        </DayContainer>
    );
}

const DayContainer = styled.div`
    width: 30px;
    height: 30px;
    background-color: ${({selected}) => !selected ? 'white' : '#d4d4d4'};
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    font-size: 20px;
    color: ${({selected}) => !selected ? '#DBDBDB' : 'white'} ;
    margin-left: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
`