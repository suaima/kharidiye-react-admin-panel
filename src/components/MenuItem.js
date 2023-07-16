import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuItem({ icon = "mdi-account-group", menuTitle = "Admin", subMenu = {} }) {
  const [menuExpand, setMenuExpand] = useState(false);
  return (
    <>
      {/* Users */}
      <li className={'has-sub ' + (menuExpand ? 'expand' : '')}>
        <Link className="sidenav-item-link" to="/" onClick={() => setMenuExpand(!menuExpand)}>
          <i className={"mdi " + icon} />
          <span className="nav-text">{menuTitle}</span> {subMenu.length > 0 && <b className="caret" />}
        </Link>
        {subMenu.length > 0 &&
          <div className={'collapse ' + (menuExpand ? 'show' : '')}>
            <ul className="sub-menu" id="users" data-parent="#sidebar-menu">
              {subMenu.length > 0 && subMenu.map((item, i) => {
                return <li className="" key={i}>
                  <Link className="sidenav-item-link" to={item.link}>
                    <span className="nav-text">{item.name}</span>
                  </Link>
                </li>
              })}
            </ul>
          </div>
        }
        <hr />
      </li>
    </>
  );
}

export default MenuItem;
