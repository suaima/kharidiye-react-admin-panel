import React from "react";
import { Link } from "react-router-dom";

function MenuItem({ icon = "mdi-account-group" }) {
  return (
    <>
      {/* Users */}
      <li className="has-sub">
        <Link className="sidenav-item-link" to="/">
          <i className={"mdi " + icon} />
          <span className="nav-text">Users</span> <b className="caret" />
        </Link>
        <div className="collapse">
          <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
            <li className="">
              <a className="sidenav-item-link" href="/user-list">
                <span className="nav-text">User List</span>
              </a>
            </li>
          </ul>
        </div>
        <hr />
      </li>
    </>
  );
}

export default MenuItem;
