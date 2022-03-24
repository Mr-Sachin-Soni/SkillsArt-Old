import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// link
// import image from "./bg.png";
import axios from "axios";

export const Login2 = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, []);

  const login = async () => {
    try {
      const { data } = await axios.post("http://localhost:3000/users/login", {
        email: username,
        password: pass,
      });
      console.log(data.body);
      localStorage.setItem("user", JSON.stringify(data.body));
      navigate("/");
    } catch (error) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    }
  };

  return (
    <div>
      <section className="vh-70 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark text-white">
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5  mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-white-50 mb-5">
                      Please enter your login id and password!
                    </p>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        login();
                      }}
                    >
                      {error && (
                        <div className="alert alert-danger">
                          Incorrect Username or Password !
                        </div>
                      )}
                      {/*For email  */}

                      <div className="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          className="form-control form-control-lg"
                          placeholder="Enter your Email..."
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                        />
                        <label className="form-label">Email</label>
                      </div>

                      {/*For password  */}
                      <div className="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          className="form-control form-control-lg"
                          value={pass}
                          onChange={(e) => setPass(e.target.value)}
                          placeholder="Password"
                        />
                        <label className="form-label">Password</label>
                      </div>

                      {/* <div className="checkbox mb-3">
                        <label>
                          <input type="checkbox" value="remember-me" /> Remember
                          me
                        </label>
                      </div> */}
                      <button
                        className="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                      <div>
                        <p className="mb-0">
                          Don't have an account?
                          <a href="/SignUp" className="text-white-50 fw-bold">
                            Sign Up
                          </a>
                        </p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
