import { createGlobalStyle } from 'styled-components';

import { montserratFont } from './typography';

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }

    html, body, #__next, main {
        margin: 0;
        padding: 0;
    }

    body {
        padding: 0;
        margin: 0;
        -webkit-font-smoothing: antialiased;
        background-color: ${({ theme }) => theme.colors.primary['600']};
        ${montserratFont.style}
    }

    a {
        text-decoration: none;
        display: inline-flex;
        color: unset;
    }

    p {
        hyphens: auto;
    }

    ul {
        margin: 0;
        padding: 0;
    }

    #__next {
        isolation: isolate;
    }

`;
