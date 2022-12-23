const fetchGitHubUser = async (userName, setUserData) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);

  if (!res.ok) {
    throw new Error(`This is an HTTP error: The status is ${res.status}`);
  }
  const json = await res.json();
  setUserData(json);
};

export default fetchGitHubUser;
