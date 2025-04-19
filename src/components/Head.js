import React, { useEffect, useState } from "react";
import { SearchIcon } from "../utils/commonIcons";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constant";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  /**
   * SearchCache
   * {
   *   "iphone" : ["iphone11", "iphone"]
   * }
   *
   * SearchQuery = iphone
   */

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  /**
   * key - i
   * render the component
   * useEffect()
   *start time => make api call after 200ms
   *
   * key - ip
   * destroy the component (useEffect return method)
   * re-render the component
   * useEffect()
   *- start time => make api call after 200ms
   *
   * setTimeout(200) declines
   *
   *
   */

  const getSearchSuggestion = async () => {
    console.log("API CALL - ", searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col px-4 py-2 shadow-lg bg-white items-center sticky top-0">
      <div className="flex gap-6 col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-[26px] w-[26px] cursor-pointer pb-[2px]"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/640px-Hamburger_icon.svg.png"
          alt="icon"
        />
        <a href="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
            alt="youtubeLogo"
            className="h-6"
          />
        </a>
      </div>

      <div className="col-span-10 px-10">
        <div className="flex">
          <input
            type="text"
            className="w-1/2 border border-gray-400 p-2 px-4 rounded-l-full"
            placeholder="Search"
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 px-5 rounded-r-full bg-gray-100">
            <SearchIcon />
          </button>
        </div>
        {showSuggestions && suggestions.length > 0 && (
          <div className="fixed bg-white px-1 py-2 w-[34rem] mt-[2px] rounded-2xl shadow border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li
                  key={s}
                  className="py-1 px-2 flex gap-1 hover:bg-gray-100 rounded-lg cursor-pointer"
                >
                  <SearchIcon />
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="">
        <img
          src="https://toppng.com/uploads/preview/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png"
          alt="user"
          height="28px"
          width="28px"
        />
      </div>
    </div>
  );
};

export default Head;
