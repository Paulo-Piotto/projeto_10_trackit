import { useState, useEffect, useContext } from "react";
import axios from "axios";
import UserContext from "./userContext";
import Header from "./header";
import Footer from "./footer";
import { Container } from "./history";
import TodayHabit from "./todayHabit";
import dayjs from "dayjs";


export default function Today(){
    const user = useContext(UserContext);
    const [todayHabits, setTodayHabits] = useState(null);
    const [allDone, setAllDone] = useState([]);
    require("dayjs/locale/pt-br")
    dayjs.locale("pt-br")

    const data = dayjs().format('dddd,  DD/MM'); 

    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((resp) => setTodayHabits([...resp.data]));
    }, [])

    return (
    <>
        <Header />
        <Container>
            <h3 onClick={() => console.log(allDone)}>{data}</h3>
            <p>{!todayHabits || todayHabits[0] === undefined ? 'Nenhum hábito marcado para hoje' : ''}</p>

            {todayHabits ? todayHabits.map((habit) => 
                <TodayHabit 
                key={habit.id} 
                habit={habit}
                allDone={allDone}
                setAllDone={setAllDone}
                todayHabits={todayHabits}
                />)
            :
                'Carregando...'
            }
            
        </Container>
        <Footer />
    </>
    );
}