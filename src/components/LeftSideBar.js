import React from 'react'
import { NavLink } from 'react-router-dom'
import MenuItem from './MenuItem'


function LeftSideBar() {
    return (
        <>
            {/* LEFT MAIN SIDEBAR */}
            <div className="ec-left-sidebar ec-bg-sidebar">
                <div id="sidebar" className="sidebar ec-sidebar-footer">
                    <div className="ec-brand">
                        <a href="/" title="Admin">
                            <img
                                className="ec-brand-icon"
                                src="assets/img/logo/ec-site-logo.png"
                                alt=""
                            />
                            <span className="ec-brand-name text-truncate">Admin</span>
                        </a>
                    </div>
                    {/* begin sidebar scrollbar */}
                    <div className="ec-navigation" data-simplebar="">
                        {/* sidebar menu */}
                        <ul className="nav sidebar-inner" id="sidebar-menu">
                            <MenuItem icon='mdi-view-dashboard-outline' menuTitle='Dashboard' />
                            <MenuItem icon='mdi-account-group' menuTitle='User' subMenu={[{ name: 'User List', link: 'user-list' }]} />
                            <MenuItem icon='mdi-dns-outline' menuTitle='Categories' subMenu={[{ name: 'Main Category', link: 'main-category' }, { name: 'Sub Category', link: 'sub-category' }]} />
                            <MenuItem icon='mdi-palette-advanced' menuTitle='Products' subMenu={[{ name: 'Add Product', link: 'product-add' }, { name: 'List Product', link: 'product-list' }, { name: 'Detail Product', link: 'product-detail' }]} />
                            <MenuItem icon='mdi-cart' menuTitle='Orders' subMenu={[{ name: 'New Order', link: 'new-order' }, { name: 'Order History', link: 'order-history' }, { name: 'Order Detail', link: 'order-detail' }, { name: 'Invoice', link: 'invoice' }]} />
                        </ul>
                    </div>
                </div>
            </div>
        </>

    )
}

export default LeftSideBar
