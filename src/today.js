import { useState, useEffect, useContext } from "react";
import axios from "axios";
import styled from "styled-components";
import UserContext from "./userContext";
import Header from "./header";
import Footer from "./footer";

export default function Today(){
    const user = useContext(UserContext);
    const config = {
        headers: {
            Authorization: `Bearer ${user.token}`
        }
    }

    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then((resp) => console.log(resp.data))
    }, [])

    return (
    <>
        <Header />
        <Container>
            <h3>Segunda, 17/05</h3>
            <p></p>
        </Container>
        <Footer />
    </>
    );
}

const Container = styled.div`
    width: 100vw;
    background-color: #E5E5E5;
    margin: 70px 0;
`