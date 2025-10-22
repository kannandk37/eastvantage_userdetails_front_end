import { useNavigate } from "react-router-dom";

export default function FallbackPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div className="error">
      <h1 className="error-text">Something went wrong 😞</h1>
      <p className="error-text1">Please try again.</p>
      <button className="error-button" onClick={() => handleClick()}>
        Retry
      </button>
    </div>
  );
}
