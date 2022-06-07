import React from "react";
import { Container, HeaderCard, Icon, Icon2, CloseIcon } from './style'

import { Subtitle, Text } from "../../screens/Home/style";

//import { hedImg } from "../../assets/makeup.jpg";

//utilizando todos os recursos do textinputprops
export function Card(){
    return(
        <Container>
            <CloseIcon>
                <Icon/>
                <Icon2 />
            </CloseIcon>
            <HeaderCard>
                <Subtitle>Thats my title</Subtitle>
            </HeaderCard>
            <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat obcaecati facere ratione quae architecto eligendi optio amet voluptates sapiente!</Text>
        </Container>
    );
}
