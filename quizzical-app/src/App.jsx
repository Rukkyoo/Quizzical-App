import "./App.css";
import Loginpage from "./Loginpage";
import { BrowserRouter as Routes, Route } from "react-router-dom";
import Questionspage from "./Questionspage";
import Signuppage from "./Signuppage";

function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/login-page" element={<Loginpage />} />
      <Route path="/signup-page" element={<Signuppage />} />
      <Route path="/questions-page" element={<Questionspage />} />
      </Routes>
    </div>
  );
}

export default App;
