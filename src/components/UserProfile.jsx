import { Link, useNavigate } from "react-router-dom";
import "./UserProfile.css";

export default function UserProfile({ data }) {


  return (
    <div>
      <img src= {data && data.avatar_url} className="user-image" alt="User Profile" />
      <h1>{data.bio}</h1>
      <p>
        <span>Followers:</span> {data.followers} <span>Following:</span>{" "}
        {data.following}
      </p>

    <Link to="repos">Go To Repository</Link>
    </div>
  );
}
