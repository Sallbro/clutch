import React from "react";
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="bg-base-300">
      <div className="navbar bg-base-300 mx-auto shadow-2xl max-w-screen-2xl">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">Charity</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal text-sm px-1">
            <li>
              <a href="/home">Home</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default navbar;
