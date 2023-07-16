import React from "react";
import { Link } from "react-router-dom";

function SubCategory() {
    return (
        <>
            {/* CONTENT WRAPPER */}
            <div className="ec-content-wrapper">
                <div className="content">
                    <div className="breadcrumb-wrapper breadcrumb-wrapper-2 breadcrumb-contacts">
                        <h1>Sub Category</h1>
                        <p className="breadcrumbs">
                            <span>
                                <a href="/">Home</a>
                            </span>
                            <span>
                                <i className="mdi mdi-chevron-right" />
                            </span>
                            Sub Category
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <div className="ec-cat-list card card-default mb-24px">
                                <div className="card-body">
                                    <div className="ec-cat-form">
                                        <h4>Add Sub Category</h4>
                                        <form>
                                            <div className="form-group row">
                                                <label htmlFor="text" className="col-12 col-form-label">
                                                    Name
                                                </label>
                                                <div className="col-12">
                                                    <input
                                                        id="text"
                                                        name="text"
                                                        className="form-control here slug-title"
                                                        type="text"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label htmlFor="slug" className="col-12 col-form-label">
                                                    Slug
                                                </label>
                                                <div className="col-12">
                                                    <input
                                                        id="slug"
                                                        name="slug"
                                                        className="form-control here set-slug"
                                                        type="text"
                                                    />
                                                    <small>
                                                        The “slug” is the URL-friendly version of the name. It
                                                        is usually all lowercase and contains only letters,
                                                        numbers, and hyphens.
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label">
                                                    Sort Description
                                                </label>
                                                <div className="col-12">
                                                    <textarea
                                                        id="sortdescription"
                                                        name="sortdescription"
                                                        cols={40}
                                                        rows={2}
                                                        className="form-control"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label
                                                    htmlFor="parent-category"
                                                    className="col-12 col-form-label"
                                                >
                                                    Parent Category
                                                </label>
                                                <div className="col-12">
                                                    <select
                                                        id="parent-category"
                                                        name="parent-category"
                                                        className="custom-select"
                                                    >
                                                        <option value="">Clothes</option>
                                                        <option value="uncategorized">Footwear</option>
                                                        <option value="new category">Jewellry</option>
                                                        <option value="new category">Perfume</option>
                                                        <option value="new category">Cosmatics</option>
                                                        <option value="new category">Glasses</option>
                                                        <option value="new category">Bags</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label">
                                                    Full Description
                                                </label>
                                                <div className="col-12">
                                                    <textarea
                                                        id="fulldescription"
                                                        name="fulldescription"
                                                        cols={40}
                                                        rows={4}
                                                        className="form-control"
                                                        defaultValue={""}
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <label className="col-12 col-form-label">
                                                    Product Tags{" "}
                                                    <span>( Type and make comma to separate tags )</span>
                                                </label>
                                                <div className="col-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="group_tag"
                                                        name="group_tag"
                                                        defaultValue=""
                                                        placeholder=""
                                                        data-role="tagsinput"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-12">
                                                    <button
                                                        name="submit"
                                                        type="submit"
                                                        className="btn btn-primary"
                                                    >
                                                        Submit
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="ec-cat-list card card-default">
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table id="responsive-data-table" className="table">
                                            <thead>
                                                <tr>
                                                    <th>Thumb</th>
                                                    <th>Name</th>
                                                    <th>Main Categories</th>
                                                    <th>Product</th>
                                                    <th>Total Sell</th>
                                                    <th>Status</th>
                                                    <th>Trending</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        {/* <img
                                                            className="cat-thumb"
                                                            src="assets/img/category/clothes.png"
                                                            alt="product image"
                                                        /> */}
                                                    </td>
                                                    <td>Winter Wear</td>
                                                    <td>
                                                        <span className="ec-sub-cat-list">
                                                            <span className="ec-sub-cat-tag">Clothes</span>
                                                        </span>
                                                    </td>
                                                    <td>28</td>
                                                    <td>2161</td>
                                                    <td>ACTIVE</td>
                                                    <td>
                                                        <span className="badge badge-success">Top</span>
                                                    </td>
                                                    <td>
                                                        <div className="btn-group">
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
                                                                <Link className="dropdown-item" to="#">
                                                                    Edit
                                                                </Link>
                                                                <Link className="dropdown-item" to="#">
                                                                    Delete
                                                                </Link>
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
    );
}

export default SubCategory;