import React, { useState } from "react";
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Aside from "./Aside";

const Layout = ({ children, title }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const isMatched = (path) => {
    return Boolean(matchPath(pathname, `/${path}/:name`));
  };

  return (
    <div>
      <div className="relative pb-32 overflow-hidden bg-gray-700">
        <nav
          className={classNames(
            "relative z-10 border-b border-gray-500 border-opacity-25 lg:bg-transparent lg:border-none",
            {
              "bg-transparent": menuOpen,
              "bg-gray-900": !menuOpen,
            }
          )}
        >
          <div className="px-2 mx-auto max-w-7xl sm:px-4 lg:px-8">
            <div className="relative flex items-center justify-between h-16 lg:border-b lg:border-gray-800">
              <div className="flex items-center px-2 text-cyan-400 lg:px-0">
                <div className="flex-shrink-0">
                  <svg
                    className="block w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      d="M380.386 123.715c-12.63-12.627-31.378-14.524-46.441-6.736C310.329 103.715 283.909 96 256.065 96a159.973 159.973 0 10133.081 71.09 39.994 39.994 0 00-8.76-43.375zm-33.795 222.8c-48.326 48.344-132.726 48.344-181.052 0A128 128 0 01256.065 128c20.545 0 40.097 5.336 57.882 14.414-3.279 13.17-.446 27.572 9.852 37.87a39.761 39.761 0 0041.248 9.195 127.018 127.018 0 01-18.456 157.037zM437.234 74.98a255.46 255.46 0 00-290.17-50.382c.44.422.96.703 1.392 1.134a87.018 87.018 0 0117.327 25.32 223.599 223.599 0 01281.07 321.856 56.402 56.402 0 1024.451 21.15c63.782-99.105 52.713-232.359-34.07-319.078zM424.113 448a24 24 0 1124.007-24 24.005 24.005 0 01-24.007 24zm-79.187 13.635A224.11 224.11 0 0131.921 256c0-41.996 12.222-81.83 33.748-116.695a56.61 56.61 0 10-24.984-21.621C-23.205 216.799-11.891 350.26 74.93 437.02a255.439 255.439 0 00289.015 50.92c-.653-.614-1.415-1.038-2.052-1.674a86.959 86.959 0 01-16.968-24.631zM88.016 64A24 24 0 1164.01 88a24.003 24.003 0 0124.007-24zm168.049 112a80 80 0 1080.023 80 80.103 80.103 0 00-80.023-80zm0 128a48 48 0 1148.014-48 48.007 48.007 0 01-48.014 48z"
                    />
                  </svg>
                </div>
                <p className="ml-2 text-xl font-thin">Vega</p>
                <div className="hidden lg:block lg:ml-6 lg:space-x-4">
                  <div className="flex space-x-2">
                    <Link
                      to="/components"
                      className={classNames(
                        "rounded-md py-2 px-3 text-sm font-medium text-white",
                        {
                          "bg-cyan-600 bg-opacity-25": isMatched("components"),
                          "hover:bg-cyan-800": !isMatched("components"),
                        }
                      )}
                    >
                      Components
                    </Link>
                    <Link
                      to="/hooks"
                      className={classNames(
                        "rounded-md py-2 px-3 text-sm font-medium text-white",
                        {
                          "bg-cyan-800 bg-opacity-25": isMatched("hooks"),
                          "hover:bg-cyan-900": !isMatched("hooks"),
                        }
                      )}
                    >
                      Hooks
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex justify-center flex-1 px-2 lg:ml-6 lg:justify-end">
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative text-gray-100 focus-within:text-gray-400">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="flex-shrink-0 w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full py-2 pl-10 pr-3 leading-5 placeholder-gray-100 bg-gray-700 bg-opacity-50 border border-transparent rounded-md cursor-not-allowed focus:outline-none focus:bg-white focus:ring-white focus:border-white focus:placeholder-gray-500 focus:text-gray-900 sm:text-sm"
                      placeholder="Search"
                      type="search"
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 text-gray-200 rounded-md hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className={classNames("flex-shrink-0 w-6 h-6", {
                      hidden: menuOpen,
                      block: !menuOpen,
                    })}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                  <svg
                    className={classNames("flex-shrink-0 w-6 h-6", {
                      hidden: !menuOpen,
                      block: menuOpen,
                    })}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {menuOpen && (
            <div className="bg-gray-900 lg:hidden" id="mobile-menu">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  to="/components"
                  className={classNames(
                    "block px-3 py-2 text-base font-medium text-white rounded-md",
                    {
                      "bg-black bg-opacity-25": isMatched("components"),
                      "hover:bg-gray-800": !isMatched("components"),
                    }
                  )}
                >
                  Components
                </Link>
                <Link
                  to="/hooks"
                  className={classNames(
                    "block px-3 py-2 text-base font-medium text-white rounded-md",
                    {
                      "bg-black bg-opacity-25": isMatched("hooks"),
                      "hover:bg-gray-800": !isMatched("hooks"),
                    }
                  )}
                >
                  Hooks
                </Link>
              </div>
            </div>
          )}
        </nav>
        <div
          className={classNames(
            "absolute inset-x-0 flex justify-center w-full overflow-hidden transform -translate-x-1/2 left-1/2 lg:inset-y-0",
            { "bottom-0": menuOpen, "inset-y-0": !menuOpen }
          )}
          aria-hidden="true"
        >
          <div className="flex-grow bg-gray-900 bg-opacity-75" />
          <svg
            className="flex-shrink-0"
            width={1750}
            height={308}
            viewBox="0 0 1750 308"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity=".75"
              d="M1465.84 308L16.816 0H1750v308h-284.16z"
              fill="#27272A"
            />
            <path
              opacity=".75"
              d="M1733.19 0L284.161 308H0V0h1733.19z"
              fill="#18181B"
            />
          </svg>
          <div className="flex-grow bg-gray-800 bg-opacity-75" />
        </div>
        <header className="relative py-10">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-white">{title}</h1>
          </div>
        </header>
      </div>
      <main className="relative -mt-32">
        <div className="max-w-screen-xl px-4 pb-6 mx-auto sm:px-6 lg:pb-16 lg:px-8">
          <div className="overflow-hidden bg-white rounded-lg shadow">
            <div className="divide-y divide-gray-200 lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x">
              <Aside />
              <div className="divide-y divide-gray-200 lg:col-span-9">
                <div className="px-4 py-6 sm:p-6 lg:pb-8">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
