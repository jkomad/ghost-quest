import Link from "next/link";
import SearchIcon from "./icons/search-icon";
import UserIcon from "./icons/user-icon";

const Header = ({ clickHandler, navUp }) => {
  return (
    <div id="headerDiv" className="flex-row w-full">
      <div
        id={"headerContainer"}
        className="p-5 w-full flex justify-between z-10 top-0 fixed"
      >
        <div className="overflow-hidden">
        <Link onClick={!navUp && clickHandler} href="/user/[id]">
          <UserIcon />
        </Link>
        <Link onClick={!navUp && clickHandler} href="/search">
          <SearchIcon />
        </Link>
        </div>
        <Link onClick={!navUp && clickHandler} href="/">
          <img className="top-0 right-0" src="/ghost-quest-website-favicon-color.png" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
