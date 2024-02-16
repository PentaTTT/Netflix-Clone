import { useEffect, useState } from "react";
import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import axios from "axios";

export default function WidgetSm() {
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/user?new=5", {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken
          }
        });
        setNewUsers(res.data)
      } catch (error) {
        console.log(error)
      }
    }

    getNewUsers()
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers && newUsers.length > 0 &&
          newUsers.map((user) => {
            return (
              <li className="widgetSmListItem" key={user._id}>
                <img
                  src={user.profilePic || 'https://mir-s3-cdn-cf.behance.net/project_modules/disp/84c20033850498.56ba69ac290ea.png'}
                  alt={user.username}
                  className="widgetSmImg"
                />
                <div className="widgetSmUser">
                  <span className="widgetSmUsername">{user.username}</span>
                  <span className="widgetSmUserTitle">{user.email}</span>
                </div>
                <button className="widgetSmButton">
                  <Visibility className="widgetSmIcon" />
                  Display
                </button>
              </li>
            )
          })}


      </ul>
    </div>
  );
}
