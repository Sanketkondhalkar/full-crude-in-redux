import React from "react";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { RiDeleteBin5Line } from "react-icons/ri";
import { useSelector } from "react-redux";
import "./Table.css";

const Table = ({ deletedata, editdata }) => {
  const getColor = (item) => {
    if (item === "Normal") {
      return "green";
    } else if (item === "Blocking") return "red";
    return "yellow";
  };
  const getfontColor = (item) => {
    if (item === "Bug") {
      return "red";
    } else if (item === "To do") return "green";
    return "blue";
  };
  const { maindata } = useSelector((state) => state);
  return (
    <>
      <table className="table text-center">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Type</th>
            <th scope="col">Module</th>
            <th scope="col">Last Update</th>
            <th scope="col">Priority</th>
            <th scope="col">Title</th>
            <th scope="col">Rise in</th>
            <th scope="col">Deliver in</th>
            <th scope="col">Status</th>
            <th scope="col">Action Button</th>
          </tr>
        </thead>
        <tbody>
          {maindata.map((item) => {
            return (
              <tr key={item.id}>
                <td scope="col">#{item.id}</td>
                <td
                  scope="col"
                  style={{
                    color: getfontColor(item.type),
                  }}
                >
                  {item.type}
                </td>
                <td scope="col">{item.module}</td>
                <td scope="col">{item.lastupdate}</td>
                <td scope="col">
                  <button
                    className="btn"
                    style={{
                      background: getColor(item.priority),
                      color: "white",
                    }}
                  >
                    {item.priority}
                  </button>
                </td>
                <td scope="col">{item.title}</td>
                <td scope="col">{item.risein}</td>
                <td scope="col">{item.deliverin}</td>
                <td scope="col">{item.status}</td>
                <td scope="col">
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => editdata(item)}
                  >
                    <MdOutlineModeEditOutline /> Edit
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => deletedata(item.id)}
                  >
                    <RiDeleteBin5Line /> Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Table;
