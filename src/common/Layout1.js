import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';


const Layout1 = ({ children }) => {
    return (
        <Router>
            <Routes>
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/sign-up" element={<SignUp />} />
            </Routes>
        </Router>
    );
};

export default Layout1