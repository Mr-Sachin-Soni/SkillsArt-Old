import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Form } from "react-bootstrap";

export const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, password, cpassword } = user;
    if (name !== "" && email !== "" && password !== "" && cpassword !== "") {
      const res = await fetch("http://localhost:5000/SignUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cpassword,
        }),
      });
      console.log("res", res);
      const data = await res.json();
      console.log("data", data);
      if (data.status === 422 || !data) {
        console.log("Invalid Registration");
        window.alert("Invalid Registration");
      } else {
        console.log(" Registration Done");
        window.alert(" Registration Done");
        navigate("/Login");
      }
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <section className="vh-70 radient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <form method="POST" className="card-body p-5 text-center" onSubmit={PostData}>
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign Up</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your Email and Create password!
                    </p>
                    {error && (
                      <div className="alert alert-danger">Invalid Input</div>
                    )}

                    <div className="form-outline form-white mb-3">
                      <input
                        type="name"
                        id="typeNameX"
                        className="form-control form-control-lg"
                        onChange={handleInputs}
                        value={user.name}
                      />
                      <label className="form-label" value={user.name}>
                        Username
                      </label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        onChange={handleInputs}
                        value={user.email}
                      />
                      <label className="form-label" value={user.email}>
                        Email
                      </label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input
                        type="password"
                        id="createPasswordX"
                        className="form-control form-control-lg"
                        onChange={handleInputs}
                        value={user.password}
                      />
                      <label className="form-label" value={user.password}>
                        Create Password
                      </label>
                    </div>

                    <div className="form-outline form-white mb-3">
                      <input
                        type="password"
                        id="confirmPasswordX"
                        className="form-control form-control-lg"
                        onChange={handleInputs}
                        value={user.cpassword}
                      />
                      <label className="form-label" value={user.cpassword}>
                        Confirm Password
                      </label>
                    </div>
                    {/* <div className="form-outline form-white mb-3">
                      <Form.Select aria-label="Default select example">
                        <option value="1">User</option>
                        <option value="2">Artist</option>
                       <div className="form-control form-control-lg"></div>
                      </Form.Select>
                      <label>Select Account Type</label>
                    </div> */}

                    {/* <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p> */}

                    <button
                      className="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  <div>
                    <p className="mb-0">
                      Already have an account?
                      <a href="/Login" className="text-white-50 fw-bold">
                        Login
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
