import React, { useEffect } from 'react'

import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";

import LeftSideBar from "../components/LeftSideBar";
import UserList from "../components/UserList";
import UserProfile from "../components/UserProfile";
import MainCategory from "../components/MainCategory";
import SubCategory from "../components/SubCategory";
import ProductAdd from "../components/ProductAdd";
import ProductList from "../components/ProductList";
import ProductDetail from "../components/ProductDetail";
import NewOrder from "../components/NewOrder";
import OrderHistory from "../components/OrderHistory";
import OrderDetail from "../components/OrderDetail";
import Invoice from "../components/Invoice";
import SignIn from "../components/SignIn";
import Home from '../components/Home';
import Footer from '../components/Footer';
import AdminHeader from '../components/AdminHeader';
import Storage from './Storage';

const Layout2 = () => {
    let navigate = useNavigate();
    const userDetail = Storage.getItem('userDetail')
    console.log(userDetail);

    useEffect(() => {
        if (!userDetail.token) {
            navigate("/sign-in", { replace: true });
        }
    });

    return (
        <div className="wrapper">
            <Router>
                <LeftSideBar />
                <div className="ec-page-wrapper">
                    <AdminHeader />
                    <Routes>
                        <Route path="/dashboard" element={<Home />} />
                        <Route path="/user-list" element={<UserList />} />
                        <Route path="/user-profile" element={<UserProfile />} />
                        <Route path="/main-category" element={<MainCategory />} />
                        <Route path="/sub-category" element={<SubCategory />} />
                        <Route path="/product-add" element={<ProductAdd />} />
                        <Route path="/product-list" element={<ProductList />} />
                        <Route path="/product-detail" element={<ProductDetail />} />
                        <Route path="/new-order" element={<NewOrder />} />
                        <Route path="/order-history" element={<OrderHistory />} />
                        <Route path="/order-detail" element={<OrderDetail />} />
                        <Route path="/invoice" element={<Invoice />} />
                        <Route path="/sign-in" element={<SignIn />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </div >
    )
}

export default Layout2;