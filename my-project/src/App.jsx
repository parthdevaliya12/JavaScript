import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import Details from "./pages/Details";
import Count from "./pages/Count";
import { fetchMedia } from "./api/mediaApi";
import SearchBar from "./components/SearchBar";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <div className="bg-black text-white w-full">
      {/* <button
        onClick={() => {
          fetchMedia('dog');
        }}
      >
        Click
      </button> */}
      <SearchBar />
      <ResultGrid />
      <BrowserRouter>
        {/* <Toaster position="top-center" reverseOrder={false} /> */}
        <Routes>
          {/* <Route path="" element={}/> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/count" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/details/:id" element={<Details />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
