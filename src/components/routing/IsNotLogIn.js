import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "../common/Header";
import { Footer } from "../common/Footer";
import { routes } from "../../global/routes";
import Join from "../../pages/Join";
import LogIn from "../../pages/LogIn";
import Main from "../../pages/Main";
import WritePost from "../../pages/WritePost";

export const IsNotLogIn = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path={`${routes.main}`} element={<Main />} />
                <Route path={`${routes.login}`} element={<LogIn />} />
                <Route path={`${routes.join}`} element={<Join />} />
                <Route path={`${routes.writePost}`} element={<WritePost />} />
            </Routes>
            <Footer />
        </Router>
    );
};
