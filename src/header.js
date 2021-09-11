import styled from "styled-components";
import { useContext } from "react";
import UserContext from "./userContext";

export default function Header(){
    const user = useContext(UserContext);

    return(
        <HeaderContainer>
            <h1>TrackIt</h1>
            <img src={user.image} alt='' />
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 70px;
    background-color: #126BA5;
    padding: 0 18px 0 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-family: 'Playball', cursive;
    font-size: 40px;
    z-index: 1;

    img{
        width: 51px;
        height: 51px;
        border-radius: 100px;
    }

`