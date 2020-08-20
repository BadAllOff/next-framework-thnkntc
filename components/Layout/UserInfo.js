import React, { useContext } from "react";
import AuthContext from "../meta/AuthContext";

const UserInfo = () => {
  const u = useContext(AuthContext);
  return (
    <ul className="navbar-nav ml-auto nav-flex-icons">
      <li className="nav-item avatar">
        <a className="nav-link p-0" href="#">
          {u.firstName && `${u.firstName} ${u.lastName} `}
          <img
            src={u.avatarUrl}
            className="rounded-circle z-depth-0"
            alt={`${u.firstName} ${u.lastName}`}
            height="35"
          />
        </a>
      </li>
    </ul>
  );
};

export default UserInfo;
