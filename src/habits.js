import Header from "./header";
import Footer from "./footer";
import { Container } from "./history";
import styled from "styled-components";

export default function Habits(){
    return (
    <>
        <Header />
        <Container>
            <h3>Meus Hábitos</h3>
            <AddButton>+</AddButton>
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