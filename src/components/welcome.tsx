import { Button } from "@mui/material";
import BG from "@/assets/planet.jpg";
import { useNavigate } from "react-router-dom";

export function Welcome() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/user");
  };

  return (
    <div style={{ justifyItems: "center", alignContent: "center" }}>
      <div
        className="welcome-card"
        style={{
          backgroundImage: `url(${BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay" />
        <div className="user-info">
          <h2 className="welcome-text">WELCOME</h2>
          <Button
            color="primary"
            className="welcome-btn"
            onClick={() => handleClick()}
          >
            Let's Go
          </Button>
        </div>
      </div>
    </div>
  );
}
