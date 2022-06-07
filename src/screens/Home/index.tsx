import React from "react";
import {Text} from 'react-native';

//imprtando meu componente estilizado:
import { Container, Header, Title, Content } from './style'
//importando o componente input (que se repete)
import { Input } from "../../components/input";
import { Card } from "../../components/card";

//importando imagem pro header:
//import { hedImg } from "../../assets/makeup.jpg";

export default function Home(){
    return(
        <Container>
            <Header> 
                <Title>MemorizeStudio</Title>
                <Input placeholder="Search" />
            </Header>

            <Content>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </Content>

        </Container>
    );
}
