import styled from 'styled-components/native';

export const Container = styled.TextInput `
    //aqui é codigo CSS !!
    width: 100%;
    height: 40px;
    border-radius: 5px;
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND};
    padding: 0 16px;
    color: ${ ({theme}) => theme.COLORS.TEXT_LIGHT};
`;
