import "./css/UserInfo-styles.css";

const UserInfo = () => {
  return (
    <div className="card">
      <section className="user-profile">
        <img src="./assets/icon-company.svg" alt="user-img" />
        <div className="user-name">
          <h2>The Octocat</h2>
          <h3>@octocat</h3>
          <h4>Joined 25 Jan 2011</h4>
        </div>
      </section>
      <section className="user-bio">
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
          Quisque volutpat mattis eros.
        </p>
      </section>
      <section className="stats">
        <div>
          <p>Repos</p>
          <h2>8</h2>
        </div>
        <div>
          <p>Followers</p>
          <h2>3938</h2>
        </div>
        <div>
          <p>Following</p>
          <h2>9</h2>
        </div>
      </section>
      <address>
        <ul>
          <div className="row">
            <li>
              <img src="./assets/icon-location.svg" alt="icon-location" />
              <p>San Francisco</p>
            </li>
            <li>
              <img
                //   className="not-available"
                src="./assets/icon-website.svg"
                alt="icon-website"
              />
              <a href="github.com"> https://github.blog</a>
              {/* <a href="github.com" className="not-available">
              Not Available
            </a> */}
            </li>
          </div>
          <div className="row">
            <li>
              <img src="./assets/icon-twitter.svg" alt="icon-twitter" />
              <a href="twitter.com">Octocat</a>
            </li>
            <li>
              <img src="./assets/icon-company.svg" alt="icon-company" />
              <p>@github</p>
            </li>
          </div>
        </ul>
      </address>
    </div>
  );
};

export default UserInfo;
