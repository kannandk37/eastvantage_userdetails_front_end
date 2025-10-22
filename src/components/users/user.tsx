import { useEffect, useState } from "react";
import { User } from "@/users/entity";
import UserService from "@/users/service/client";
import { CircularProgress, IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { UserManager } from "@/users/service/data";
import { useNavigate } from "react-router-dom";
import { navigateToFallback } from "@/utils";

export function UserProfileCard() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      let userInfo = await new UserService().getUser();
      if (userInfo) {
        let userDatum: User = await new UserManager().getUserById(userInfo.id);
        if (userDatum) {
          setUser(userDatum);
        } else {
          navigateToFallback();
        }
      }
    } catch (error) {
      console.error(error);
      navigateToFallback();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      {loading ? (
        <div className="loader">
          <CircularProgress sx={{ color: "rgb(194, 142, 243)" }} size={40} />
          <h1>Loading User Details...</h1>
        </div>
      ) : (
        <div
          className="user-card"
          style={{
            backgroundImage: `url(${user?.profilePic})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <img
            src={user?.profilePic}
            alt={`${user?.firstName}'s profile`}
            className="profile-pic"
          />
          <div className="user-info">
            <h2 className="user-name">
              {user?.honorifics}. {user?.firstName} {user?.lastName}
            </h2>
            <p className="user-email">{user?.email}</p>
          </div>
          {user && (
            <IconButton
              className="refresh-btn"
              onClick={() => {
                getUser();
              }}
            >
              <RefreshIcon />
            </IconButton>
          )}
        </div>
      )}
    </div>
  );
}
