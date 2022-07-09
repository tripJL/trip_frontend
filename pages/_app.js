import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../styles/theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
