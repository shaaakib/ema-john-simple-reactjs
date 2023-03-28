import React from 'react';
import logo from '../../images/Logo.svg';

export default function Header() {
  return (
    <div className="sticky top-0 z-10">
      <div className="navbar bg-neutral  ">
        <div className="container mx-auto">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className="menu-horizontal gap-5 px-8 text-base-100">
              <li>
                <a className="hover:text-orange-400" href="/order">
                  Order
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400" href="/review">
                  Order Review
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400" href="/inventory">
                  Manage Inventory
                </a>
              </li>
              <li>
                <a className="hover:text-orange-400" href="/login">
                  Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
