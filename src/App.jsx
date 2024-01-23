import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import UserLogin from "./pages/userLogin/UserLogin";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <Router>
            <div className="page-content">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/userLogin" element={<UserLogin />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
