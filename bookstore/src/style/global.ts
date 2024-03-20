import 'sanitize.css';
import { createGlobalStyle } from 'styled-components';
import { ThemeName } from '../style/theme';

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
    body {
        margin: 0;
        padding: 0;
        background-color: ${(props) => (props.themeName === 'light' ? 'white' : 'black')};
    }

    h1{
        margin: 0;
        padding: 0;
    }
    * {
        color: ${(props) => (props.themeName === 'light' ? 'black' : 'white')}
    }
`;
