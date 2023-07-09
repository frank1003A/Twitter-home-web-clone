import { useEffect, useRef, useState } from "react";
import searchIcon from "../../assets/svg/search.svg";
const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [focused, setFocused] = useState<boolean>(false);

  useEffect(() => {
    let input = inputRef.current!;
    input.addEventListener("focusin", () => setFocused(true));
    input.addEventListener("focusout", () => setFocused(false));

    return () => {
      input.removeEventListener("focusin", () => setFocused(true));
      input.removeEventListener("focusout", () => setFocused(false));
    };
  }, []);

  return (
    <div className={focused ? "search-input focused" : "search-input"}>
      <img src={searchIcon} id="inputsearch" alt="search-icon" />
      <input ref={inputRef} type="text" placeholder="Search Twitter" />
    </div>
  );
};

export default SearchInput;
