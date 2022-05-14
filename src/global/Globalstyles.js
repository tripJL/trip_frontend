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
        min-height: calc(100vh - 210px);
        margin: 60px auto 150px auto;
    }
    a{
        cursor: pointer;
        text-decoration: none;
        color: inherit;
    }
    button{
        cursor: pointer;
        outline: none;
    }
    input{
        outline: none;
    }
`;
