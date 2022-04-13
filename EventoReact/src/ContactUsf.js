import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import ContactValidation from "./ContactValidation";
import axios from "axios";
const ContactUsf = () => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    emailid: "",
    fullname: "",
    contactno: "",
    address: "",
    businessName: "",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const submitData = (ev) => {
   
    console.log(values);
    ev.preventDefault();
    setErrors(ContactValidation(values));
    const reqOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch("http://localhost:8080/contactus", reqOptions).then((data) => {
      if (data) {
        alert("email send on ur mail id");
      } else {
        alert("enter valid mail id");
      }
    });
  };

  return (
    <div className="container  ">
      <div>
        <h1 className="shadow-sm text-success mt-5 p-3 text-center rounded">
          Contact Us
          <br />
          <h6>(want to become vendor in our portal)</h6>
        </h1>
      </div>

      <form>
        <div className="row">
          <div className="col-sm-4 my-4 ">
            <label className="text-dark" htmlFor="emailid">
              Your Email
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="emailid"
              className="form-control"
              value={values.emailid}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.emailid && <p  className="text-danger text-center">{errors.emailid}</p>}

        <div className="row">
          <div className="col-sm-4  my-4">
            <label className="text-dark " htmlFor="fullname">
              Full Name
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="fullname"
              className="form-control"
              value={values.fullname}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.fullname && <p className="text-danger text-center">{errors.fullname}</p>}

        <div className="row">
          <div className="col-sm-4  my-4">
            <label className="text-dark" htmlFor="businessName">
              Business Name
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="businessName"
              className="form-control"
              value={values.businessName}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.businessName && (
          <p className="text-danger text-center">{errors.businessName}</p>
        )}
        <div className="row">
          <div className="col my-4">
            <p className="text-danger text-center" htmlFor="address">
              (*No need to change checkbox values.)
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 my-4">
            <label className="text-dark" htmlFor="address">
              Select Services
            </label>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="1"
                checked
              />
              <label className="text-dark" forName="flexCheckDefault">
                Decoration
              </label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="2"
                checked
              />
              <label className="text-dark" forName="flexCheckChecked">
                Lighting
              </label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="3"
                checked
              />
              <label className="text-dark" forName="flexCheckChecked">
                Catering
              </label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="2"
                checked
              />
              <label className="text-dark" forName="flexCheckChecked">
                Photographer
              </label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="2"
                checked
              />
              <label className="text-dark" forName="flexCheckChecked">
                Cake
              </label>
            </div>
          </div>
          <div className="col-sm">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="service"
                value="2"
                checked
              />
              <label className="text-dark" forName="flexCheckChecked">
                Sound
              </label>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 my-4">
            <label className="text-dark" htmlFor="address">
              Address
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="textarea"
              name="address"
              className="form-control"
              value={values.address}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.address && <p className="text-danger text-center">{errors.address}</p>}
        <div className="row">
          <div className="col-sm-4">
            <label className="text-dark" htmlFor="contactno">
              Contact No
            </label>
          </div>
          <div className="col-sm-8">
            <input
              type="text"
              name="contactno"
              className="form-control"
              value={values.contactno}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.contactno && <p className="text-danger text-center">{errors.contactno}</p>}
      <div className="text-center my-4">
        <input
          type="submit"
          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body btn-center"
          onClick={submitData}
          value="Register"
        />
        </div>
      </form>
    </div>
  );
};
export default ContactUsf;
