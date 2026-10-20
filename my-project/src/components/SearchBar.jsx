// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setQuery } from "../redux/features/searchSlice";

// const SearchBar = () => {
//   const [text, setText] = useState("");
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(text);
//     dispatch(setQuery(text));
//     setText("");
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="flex bg-gray-100/10 p-5 gap-5">
//         <input
//           type="text"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           className="px-4 py-2 text-xl w-full border rounded outline-none"
//           placeholder="Search..."
//           required
//         />
//         <button className="cursor-pointer hover:scale-95 transition px-4 py-2 text-xl border rounded outline-none">
//           Search
//         </button>
//       </form>
//     </div>
//   );
//   useState;
// };

// export default SearchBar;

import { useState } from "react";
import { useDispatch } from "react-redux";
import { Search, X, ArrowRight } from "lucide-react";
import { setQuery } from "../redux/features/searchSlice";

const SearchBar = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = text.trim();
    if (!value) return;

    dispatch(setQuery(value));
    setText("");
  };

  const handleSuggestion = (value) => {
    setText(value);
    dispatch(setQuery(value));
  };

  const suggestions = ["Nature", "Architecture", "Minimalism", "Technology"];

  return (
    <section className="relative overflow-hidden bg-white px-4 py-14 sm:px-6 sm:py-20 lg:py-24">
      {/* Subtle background effect */}
      <div className="pointer-events-none absolute left-1/2 top-10 h-64 w-64 -translate-x-1/2 rounded-full bg-neutral-100 blur-3xl" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2 shadow-sm">
          <span className="h-2 w-2 animate-pulse rounded-full bg-black" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-600 sm:text-xs">
            Your creative space
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl font-semibold leading-tight tracking-[-0.05em] text-black sm:text-6xl lg:text-7xl">
          Discover the
          <br />
          <span className="text-neutral-400">extraordinary.</span>
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-neutral-500 sm:mt-6 sm:text-base sm:leading-7">
          Explore beautiful photography, discover fresh inspiration, and find
          images that match your vision.
        </p>

        {/* Search form */}
        <form
          onSubmit={handleSubmit}
          className="group mx-auto mt-8 flex max-w-2xl items-center gap-2 rounded-2xl border border-neutral-200 bg-white p-2 shadow-[0_8px_35px_rgba(0,0,0,0.06)] transition-all duration-300 focus-within:border-black focus-within:shadow-[0_10px_40px_rgba(0,0,0,0.10)] sm:mt-10 sm:rounded-full sm:p-2.5"
        >
          <Search
            size={21}
            className="ml-2 shrink-0 text-neutral-400 transition-colors group-focus-within:text-black sm:ml-4"
          />

          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Search photos, nature, architecture..."
            aria-label="Search images"
            className="min-w-0 flex-1 bg-transparent px-1 py-3 text-sm text-black outline-none placeholder:text-neutral-400 sm:text-base"
            required
          />

          {text && (
            <button
              type="button"
              onClick={() => setText("")}
              aria-label="Clear search"
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-neutral-400 transition hover:bg-neutral-100 hover:text-black"
            >
              <X size={17} />
            </button>
          )}

          <button
            type="submit"
            className="flex shrink-0 items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-neutral-800 active:scale-95 sm:rounded-full sm:px-6"
          >
            <span>Explore</span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </form>

        {/* Search suggestions */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="mr-1 text-xs text-neutral-400">Try searching</span>

          {suggestions.map((suggestion) => (
            <button
              key={suggestion}
              type="button"
              onClick={() => handleSuggestion(suggestion)}
              className="rounded-full border border-neutral-200 bg-white px-3 py-2 text-xs font-medium text-neutral-600 transition-all duration-200 hover:border-black hover:bg-black hover:text-white active:scale-95"
            >
              {suggestion}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchBar;


