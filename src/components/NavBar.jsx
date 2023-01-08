import { useState } from "react";
import { Link } from "react-router-dom";
import GitHuB from "../asset/github_logo.png";
import "./NavBar.css";
import UserProfile from "./UserProfile";
import RepoList from "../pages/RepoList";
import { useFetch } from "../hooks/useFetch";
import Repositories from "./Repositories";

export default function NavBar() {
  const [username, setUsername] = useState("greatdaveo");
  // const [userData, setUserData] = useState({});
  const [url, setUrl] = useState(`https://api.github.com/users/${username}`);
  const { data, isPending } = useFetch(url);

  // const handleOnChange = (e) => {
  //   e.preventDefault()
  //   setUsername(e.target.value)
  // }

  // const [data, setData] = useState({});
  // const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    //   // setLoading(true);
    //   // const profile = await fetch(`https://api.github.com/users/${username}`);
    //   // const profileJson = await profile.json();
    //   // setLoading(false);
    //   // console.log(profileJson);
    //   // if (profileJson) {
    //   //   setData(profileJson);
    //   // }
    //   // setUrl(`https://api.github.com/users/${username}`);
  };

  return (
    <>
      <nav>
        <img src={GitHuB} className="github-logo" alt="GitHub Logo" />

        {/* <input
          type="text"
          value={username}
          onChange={handleOnChange}
          className="search"
          placeholder="Search"
        />
        <button type="submit" onClick={handleSubmit} className="search-button">
          {isPending ? "Search..." : "Search"}
        </button> */}

        {/* <div>
          <Link to="/repo" >Repositories</Link>
        </div> */}

        <RepoList/>
      </nav>

      <UserProfile data={data} />
      {/* <Repositories repositories={data}/> */}
    </>
  );
}
