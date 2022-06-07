import React from "react";
import { TextInputProps } from "react-native";
//imprtando meu componente estilizado:
import { Container } from './style'

//utilizando todos os recursos do textinputprops
export function Input({...rest}: TextInputProps){
    return(
        <Container {...rest} />
    );
}
