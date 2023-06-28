import React from 'react'

import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LeftSideBar from "./LeftSideBar";
import UserList from "./UserList";
import UserProfile from "./UserProfile";
import MainCategory from "./MainCategory";
import SubCategory from "./SubCategory";
import ProductAdd from "./ProductAdd";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import NewOrder from "./NewOrder";
import OrderHistory from "./OrderHistory";
import OrderDetail from "./OrderDetail";
import Invoice from "./Invoice";
import SignIn from "./SignIn";
import Home from './Home';
import Footer from './Footer';
import AdminHeader from './AdminHeader';

const Layout2 = () => {
    return (
        <div className="wrapper">
            <Router>
                <LeftSideBar />
                <div className="ec-page-wrapper">
                    <AdminHeader />
                    <Routes>
                        <Route path="/" element={<Home />} />
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