import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './SignIn';
import SignUp from './SignUp';


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