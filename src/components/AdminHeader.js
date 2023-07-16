import React from 'react'
import NavbarRight from '../common/NavbarRight'

const AdminHeader = () => {

    const sidebartogglerHandler = () => {
        document.body.classList.toggle('sidebar-minified-out')
        document.body.classList.toggle('sidebar-minified')
    }

    return (
        <>
            {/* Header */}
            <header className="ec-main-header" id="header">
                <nav className="navbar navbar-static-top navbar-expand-lg">
                    {/* Sidebar toggle button */}
                    <button id="sidebar-toggler" className="sidebar-toggle" onClick={sidebartogglerHandler} />
                    {/* search form */}
                    <div className="search-form d-lg-inline-block">
                        <div className="input-group">
                            <input
                                type="text"
                                name="query"
                                id="search-input"
                                className="form-control"
                                placeholder="search.."
                                autoComplete="off"
                            />
                            <button
                                type="button"
                                name="search"
                                id="search-btn"
                                className="btn btn-flat"
                            >
                                <i className="mdi mdi-magnify" />
                            </button>
                        </div>
                        <div id="search-results-container">
                            <ul id="search-results" />
                        </div>
                    </div>
                    <NavbarRight/>
                </nav>
            </header>
        </>
    )
}

export default AdminHeader;