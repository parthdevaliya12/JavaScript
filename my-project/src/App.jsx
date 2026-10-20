import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Aperture, ArrowUpRight } from "lucide-react";

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
                {/* Premium Navbar */}
                <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-white/90 backdrop-blur-xl">
                  <nav className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-10">
                    {/* FRAME Logo */}
                    <a href="/" className="group flex items-center gap-2.5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-black bg-black text-white transition-all duration-500 group-hover:rotate-12 group-hover:rounded-full group-hover:bg-white group-hover:text-black">
                        <Aperture size={24} strokeWidth={1.7} />
                      </div>

                      <span className="text-lg font-bold tracking-[0.16em]">
                        FRAME<span className="text-neutral-400">.</span>
                      </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="hidden items-center gap-7 text-sm text-neutral-500 sm:flex">
                      <a
                        href="#search"
                        className="transition-colors hover:text-black"
                      >
                        Discover
                      </a>

                      <a
                        href="#gallery"
                        className="transition-colors hover:text-black"
                      >
                        Gallery
                      </a>
                    </div>

                    {/* Explore Button */}
                    <a
                      href="#search"
                      className="group flex items-center gap-2 rounded-full bg-black px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-neutral-800 sm:text-sm"
                    >
                      Explore
                      <ArrowUpRight
                        size={15}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </a>
                  </nav>
                </header>

                {/* Search Section */}
                <SearchBar />

                {/* Image Gallery */}
                <div id="gallery" className="border-t border-neutral-100">
                  <ResultGrid />
                </div>

                {/* Copyright Footer */}
                <footer className="border-t border-neutral-200 bg-white px-4 py-8 sm:px-6">
                  <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
                    <a href="/" className="group flex items-center gap-2">
                      <Aperture
                        size={20}
                        className="transition-transform duration-300 group-hover:rotate-45"
                      />

                      <span className="text-sm font-bold tracking-[0.14em]">
                        FRAME<span className="text-neutral-400">.</span>
                      </span>
                    </a>

                    <p className="text-xs leading-5 text-neutral-500 sm:text-sm">
                      © {new Date().getFullYear()} FRAME. All rights reserved.
                      <span className="mx-2 hidden text-neutral-300 sm:inline">
                        |
                      </span>
                      <span className="block sm:inline">
                        Designed with care by Parth Devaliya.
                      </span>
                    </p>

                    <button
                      type="button"
                      onClick={() =>
                        window.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        })
                      }
                      className="text-xs font-medium text-neutral-500 transition-colors hover:text-black"
                    >
                      Back to top ↑
                    </button>
                  </div>
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
