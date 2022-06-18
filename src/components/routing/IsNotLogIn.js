import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { routes } from "../../global/routes";
import Join from "../../pages/Join";
import LogIn from "../../pages/LogIn";
import Main from "../../pages/Main";
import WritePost from "../../pages/WritePost";
import Web192023 from "../../pages/temporary/web192023/web192023";
import Web192024 from "../../pages/temporary/web192024/web192024";
import Web192026 from "../../pages/temporary/web192026/web192026";

export const IsNotLogIn = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={`${routes.main}`} element={<Main />} />
                <Route path={`${routes.login}`} element={<LogIn />} />
                <Route path={`${routes.join}`} element={<Join />} />
                <Route path={`${routes.writePost}`} element={<WritePost />} />
                <Route path={`/Web192023`} element={<Web192023 />} />
                <Route path={`/Web192024`} element={<Web192024 />} />
                <Route path={`/Web192026`} element={<Web192026 />} />
            </Routes>
            <Footer />
        </Router>
    );
};
