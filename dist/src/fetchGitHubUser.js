const fetchGitHubUser = async (userName, setUserData) => {
  const res = await fetch(`https://api.github.com/users/${userName}`);

  if (!res.ok && res.status != 404) {
    throw new Error(`This is an HTTP error: The status is ${res.status}`);
  } else if (res.status === 404) {
    setUserData(res.status);
  } else {
    const json = await res.json();
    setUserData(json);
  }
};

export default fetchGitHubUser;
