import {Link, useHistory} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import { LoginContainer, InputWrapper } from "./login";
import logo from './assets/logo.png';
import Loader from "react-loader-spinner";


export default function SignUp(){
    const history = useHistory();
    const [newUser, setNewUser] = useState({
        email: '',
        password: '',
        name: '',
        image: ''
    });
    const [loading, setLoading] = useState(false);
    function register(event){
        event.preventDefault();
        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up', newUser)
            .then((resp) => history.push('/'))
            .catch((resp) => {
                setLoading(false)
                setNewUser({
                    email: '',
                    password: '',
                    name: '',
                    image: ''
                })
                alert('algo deu errado')
            })
        setLoading(true);
    }


    return(
        <LoginContainer>
        <img src={logo} alt='logo'/>
        <InputWrapper onSubmit={register}>
            <input type='email' placeholder='email' value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})} 
            required
            disabled={loading}
            />

            <input type='password' placeholder='senha' value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})} 
            required
            disabled={loading}
            />

            <input type='text' placeholder='nome' value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})} 
            required
            disabled={loading}
            />

            <input type='url' placeholder='foto' value={newUser.image} onChange={(e) => setNewUser({...newUser, image: e.target.value})} 
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
                : <span>Cadastrar</span>}
            </button>
        </InputWrapper>
        <Link to='/'>
            <span>Já tem uma conta? Faça login!</span>
        </Link>
    </LoginContainer>
    );
}