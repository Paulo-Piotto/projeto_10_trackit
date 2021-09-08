import styled from "styled-components";
import logo from './assets/logo.png';
import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <LoginContainer>
            <img src={logo} alt='logo'/>
            <InputWrapper>
                <input type='text' placeholder='email' />
                <input type='text' placeholder='senha' />
                <button>Entrar</button>
            </InputWrapper>
            <Link to='/'>
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
`

const InputWrapper = styled.div`
    width: 80%;
`