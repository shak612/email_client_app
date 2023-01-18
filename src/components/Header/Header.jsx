import React from "react";
import "./Header.css";
import { useDispatch } from "react-redux";
import { unreadData } from "../../store/features/emailSlice";

const Header = ({ showFav, showRead }) => {
  let dispatch = useDispatch();
  return (
    <div className="header d-flex">
      <span className="filter">Filter By:</span>
      <div className="btns">
        <button className="btn" onClick={() => dispatch(unreadData())}>
          Unread
        </button>
        <button className="btn" onClick={() => showRead()}>
          read
        </button>
        <button className="btn" onClick={() => showFav()}>
          Favorites
        </button>
      </div>
    </div>
  );
};

export default Header;
