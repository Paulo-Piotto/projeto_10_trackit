import styled from "styled-components";
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';

export default function Login({setUser, user}){
    

    return(
        <LoginContainer>
            <img src={logo} alt='logo'/>
            <InputWrapper>
                <input type='text' placeholder='email' />
                <input type='text' placeholder='senha' />
                <button>Entrar</button>
            </InputWrapper>
            <Link to='/signUp'>
                <span>Não tem uma conta? Cadastre-se!</span>
            </Link>
        </LoginContainer>
    );
}

const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;

    img{
        width: 180px;
        height: 180px;
        margin: 68px 0 32px 0;
    }

    a{
        color: #52B6FF;
        font-size: 14px;
        margin-top: 25px;
    }
`

const InputWrapper = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;

    input{
        height: 45px;
        margin-bottom: 6px;
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        outline: none;
        padding: 10px;
        font-size: 20px;
    }

    input::placeholder{
        color: #DBDBDB;
    }

    button{
        height: 45px;
        color: white;
        background-color: #52B6FF;
        border-radius: 5px;
        border: none;
    }
`

export {
    LoginContainer,
    InputWrapper
}