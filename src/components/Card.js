import React from "react";
import "bulma/css/bulma.css";
import "./app.css";
import Task from "./task";
import Form from "../components/form";
import Numlock from "./numbers";

const HeaderCard = () => {
  return (
    <div className="container is-fluid">
      <div className="columns">
        <div className="column is-half">
          <div className="card">
            <Form />
          </div>
        </div>
        <div className="column is-half">
          <div className="card">
            <Numlock />
          </div>
          <div className="card">
            <Task />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;
