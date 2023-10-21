import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    console.log(e);

    setUser({ ...user, [name]: value }); 
  };

  const postData = async (e) => {
    console.log("registration in progress");
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    
    const rest = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await rest.json();

    if (data.status === 422 || !data) {
      window.alert("Registration failed");
      console.log("Registration failed");
    } else {
      window.alert("Registration Successfull");
      console.log("Registration Successfull");
      window.location.href = "/login";
    }
  };

  return (
    <>
      <div>
        <section className="vh-100 my-4">
          <div className="container-fluid h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5">
                <img
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={user.name}
                      onChange={handleInputs}
                      placeholder="Full Name"
                      required="required"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={user.email}
                      onChange={handleInputs}
                      placeholder="Enter your email ID"
                      required="required"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="phone"
                      value={user.phone}
                      onChange={handleInputs}
                      placeholder="YOur Phone NO"
                      required="required"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="text"
                      className="form-control"
                      name="work"
                      value={user.work}
                      onChange={handleInputs}
                      placeholder="YOur Profression"
                      required="required"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={user.password}
                      onChange={handleInputs}
                      placeholder="Password"
                      required="required"
                      aria-autocomplete="list"
                    />
                  </div>

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      className="form-control"
                      name="cpassword"
                      value={user.cpassword}
                      onChange={handleInputs}
                      placeholder="Confirm Password"
                      required="required"
                    />
                  </div>

                  <hr />
                  <div className="form-outline mb-3">
                    <div className="text-center text-lg-start mt-4 pt-2">
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        <input
                          type="submit"
                          onClick={postData}
                          value="Register"
                          id="signUp"
                          className="btn btn-success btn-sm btn-block"
                        />
                        {/* {"    "}Already member?
                        <NavLink to="/Login" className="link-danger">
                          Login
                        </NavLink>{" "}
                        from here */}
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
            <div className="text-white mb-3 mb-md-0">
              Copyright © 2023. All rights reserved.
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Signup;
