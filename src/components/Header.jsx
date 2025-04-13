import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchCard from "./SearchCard";
import useFetch from "../hooks/useFetch";

const Header = () => {
  const [searchValue, setSearchValue] = useState('')
  const [searchLoading, searchData] = useFetch({url: `https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`});
  
  return (
    <div>
      <header className="fixed top-0 z-10 flex h-14 w-screen items-center justify-between bg-black from-transparent to-black px-[13%] text-xs font-light text-white sm:text-base">
        <div className="flex items-center gap-3">
          <Link to={"/"}>
            <img src="/header-logo.png" alt="" className="w-16 sm:w-28" />
          </Link>
          <Link to={"/search?media_type=movie"}>Film</Link>
          <Link to={"/search?media_type=tv"}>Chanels</Link>
        </div>
        <div className="relative text-black min-w-44" onBlur={(e)=>{if(!e.currentTarget.contains(e.relatedTarget)) setSearchValue('')}}>
          <input
            type="text"
            placeholder="Search"
            className="w-[17vw] rounded-md px-1 font-normal outline-none"
            onChange={(e)=>setSearchValue(e.target.value)}
          />
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="absolute right-2 top-1/2 -translate-y-1/2 transform"
          />
          <div className="absolute bg-white w-[100%] rounded-b-lg max-h-[65vh] overflow-auto" onClick={()=>setSearchValue('')}>
            {
              (searchData?.results || []).map(card => <SearchCard key={card.id} data={card}/>)
            }
          </div>
        </div>
        {/* <Link to={"/search"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Link> */}
      </header>
      <div className="h-14"></div>
    </div>
  );
};

export default Header;
