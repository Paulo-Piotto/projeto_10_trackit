import styled from "styled-components";
import Header from "./header";
import Footer from "./footer";


export default function History(){
    return (
    <>
        <Header />
        <Container>
            <h3>Histórico</h3>
            <p>Em breve você poderá ver o histórico dos seus hábitos aqui!</p>
        </Container>
        <Footer />
    </>
    );
}

const Container = styled.div`
    padding: 70px 0 70px 15px;
    width: 100vw;


    h3{
        color: #126BA5;
        font-size: 23px;
        margin: 28px 0 17px 0;
    }

    p{
        color: #666666;
        font-size: 18px;
    }
`

export {
    Container
}