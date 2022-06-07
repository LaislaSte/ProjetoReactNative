import styled from 'styled-components/native';

export const Container = styled.View `
    //aqui é codigo CSS !!
    flex: 1;
    height: 100%;
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND};
`;

export const Header = styled.View `
    width: 100%;
    height: 100px; 
    justify-content: flex-end;
    padding: 0 24px 16px;
    background-color: ${ ({theme}) => theme.COLORS.BACKGROUND_DARK};
`;

export const Title = styled.Text `
    font-size: 1.4rem;
    font-family: ${ ({theme}) => theme.FONTS.BOLD};
    color: ${ ({theme}) => theme.COLORS.TEXT_LIGHT};
    margin-bottom: 8px;
`;
export const Subtitle = styled.Text `
    font-size: 1.4rem;
    font-family: ${ ({theme}) => theme.FONTS.MEDIUM};
    color: ${ ({theme}) => theme.COLORS.TEXT_LIGHT};
    margin-bottom: 8px;
`;
export const Text = styled.Text `
    font-size: 1rem;
    font-family: ${ ({theme}) => theme.FONTS.REGULAR};
    color: ${ ({theme}) => theme.COLORS.TEXT_LIGHT};
    margin-bottom: 8px;
`;

export const Content = styled.View `
    margin: 5% 0;
    padding: 2rem;
`;