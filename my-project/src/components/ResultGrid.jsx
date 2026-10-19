import { useDispatch, useSelector } from "react-redux";
import { fetchMedia } from "../api/mediaApi";
import { useEffect } from "react";
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
    if (!query) return;
    const getData = async () => {
      try {
        dispatch(setLoading());
        let res = await fetchMedia(query);
        // console.log(res);
        let data = res.results.map((item) => ({
          id: item.id,
          type: "photo",
          title: item.alt_description,
          thumbnail: item.urls.small,
          src: item.urls.full,
        }));
        //   console.log(data);
        dispatch(setResults(data));
      } catch (error) {
        //   console.log(error);
        dispatch(setError(error.message));
      }
    };
    getData();
  }, [query]);
  if (error) return <h1>Error</h1>;
  if (loading) return <h1>Loading...</h1>;
  return (
    <div className="flex justify-center items-center mt-5">
      <div className="grid grid-cols-4 gap-20">
        {results.map((item, id) => {
          return (
            <div key={id} className="">
              <ResultCard item={item} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResultGrid;
