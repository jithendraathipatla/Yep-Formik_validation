import React from 'react';
import 'bulma/css/bulma.css';
import "./app.css";
import Form from "./form" ;



const HeaderCard = () => {
    return (
          <div className="container is-fluid">
          <div className="columns">
          <div className="column is-one-quarter"></div>
          <div className="column is-half" style={{marginTop:"1%"}}>
          <div className="card">
          <h1 style={{fontSize:"18px", fontWeight:"400"}}>Form Validation using both Formik and Yep</h1>
          <br/>
          <Form/>
           </div>
          </div>
         
          </div>
          <div className="column is-one-quarter"></div>
         </div>
       
    );
};

export default HeaderCard;