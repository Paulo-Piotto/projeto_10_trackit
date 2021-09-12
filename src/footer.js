import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <FooterContainer>
            <Link to='/habits'>
                <span>Hábitos</span>
            </Link>
            
            <Link to='/today'>
                <TodayButton>
                    Hoje
                </TodayButton>
            </Link>
            

            <Link to='/history'>
                <span>Histórico</span>
            </Link>
            
        </FooterContainer>
    );
}

const FooterContainer = styled.footer`
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 70px;
    background-color: white;
    color: #52B6FF;
    font-size: 18px;
    display: flex;
    padding: 0 32px 0 32px;
    justify-content: space-between;
    align-items: center;
    z-index: 1;

    a{
        color: inherit;
        text-decoration: none;
    }
`

const TodayButton = styled.div`
    width: 91px;
    height: 91px;
    border-radius: 100px;
    background-color: #52B6FF;
    color: white;
    position: relative;
    bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img{
        position: absolute;
        right: 5px;
        bottom: 6px;
    }
`
