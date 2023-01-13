import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { searchdatafilter, searchitemdata } from "../CrudSlice";

const Navbar = () => {
  const [input, setinput] = useState("");
  const { loginWithRedirect } = useAuth0();
  const { navFlag } = useSelector((state) => state);

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated);

  const { logout } = useAuth0();

  const dispatch = useDispatch();
  const getdata = (e) => {
    // console.log(e.target.value);
    // dispatch(searchdatafilter(e.target.value));
    setinput(e.target.value);
  };
  const searchitem = (e) => {
    e.preventDefault();
    dispatch(searchitemdata(input));
  };
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="https://media.licdn.com/dms/image/C4E0BAQGc0StUh28Pig/company-logo_200_200/0/1560767223614?e=2147483647&v=beta&t=_ltKlDRsUCXXiestmVTCwV8gnvQBfJAr_7Jw8Fmy_Gs"
            alt="Bootstrap"
            width="50"
            height="50"
          />
          Task
        </a>
        {navFlag ? (
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="search priority"
              aria-label="Search"
              onChange={getdata}
            />
            <button
              className="btn btn-outline-success"
              onClick={(e) => searchitem(e)}
              type="submit"
            >
              Search
            </button>
          </form>
        ) : (
          ""
        )}
        {isAuthenticated ? (
          <button
            className="btn btn-danger"
            onClick={() => logout({ returnTo: window.location.origin })}
          >
            Log Out
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
