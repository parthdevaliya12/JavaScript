import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(text);
    dispatch(setQuery(text));
    setText("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex bg-gray-100/10 p-5 gap-5">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="px-4 py-2 text-xl w-full border rounded outline-none"
          placeholder="Search..."
          required
        />
        <button className="cursor-pointer hover:scale-95 transition px-4 py-2 text-xl border rounded outline-none">
          Search
        </button>
      </form>
    </div>
  );
  useState;
};

export default SearchBar;
