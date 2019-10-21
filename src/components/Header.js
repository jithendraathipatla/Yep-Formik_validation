import React from 'react';

const style = {
    background: "white",
    position: "fixed",
    height: "45px",
    paddingTop: "5px",
    fontSize: "20px",
    fontWeight: 500,
    textAlign: "center",
    boxShadow: "0px 0.5px 2px rgba(0,0,0,0.2)",
    width: "100%",
    left: "0px",
    top: "0px",
    color: "#4a4a4a"
}

const Header = () => {
    return (
        <div  style={style}>
            Form Validation using Formik!!
        </div>
    );
};

export default Header;