import { useState } from "react";
import "./TopNav.css";
import { SearchIcon } from "../Icons/icons";
import profilePicture from "../../assets/images/user-image.svg";
import { ArrowDownIcon } from "../Icons/icons";

const TopNav = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="top-nav">
      <form>
        <label for="search" className="visibly-hidden">
          Search
        </label>
        <input
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          id="search"
          placeholder="Search anything that comes to mind"
        />
        <button aria-label="search">
          <SearchIcon />
        </button>
      </form>
      <div class="user-profile-container">
        <img src={profilePicture} alt="profile" />
        <div class="user-details">
          <h2>Obinna Festus</h2>
          <p>Owner</p>
        </div>
        <ArrowDownIcon />
      </div>
    </div>
  );
};

export default TopNav;
