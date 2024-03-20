import React from "react";
import { Link } from "react-router-dom";
import "./todo-header.scss";
import logo from "../../assets/logo.png"

const TodoHeader = ({ title }) => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/comments">Comments</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/merve">Merve</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default React.memo(TodoHeader);
