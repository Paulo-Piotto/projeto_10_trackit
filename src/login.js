import styled from "styled-components";
import { useState } from "react";
import logo from './assets/logo.png';
import {Link, useHistory} from 'react-router-dom';
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Login({setUser, user}){

    const [loading, setLoading] = useState(false);
    const history = useHistory();
    
    function entry(event){
        event.preventDefault();
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', user)
            .then((resp) => {
                setUser({...resp.data});
                history.push('/today');
            })
            .catch(err => {
                setLoading(false);
                setUser({
                    email: '',
                    password: ''
                  });
                alert('algo está errado')
            });
        setLoading(true);
        

    }

    return(
        <LoginContainer>
            <img src={logo} alt='logo'/>
            <InputWrapper onSubmit={entry}>
                <input type='email' 
                placeholder='email' 
                onChange={(e) => setUser({...user, email: e.target.value})} 
                value={user.email}
                required
                disabled={loading}
                 />

                <input type='password' 
                placeholder='senha' 
                onChange={(e) => setUser({...user, password: e.target.value})} 
                value={user.password}
                required
                disabled={loading}
                />

                <button type='submit'>
                {loading ? <Loader
                type="ThreeDots"
                color="#FFFFFF"
                height={50}
                width={50}
                /> 
                : <span>Entrar</span>}
                
                </button>
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
    height: 100vh;
    background-color: white;

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

const InputWrapper = styled.form`
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