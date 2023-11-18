import { useState } from "react";
import "./TopNav.css";
import { SearchIcon } from "../Icons/icons";

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
        <button>
          <SearchIcon />
        </button>
      </form>
    </div>
  );
};

export default TopNav;
