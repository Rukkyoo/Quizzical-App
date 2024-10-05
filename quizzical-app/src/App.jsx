import "./App.css";
import Loginpage from "./Loginpage";
import { Routes, Route } from "react-router-dom";
import Questionspage from "./Questionspage";

function App() {
  return (
    <div className="container">
      <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/questions-page" element={<Questionspage />} />
      </Routes>
    </div>
  );
}

export default App;
