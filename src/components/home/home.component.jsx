import React from 'react'
import logo from '../../assets/logo-white.png'
import {Header, logoBox, TextBox, Logo, Container} from './home.styles'
const Home = () => (
    <Header>
        <Container>
        <logoBox>
            <Logo src={logo} alt="Logo"/>
        </logoBox>
        <TextBox>
            <h1 className="heading-primary">
                <span className="heading-primary--main">Outdoors</span>
                <span className="heading-primary--sub">is where life happens</span>
            </h1>
            <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
        </TextBox>
        </Container>
    </Header>
)

export default Home