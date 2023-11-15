import React, { useState, useEffect } from "react";

const RegisterComponent: React.FC = () => {
  const [registerChecker, setRegisterChecker] = useState<boolean>(false);
  const emailRegex: RegExp = /^\S+@\S+\.\S+$/;
  const passwordRegex: RegExp =
    /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validate = (value: string, regex: RegExp): boolean => {
    return regex.test(value);
  };

  const handleRegisterClick = () => {
    console.log("Testing reg button");
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const test: boolean = validate(event.target.value, emailRegex);

    if (!test) {
      document.getElementById("help")!.innerHTML =
        "Please use format joe123@outlook.ie";
      setRegisterChecker(false);
    } else {
      document.getElementById("regEmail")!.innerHTML = "";
      document.getElementById("help")!.innerHTML = "";
      console.log("reg = true");
      setRegisterChecker(true);
    }
  };

  useEffect(() => {
    const registerButton = document.getElementById("regSubmit");
    const emailInput = document.getElementById("regEmail");

    if (registerButton) {
      registerButton.addEventListener("click", handleRegisterClick);
    }

    return () => {
      if (registerButton) {
        registerButton.removeEventListener("click", handleRegisterClick);
      }
    };
  }, []);

  return (
    <div>
      {
        <form>
          <h3>Register</h3>
          <h5 id="help" style={{ color: "red" }}></h5>
          <table style={{ margin: "auto" }}>
            <tr>
              <td>
                <label>Email address: </label>
              </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  id="regEmail"
                  onChange={handleEmailChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Repeat Email address: </label>
              </td>
              <td>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Repeat email"
                  id="regRepEmail"
                  onChange={handleEmailChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password: </label>
              </td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  id="regPassword"
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Repeat Password: </label>
              </td>
              <td>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Repeat password"
                  id="regRepPassword"
                />
              </td>
            </tr>
          </table>

          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <br />
            <button type="submit" className="btn btn-primary" id="regSubmit">
              Submit
            </button>
          </div>
        </form>
      }
    </div>
  );
};

export default RegisterComponent;
