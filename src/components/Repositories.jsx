import { useState } from "react";
import { useFetch } from "../hooks/useFetch";

export default function Repositories() {
  // const [repoData, setRepoData] = useState([]);

  // const handleClick = async (e) => {
  //   const repoData = await fetch('https://api.github.com/users/greatdaveo/repo');
  //   const repoJson = await repoData.json();
  //   console.log(repoJson);

  //   if (repoJson) {
  //       setRepoData(repoJson)
  //   }
  // }

  const [url, setUrl] = useState("https://api.github.com/users/greatdaveo/repo");

  const { data } = useFetch(url);

  return (
    <div>
      <ul>
        {data && data.map((repo) => (
          <li key={repo.id}>
            <a href={repo.html_url}>
              {repo.html_url}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
