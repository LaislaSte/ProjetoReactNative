import styled from 'styled-components/native';

export const Container = styled.View `
    //aqui é codigo CSS !!
    align-items: center;
    width:100%;
    background-color: ${ ({theme}) => theme.COLORS.PRIMARY_700};
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 10px;
`;

export const HeaderCard = styled.View`
    display: grid ;
    margin-bottom: 10px;
`;

export const CloseIcon = styled.View`
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;
    margin-left: 90%;
`;
export const Icon = styled.View`
    height: 2px;
    width: 30px;
    transform: rotate(45deg);
    background-color: ${ ({theme}) => theme.COLORS.PRIMARY_900};
    
`;
export const Icon2 = styled.View`
    height: 2px;
    width: 30px;
    transform: rotate(-45deg) translateY(-2px);
    background-color: ${ ({theme}) => theme.COLORS.PRIMARY_900};
    
`;
