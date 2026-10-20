// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Home from "./pages/Home";
// import { Toaster } from "react-hot-toast";
// import Details from "./pages/Details";
// import Count from "./pages/Count";
// import { fetchMedia } from "./api/mediaApi";
// import SearchBar from "./components/SearchBar";
// import ResultGrid from "./components/ResultGrid";

// const App = () => {
//   return (
//     <div className="bg-black text-white w-full">
//       {/* <button
//         onClick={() => {
//           fetchMedia('dog');
//         }}
//       >
//         Click
//       </button> */}
//       <SearchBar />
//       <ResultGrid />
//       <BrowserRouter>
//         {/* <Toaster position="top-center" reverseOrder={false} /> */}
//         <Routes>
//           {/* <Route path="" element={}/> */}
//           {/* <Route path="/" element={<Home />} /> */}
//           {/* <Route path="/count" element={<Count />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/details/:id" element={<Details />} /> */}
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Count from "./pages/Count";

import SearchBar from "./components/SearchBar";
import ResultGrid from "./components/ResultGrid";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-white text-black antialiased">
        <Toaster position="top-right" />

        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Premium header */}
                <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
                  <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    <a href="/" className="flex items-center gap-2.5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                        F
                      </div>

                      <span className="text-lg font-bold tracking-tight">
                        FRAME<span className="text-neutral-400">.</span>
                      </span>
                    </a>

                    <span className="hidden text-xs font-medium uppercase tracking-[0.2em] text-neutral-400 sm:block">
                      Discover visual inspiration
                    </span>

                    <span className="rounded-full border border-neutral-200 px-3 py-2 text-xs font-medium text-neutral-600">
                      Image Explorer
                    </span>
                  </nav>
                </header>

                {/* Search section */}
                <SearchBar />

                {/* Gallery */}
                <div className="border-t border-neutral-100">
                  <ResultGrid />
                </div>

                {/* Footer */}
                <footer className="mt-10 border-t border-neutral-200 px-4 py-8 text-center text-xs text-neutral-400">
                  FRAME. — A space for visual discovery.
                </footer>
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/count" element={<Count />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
