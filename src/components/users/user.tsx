import { useEffect, useState } from "react";
import "./user.css";
import { User } from "../../users/entity";
import UserService from "../../users/service/client";
import { localStore } from "../../core/service/storage";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export function UserProfileCard() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    (async () => {
      await getUser();
    })();
  }, []);

  const getUser = async () => {
    try {
      let userInfo = await new UserService().getUser();
      if (userInfo) {
        let userDatum = localStore.getItem("user");
        if (userDatum) {
          let user = new User();
          user = JSON.parse(userDatum);
          setUser(user);
        } else {
          setUser(null);
        }
      } else {
        setUser(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
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
            {user?.honorifics}.{user?.firstName} {user?.lastName}
          </h2>
          <p className="user-email">{user?.email}</p>
        </div>
        <IconButton
          color="primary"
          className="refresh-btn"
          onClick={async () => {
            await getUser();
          }}
        >
          <RefreshIcon />
        </IconButton>
      </div>
    </div>
  );
}
