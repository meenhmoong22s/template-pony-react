import { FastField, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as yup from "yup"; // for everything
import InputFiled from "../../customs/inputFiled";
import SelectFiled from "../../customs/selectFiled";
import { addPhoto } from "../../redux/redux-slice/photoSlice";

const category = [
  { value: 1, label: "sssssssss" },
  { value: 2, label: "aaaaaaaaaa" },
  { value: 3, label: "zzzzzzzzzzzz" },
  { value: 4, label: "dddddddddd" },
  { value: 5, label: "cccccccccc" },
];

const Login = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const initialValueFomik = {
    email: "",
    password: "",
    checkbox: false,
    selectID: null,
  };
  const validationSchema = yup.object().shape({
    email: yup.string().required("this field is required"),
    password: yup.string().required("this field is required"),
    selectID: yup.number().required("this field is required").nullable(),
    // customs: yup.string().when("selectID", {
    //   is: 1,
    //   then: yup.string().required("this is required"),
    //   otherwise: yup.string().notRequired(),
    // }),
  });

  const handleSubmit = (values) => {
    // console.log("Submit:", values);
    const action = addPhoto(values);
    // console.log(action);
    dispatch(action);
    history.push("/home");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card card-signin my-5">
            <div className="card-body">
              <h5 className="card-title text-center">Sign In</h5>
              <Formik
                initialValues={initialValueFomik}
                validationSchema={validationSchema}
                onSubmit={(values) => handleSubmit(values)}
              >
                {(formikProps) => {
                  // xu ly form...
                  const { values, errors, touched } = formikProps;
                  // console.log({ values, errors, touched });
                  return (
                    //by Form of Formik
                    <Form className="form-signin">
                      <FastField
                        name="email"
                        component={InputFiled}
                        //--------------------//
                        label="Email address"
                        placeholder="Email address"
                        type="email"
                      />
                      <FastField
                        name="password"
                        component={InputFiled}
                        //--------------------//
                        label="Password"
                        placeholder="Password"
                        type="password"
                      />
                      <div className="custom-control custom-checkbox mb-3">
                        <FastField
                          name="checkbox"
                          type="checkbox"
                          className="custom-control-input"
                          id="checkbox"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="checkbox"
                        >
                          Remember {`${values.checkbox}`}
                        </label>
                      </div>
                      <FastField
                        id="selectID"
                        name="selectID"
                        component={SelectFiled}
                        //--------------------//
                        label="Select examp"
                        placeholder="Select"
                        options={category}
                      />
                      <button
                        className="btn btn-lg btn-primary btn-block text-uppercase"
                        type="submit"
                      >
                        Sign in
                      </button>
                      <hr className="my-4" />
                      <button
                        className="btn btn-lg btn-google btn-block text-uppercase"
                        type="submit"
                      >
                        <i className="fab fa-google mr-2" /> Sign in with Google
                      </button>
                      <button
                        className="btn btn-lg btn-facebook btn-block text-uppercase"
                        type="submit"
                      >
                        <i className="fab fa-facebook-f mr-2" /> Sign in with
                        Facebook
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
