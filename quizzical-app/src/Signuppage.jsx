import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signuppage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const goToQuestionsPage = () => {
    navigate("/questions-page");
  };
  const goToLoginPage = () => {
    navigate("/login-page");
  };
  return (
    <div className="login-page">
      <h2>Quizzical</h2>
      <div className="login-form-container">
        <h3>Sign up</h3>
        <form className="login-form">
          <div>
            <label>Username: </label>
            <input type="text" />
          </div>
          <div className="password-field">
            <label>Password: </label>
            <input type={showPassword ? "text" : "password"}/>
          </div>
          <div className="check-box">
            <input type="checkbox" onChange={togglePasswordVisibility} />
            <label></label>
          </div>
          <div className="submit-btn">
            <input onClick={goToQuestionsPage} type="submit"></input>
            <button onClick={goToLoginPage} className="signup-re-btn" >
              Already have an account?
              <br></br>
              Login here
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signuppage;
