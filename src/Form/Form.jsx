import React from "react";

const Form = ({ data, Inputhandel, submitdata, flag }) => {
  return (
    <div className="div_main">
      <div className="card">
        <div className="card-body">
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Type
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={Inputhandel}
              // defaultValue={data.type}
              value={data.type}
              name="type"
            >
              <option>Open this select menu</option>
              <option value="Bug">Bug</option>
              <option value="To do">To do</option>
              <option value="Feature">Feature</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Module
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the module"
              onChange={Inputhandel}
              value={data.module}
              name="module"
            />
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Last update
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  placeholder="Enter the Date"
                  onChange={Inputhandel}
                  value={data.lastupdate}
                  name="lastupdate"
                />
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Priority
                </label>
                <select
                  className="form-select"
                  onChange={Inputhandel}
                  // defaultValue={data.priority}
                  value={data.priority}
                  name="priority"
                >
                  <option>Open this select menu</option>
                  <option value="Normal">Normal</option>
                  <option value="Blocking">Blocking</option>
                  <option value="Needed">Needed</option>
                </select>
              </div>
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter the title text"
              onChange={Inputhandel}
              value={data.title}
              name="title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Rise in
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              onChange={Inputhandel}
              // defaultValue={data.risein}
              value={data.risein}
              name="risein"
            >
              <option>Open this select menu</option>
              <option value="v1.56">v1.56</option>
              <option value="v1.56">v1.56</option>
              <option value="v1.56">v1.56</option>
              <option value="v1.56">v1.55</option>
            </select>
          </div>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Deliver in
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={Inputhandel}
                  // defaultValue={data.deliverin}
                  value={data.deliverin}
                  name="deliverin"
                >
                  <option>Open this select menu</option>
                  <option value="v1.56.34">v1.56.34</option>
                  <option value="v1.56.25">v1.56.25</option>
                </select>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Status
                </label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  onChange={Inputhandel}
                  // defaultValue={data.status}
                  value={data.status}
                  name="status"
                >
                  <option>Open this select menu</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Close">Close</option>
                  <option value="New">New</option>
                </select>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="btn btn-danger" onClick={(e) => submitdata(e)}>
              {flag ? "Edit Data" : "Submit data"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
