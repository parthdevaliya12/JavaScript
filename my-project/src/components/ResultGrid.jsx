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
import { Search, Image as ImageIcon, AlertCircle } from "lucide-react";

import { fetchMedia } from "../api/mediaApi";
import {
  setLoading,
  setLoadingMore,
  setResults,
  appendResults,
  setError,
} from "../redux/features/searchSlice";

import ResultCard from "./ResultCard";

const ResultGrid = () => {
  const { query, results, loading, loadingMore, error, page, totalPages } =
    useSelector((store) => store.search);

  const dispatch = useDispatch();

  // Fetch the first page whenever the search query changes.
  useEffect(() => {
    if (!query.trim()) return;

    let active = true;

    const getData = async () => {
      try {
        dispatch(setLoading());

        const res = await fetchMedia(query.trim(), 1, 20);

        const data = res.results.map((item) => ({
          id: item.id,
          type: "photo",
          title:
            item.alt_description || item.description || "Untitled photograph",
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));

        if (active) {
          dispatch(
            setResults({
              results: data,
              page: 1,
              totalPages: res.total_pages,
            }),
          );
        }
      } catch (err) {
        if (active) {
          dispatch(
            setError(
              err.response?.data?.errors?.join(", ") ||
                err.message ||
                "Unable to load images.",
            ),
          );
        }
      }
    };

    getData();

    return () => {
      active = false;
    };
  }, [query, dispatch]);

  // Fetch the next page and append its images.
  const handleLoadMore = async () => {
    if (loading || loadingMore || page >= totalPages) return;

    try {
      dispatch(setLoadingMore());

      const nextPage = page + 1;
      const res = await fetchMedia(query.trim(), nextPage, 20);

      const data = res.results.map((item) => ({
        id: item.id,
        type: "photo",
        title:
          item.alt_description || item.description || "Untitled photograph",
        thumbnail: item.urls.small,
        src: item.urls.full,
      }));

      dispatch(
        appendResults({
          results: data,
          page: nextPage,
          totalPages: res.total_pages,
        }),
      );
    } catch (err) {
      dispatch(
        setError(
          err.response?.data?.errors?.join(", ") ||
            err.message ||
            "Unable to load more images.",
        ),
      );
    }
  };

  // Initial loading state.
  if (loading) {
    return (
      <section className="mx-auto max-w-[1600px] px-4 py-10 sm:px-6 lg:px-10">
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

  // Empty initial state.
  if (!query.trim()) {
    return (
      <section className="px-5 py-24 text-center">
        <Search size={32} className="mx-auto mb-5 text-neutral-400" />
        <h2 className="text-2xl font-semibold tracking-tight">
          Find your next inspiration.
        </h2>
        <p className="mt-3 text-sm text-neutral-500">
          Search for something to discover beautiful images.
        </p>
      </section>
    );
  }

  // Error state when no images have loaded.
  if (error && results.length === 0) {
    return (
      <section className="px-5 py-20 text-center">
        <AlertCircle size={32} className="mx-auto mb-4" />
        <h2 className="text-xl font-semibold">Unable to load images</h2>
        <p className="mt-2 text-sm text-neutral-500">{error}</p>
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

      {error && (
        <p className="mb-5 text-sm text-neutral-600">
          Could not load more images: {error}
        </p>
      )}

      {results.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-neutral-300 px-5 py-20 text-center">
          <ImageIcon size={32} className="mx-auto mb-4 text-neutral-400" />
          <h3 className="font-semibold">No images found</h3>
          <p className="mt-2 text-sm text-neutral-500">
            Try searching for another keyword.
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 2xl:grid-cols-6">
            {results.map((item) => (
              <ResultCard key={item.id} item={item} />
            ))}
          </div>

          {page < totalPages && (
            <div className="mt-12 flex flex-col items-center gap-3">
              <button
                type="button"
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="inline-flex min-w-44 items-center justify-center gap-3 rounded-full bg-black px-7 py-3.5 text-sm font-medium text-white transition duration-300 hover:bg-neutral-800 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loadingMore ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                    Loading...
                  </>
                ) : (
                  "Load More Images"
                )}
              </button>

              <p className="text-xs text-neutral-400">
                Page {page} of {totalPages}
              </p>
            </div>
          )}

          {page >= totalPages && results.length > 0 && (
            <p className="mt-12 text-center text-sm text-neutral-400">
              You've reached the end of the available results.
            </p>
          )}
        </>
      )}
    </section>
  );
};

export default ResultGrid;
