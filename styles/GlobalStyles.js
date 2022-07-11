import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        box-sizing: border-box;
    }
    main{
        max-width: 1180px;
        width: 100%;
        min-height: calc(100vh - 60px);
        margin: 60px auto 0 auto;
    }
    a{
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    h1{
        font-size: 32px;
    }
    button{
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
`;
