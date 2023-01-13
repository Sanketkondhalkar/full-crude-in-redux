import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { arraydata, deleteitem, setflag, setNavFlag } from "../CrudSlice";
import "./Crud.css";

import swal from "sweetalert";
import { GrDatabase } from "react-icons/gr";
import Table from "../Table/Table";
import Form from "../Form/Form";
import { useAuth0 } from "@auth0/auth0-react";

const Crud = () => {
  const { isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();
  const { navFlag } = useSelector((state) => state);

  console.log(isAuthenticated);
  const [data, setdata] = useState({
    type: "",
    module: "",
    lastupdate: "",
    priority: "",
    title: "",
    risein: "",
    deliverin: "",
    status: "",
  });
  const [mainflag, setmainflag] = useState(false);

  const dispatch = useDispatch();

  const { flag } = useSelector((state) => state);
  const Inputhandel = (e) => {
    // console.log(e.target.value);
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  const submitdata = (e) => {
    if (
      data.value == "" ||
      data.module == "" ||
      data.lastupdate == "" ||
      data.priority == "" ||
      data.title == "" ||
      data.risein == "" ||
      data.deliverin == "" ||
      data.status == ""
    ) {
      swal("Empty Field!", "please check the input field ", "error", {
        button: "OKAY",
      });
    } else {
      e.preventDefault();
      dispatch(arraydata(data));
      setdata({
        type: "",
        module: "",
        lastupdate: "",
        priority: "",
        title: "",
        risein: "",
        deliverin: "",
        status: "",
      });
      // setmainflag(true);
      dispatch(setNavFlag(true));
    }
  };
  const deletedata = (_id) => {
    dispatch(deleteitem(_id));
  };
  const editdata = (item) => {
    dispatch(setflag(item.id));
    setdata(item);
    // setmainflag(false);
    dispatch(setNavFlag(false));
  };
  const settable = () => {
    // setmainflag(false);
    dispatch(setNavFlag(false));
    setdata({
      type: "",
      module: "",
      lastupdate: "",
      priority: "",
      title: "",
      risein: "",
      deliverin: "",
      status: "",
    });
  };
  return (
    <>
      {isAuthenticated ? (
        <div className="container">
          {!navFlag && (
            <Form
              data={data}
              Inputhandel={Inputhandel}
              submitdata={submitdata}
              flag={flag}
            />
          )}

          {navFlag ? <Table deletedata={deletedata} editdata={editdata} /> : ""}
          <div className="text-center">
            {navFlag && (
              <button className="btn btndata btn-success" onClick={settable}>
                <GrDatabase /> create a new data
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="demo text-center">
          <div className="card" style={{ width: "24rem" }}>
            <img
              src="https://www.shutterstock.com/image-illustration/welcome-back-on-brick-wall-260nw-1447313387.jpg"
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h3 className="card-title">Welcome user </h3>
              <p>You have to login first for use this application</p>
              <button
                className="btn btn-primary"
                onClick={() => loginWithRedirect()}
              >
                Log In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Crud;
