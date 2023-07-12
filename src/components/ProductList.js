import React from 'react'

const ProductList = () => {
    return (
        <>
            {/* CONTENT WRAPPER */}
            <div className="ec-content-wrapper">
                <div className="content">
                    <div className="breadcrumb-wrapper d-flex align-items-center justify-content-between">
                        <div>
                            <h1>Product</h1>
                            <p className="breadcrumbs">
                                <span>
                                    <a href="/">Home</a>
                                </span>
                                <span>
                                    <i className="mdi mdi-chevron-right" />
                                </span>
                                Product
                            </p>
                        </div>
                        <div>
                            <a href="product-list" className="btn btn-primary">
                                {" "}
                                Add Porduct
                            </a>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="card card-default">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table
                                            id="responsive-data-table"
                                            className="table"
                                            style={{ width: "100%" }}
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Name</th>
                                                    <th>Price</th>
                                                    <th>Offer</th>
                                                    <th>Purchased</th>
                                                    <th>Stock</th>
                                                    <th>Status</th>
                                                    <th>Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p1.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Baby shoes</td>
                                                    <td>$20</td>
                                                    <td>25% OFF</td>
                                                    <td>61</td>
                                                    <td>5421</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p2.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>80</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p3.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve T-Shirt</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>100</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p4.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Round Cap with Belt</td>
                                                    <td>$10</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p5.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purse For Woman</td>
                                                    <td>$20</td>
                                                    <td>30% OFF</td>
                                                    <td>220</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p6.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Doctor Kit for Kids</td>
                                                    <td>$30</td>
                                                    <td>20% OFF</td>
                                                    <td>120</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p7.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Shirt For Men</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>550</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p8.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Digital Watch</td>
                                                    <td>$120</td>
                                                    <td>80% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p9.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$20</td>
                                                    <td>10% OFF</td>
                                                    <td>650</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p10.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Green shoes for Men</td>
                                                    <td>$30</td>
                                                    <td>50% OFF</td>
                                                    <td>350</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p11.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purpule woman Purse</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>900</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p12.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Schendle For Girl</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p13.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Purse Green</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p14.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>White shoes</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p15.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Pink Baby shoes</td>
                                                    <td>$80</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p16.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Big Basket Bag</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>1250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p17.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Wireless Buds</td>
                                                    <td>$90</td>
                                                    <td>30% OFF</td>
                                                    <td>950</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p1.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Baby shoes</td>
                                                    <td>$20</td>
                                                    <td>25% OFF</td>
                                                    <td>61</td>
                                                    <td>ACTIVE</td>
                                                    <td>5421</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p2.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>80</td>
                                                    <td>ACTIVE</td>
                                                    <td>2521</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p3.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve T-Shirt</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>100</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p4.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Round Cap with Belt</td>
                                                    <td>$10</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p5.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purse For Woman</td>
                                                    <td>$20</td>
                                                    <td>30% OFF</td>
                                                    <td>220</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p6.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Doctor Kit for Kids</td>
                                                    <td>$30</td>
                                                    <td>20% OFF</td>
                                                    <td>120</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p7.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Shirt For Men</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>550</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p8.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Digital Watch</td>
                                                    <td>$120</td>
                                                    <td>80% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p9.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$20</td>
                                                    <td>10% OFF</td>
                                                    <td>650</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p10.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Green shoes for Men</td>
                                                    <td>$30</td>
                                                    <td>50% OFF</td>
                                                    <td>350</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p11.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purpule woman Purse</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>900</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p12.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Schendle For Girl</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p13.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Purse Green</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p14.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>White shoes</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p15.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Pink Baby shoes</td>
                                                    <td>$80</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p16.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Big Basket Bag</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>1250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p17.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Wireless Buds</td>
                                                    <td>$90</td>
                                                    <td>30% OFF</td>
                                                    <td>950</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p1.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Baby shoes</td>
                                                    <td>$20</td>
                                                    <td>25% OFF</td>
                                                    <td>61</td>
                                                    <td>ACTIVE</td>
                                                    <td>5421</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p2.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>80</td>
                                                    <td>ACTIVE</td>
                                                    <td>2521</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p3.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve T-Shirt</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>100</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p4.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Round Cap with Belt</td>
                                                    <td>$10</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p5.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purse For Woman</td>
                                                    <td>$20</td>
                                                    <td>30% OFF</td>
                                                    <td>220</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p6.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Doctor Kit for Kids</td>
                                                    <td>$30</td>
                                                    <td>20% OFF</td>
                                                    <td>120</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p7.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Shirt For Men</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>550</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p8.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Digital Watch</td>
                                                    <td>$120</td>
                                                    <td>80% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p9.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$20</td>
                                                    <td>10% OFF</td>
                                                    <td>650</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p10.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Green shoes for Men</td>
                                                    <td>$30</td>
                                                    <td>50% OFF</td>
                                                    <td>350</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p11.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purpule woman Purse</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>900</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p12.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Schendle For Girl</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p13.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Purse Green</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p14.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>White shoes</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>500</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p15.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Pink Baby shoes</td>
                                                    <td>$80</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p16.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Big Basket Bag</td>
                                                    <td>$60</td>
                                                    <td>40% OFF</td>
                                                    <td>1250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p17.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Wireless Buds</td>
                                                    <td>$90</td>
                                                    <td>30% OFF</td>
                                                    <td>950</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p1.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Baby shoes</td>
                                                    <td>$20</td>
                                                    <td>25% OFF</td>
                                                    <td>61</td>
                                                    <td>ACTIVE</td>
                                                    <td>5421</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p2.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve Cap T-Shirt</td>
                                                    <td>$40</td>
                                                    <td>30% OFF</td>
                                                    <td>80</td>
                                                    <td>ACTIVE</td>
                                                    <td>2521</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p3.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Full Sleeve T-Shirt</td>
                                                    <td>$30</td>
                                                    <td>30% OFF</td>
                                                    <td>100</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p4.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Round Cap with Belt</td>
                                                    <td>$10</td>
                                                    <td>30% OFF</td>
                                                    <td>250</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p5.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Purse For Woman</td>
                                                    <td>$20</td>
                                                    <td>30% OFF</td>
                                                    <td>220</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <img
                                                            className="tbl-thumb"
                                                            src="assets/img/products/p6.jpg"
                                                            alt="Product Image"
                                                        />
                                                    </td>
                                                    <td>Doctor Kit for Kids</td>
                                                    <td>$30</td>
                                                    <td>20% OFF</td>
                                                    <td>120</td>
                                                    <td>621</td>
                                                    <td>ACTIVE</td>
                                                    <td>2021-10-30</td>
                                                    <td>
                                                        <div className="btn-group mb-1">
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success"
                                                            >
                                                                Info
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-outline-success dropdown-toggle dropdown-toggle-split"
                                                                data-bs-toggle="dropdown"
                                                                aria-haspopup="true"
                                                                aria-expanded="false"
                                                                data-display="static"
                                                            >
                                                                <span className="sr-only">Info</span>
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="#">
                                                                    Edit
                                                                </a>
                                                                <a className="dropdown-item" href="#">
                                                                    Delete
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>{" "}
                {/* End Content */}
            </div>{" "}
            {/* End Content Wrapper */}
        </>
    )
}

export default ProductList