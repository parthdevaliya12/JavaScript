// import { useDispatch, useSelector } from "react-redux";
// import { fetchMedia } from "../api/mediaApi";
// import { useEffect } from "react";
// import {
//   setError,
//   setLoading,
//   setResults,
// } from "../redux/features/searchSlice";
// import ResultCard from "./ResultCard";

// const ResultGrid = () => {
//   const { query, results, loading, error } = useSelector(
//     (store) => store.search,
//   );
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (!query) return;
//     const getData = async () => {
//       try {
//         dispatch(setLoading());
//         let res = await fetchMedia(query);
//         // console.log(res);
//         let data = res.results.map((item) => ({
//           id: item.id,
//           type: "photo",
//           title: item.alt_description,
//           thumbnail: item.urls.small,
//           src: item.urls.full,
//         }));
//         //   console.log(data);
//         dispatch(setResults(data));
//       } catch (error) {
//         //   console.log(error);
//         dispatch(setError(error.message));
//       }
//     };
//     getData();
//   }, [query]);
//   if (error) return <h1>Error</h1>;
//   if (loading) return <h1>Loading...</h1>;
//   return (
//     <div className="flex justify-center items-center mt-5">
//       <div className="grid grid-cols-4 gap-20">
//         {results.map((item, id) => {
//           return (
//             <div key={id} className="">
//               <ResultCard item={item} />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default ResultGrid;

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search, Image as ImageIcon, RefreshCw } from "lucide-react";

import { fetchMedia } from "../api/mediaApi";
import {
  setError,
  setLoading,
  setResults,
} from "../redux/features/searchSlice";

import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, results, loading, error } = useSelector(
    (store) => store.search,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!query.trim()) return;

    let active = true;

    const getData = async () => {
      try {
        dispatch(setLoading());

        const res = await fetchMedia(query.trim());

        const data = res.results.map((item) => ({
          id: item.id,
          type: "photo",
          title:
            item.alt_description || item.description || "Untitled photograph",
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));

        if (active) dispatch(setResults(data));
      } catch (err) {
        if (active) {
          dispatch(setError(err.message || "Something went wrong"));
        }
      }
    };

    getData();

    return () => {
      active = false;
    };
  }, [query, dispatch]);

  if (loading) {
    return (
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">
        <div className="mb-6 flex items-center gap-3">
          <span className="h-8 w-8 animate-pulse rounded-full bg-neutral-200" />
          <span className="h-4 w-36 animate-pulse rounded bg-neutral-200" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
          {Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[4/5] animate-pulse rounded-2xl bg-neutral-200"
            />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="mx-auto max-w-2xl px-5 py-24 text-center">
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-neutral-100">
          <RefreshCw size={27} />
        </div>

        <h2 className="text-xl font-semibold tracking-tight">
          Unable to load images
        </h2>

        <p className="mt-2 text-sm leading-6 text-neutral-500">{error}</p>

        <button
          onClick={() => dispatch({ type: "search/setQuery", payload: query })}
          className="mt-6 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-neutral-800"
        >
          Try again
        </button>
      </section>
    );
  }

  if (!query.trim()) {
    return (
      <section className="px-5 py-24 text-center sm:py-32">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-neutral-200 bg-neutral-50">
          <Search size={27} strokeWidth={1.5} />
        </div>

        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Find your next inspiration.
        </h2>

        <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-500 sm:text-base">
          Search for nature, architecture, fashion, technology, or anything you
          want to explore.
        </p>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-[1600px] px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-neutral-400">
            Your collection
          </p>

          <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Results for "{query}"
          </h2>
        </div>

        <span className="shrink-0 rounded-full border border-neutral-200 px-3 py-1.5 text-xs font-medium text-neutral-500">
          {results.length} images
        </span>
      </div>

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 px-5 py-20 text-center">
          <ImageIcon className="mx-auto mb-4 text-neutral-400" size={32} />

          <h3 className="font-semibold">No images found</h3>

          <p className="mt-2 text-sm text-neutral-500">
            Try another keyword to discover more images.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 2xl:grid-cols-6">
          {results.map((item) => (
            <ResultCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ResultGrid;
