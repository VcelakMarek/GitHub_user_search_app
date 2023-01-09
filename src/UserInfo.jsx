import { useContext } from "react";
import userDataContext from "./userData.context";
import "./css/UserInfo-styles.css";

const UserInfo = () => {
  const [userData] = useContext(userDataContext);
  const date = new Date(userData.created_at);
  const year = date.getFullYear();
  const month = date.toLocaleString("default", { month: "short" });
  const day = date.getDate();

  return (
    <div className="card">
      <section className="user-profile">
        <img src={userData.avatar_url} alt="user-img" />
        <div className="user-name">
          <h2>{userData.name}</h2>
          <h3>@{userData.login}</h3>
          <h4>{`Joined ${day} ${month} ${year}`}</h4>
        </div>
      </section>
      <section className="user-bio">
        <p>{userData.bio ? userData.bio : "This profile has no bio"}</p>
      </section>
      <section className="stats">
        <div>
          <p>Repos</p>
          <h2>{userData.public_repos}</h2>
        </div>
        <div>
          <p>Followers</p>
          <h2>{userData.followers}</h2>
        </div>
        <div>
          <p>Following</p>
          <h2>{userData.following}</h2>
        </div>
      </section>
      <address>
        <ul>
          <div className="row">
            {userData.location ? (
              <li>
                <img src="./icon-location.svg" alt="icon-location" />
                <p>{userData.location}</p>
              </li>
            ) : (
              <li className="not-available">
                <img src="./icon-location.svg" alt="icon-location" />
                <p>Not Available</p>
              </li>
            )}

            {userData.blog ? (
              <li>
                <img src="./icon-website.svg" alt="icon-website" />
                <a href={userData.blog}> {userData.blog}</a>
              </li>
            ) : (
              <li className="not-available">
                <img src="./icon-website.svg" alt="icon-website" />
                <p>Not Available</p>
              </li>
            )}
          </div>
          <div className="row">
            {userData.twitter_username ? (
              <li>
                <img src="./icon-twitter.svg" alt="icon-twitter" />
                <a href="twitter.com">{userData.twitter_username}</a>
              </li>
            ) : (
              <li className="not-available">
                <img src="./icon-twitter.svg" alt="icon-twitter" />
                <p>Not Available</p>
              </li>
            )}

            {userData.company ? (
              <li>
                <img src="./icon-company.svg" alt="icon-company" />
                <p>{userData.company}</p>
              </li>
            ) : (
              <li className="not-available">
                <img src="./icon-company.svg" alt="icon-company" />
                <p>Not Available</p>
              </li>
            )}
          </div>
        </ul>
      </address>
    </div>
  );
};

export default UserInfo;
