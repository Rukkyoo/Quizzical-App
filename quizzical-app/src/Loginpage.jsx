import { useNavigate } from 'react-router-dom';
const Loginpage = () => {
    const navigate = useNavigate();

    const goToQuestionsPage = () => {
      navigate('/questions-page');
    };
  return <div className="login-page">
  <h2>Quizzical</h2>
  <h4>Click the button to proceed</h4>
  <button className="login-btn" onClick={goToQuestionsPage}>Start Quiz</button>
  </div>;
};

export default Loginpage;
