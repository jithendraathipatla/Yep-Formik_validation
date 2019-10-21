import React from "react";
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  textarea1: Yup.string()
    .min(5, "Too short!")
    .required("Required")  
});

const Forms = () => {
  return (
    <div>
      <div className="field">
        <Formik
          initialValues={{
            firstName: "",
            email: "",
            password: "",
            textarea1: "",
          }}
          validationSchema={ SignupSchema } 
          onSubmit = { values => {
            alert(JSON.stringify(values));
            document.querySelector("#form").reset();
          }}
        >
        {({ errors, touched }) => (
          <Form id="form">
            <div className="control">
              <Field  className={errors.firstName && touched.firstName ? "input is-danger" : "input"} name="firstName" type="text" placeholder="your name" />
              {errors.firstName && touched.firstName ? <div style={{color:"red"}}>{errors.firstName}</div> : null}
            </div>
            <br />
            <div className="control">
              <Field  className={errors.email && touched.email ? "input is-danger" : "input"} name="email" type="email" placeholder="your email"/>
              {errors.email && touched.email ? <div style={{color:"red"}}>{errors.email}</div> : null}
            </div>
            <br />
            <div className="control">
              <Field 
                className={errors.password && errors.password ? "input is-danger": "input"} name="password"
                type="password" placeholder="your Password"
                
              />
              {errors.password && touched.password ? <div style={{color:"red"}}>{errors.password}</div> : null}
            </div>
            <br />

            <Field type="textarea"
              className={errors.textarea1 && touched.textarea1 ? "textarea is-danger" : "textarea"} name="textarea1" placeholder="@hello there"
            />
             {errors.textarea1 && touched.textarea1 ? <div style={{color:"red"}}>{errors.textarea1}</div> : null}
            <br />

          
            <div className="buttons">
              <button className="button is-info" type="submit">Submit</button>
            </div>
          </Form>
        )}
        </Formik>
      </div>
    </div>
  );
};

export default Forms;
