import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { LoginContainer, InputWrapper } from "./login";
import logo from './assets/logo.png';


export default function SignUp(){
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });

    function register(){
        

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', newUser)
            .then((resp) => history.push('/'))
            .catch((resp) => alert('algo deu errado'))
    }


    return(
        <LoginContainer>
        <img src={logo} alt='logo'/>
        <InputWrapper>
            <input type='text' placeholder='email' value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} />

            <input type='password' placeholder='senha' value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} />

            <input type='text' placeholder='nome' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} />

            <input type='text' placeholder='foto' value={newUser.image} onChange={(e) => setNewUser({...newUser, image: e.target.value})} />

            <button onClick={register}>Cadastrar</button>
        </InputWrapper>
        <Link to='/signUp'>
            <span>Já tem uma conta? Faça login!</span>
        </Link>
    </LoginContainer>
    );
}