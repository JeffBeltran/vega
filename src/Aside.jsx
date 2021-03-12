import classNames from "classnames";
import React from "react";
import { matchPath, useLocation } from "react-router";
import { Link } from "react-router-dom";

const componentMenu = [
  {
    path: "/components/buttons",
    label: "buttons",
  },
  {
    path: "/components/foo",
    label: "bar",
  },
];

const hooksMenu = [
  {
    path: "/hooks/next-launch",
    label: "Next Launch",
  },
  {
    path: "/hooks/foo-bar",
    label: "Foo Bar",
  },
];

const AsideLayout = () => {
  const { pathname } = useLocation();

  const isMatched = (path) => {
    return Boolean(matchPath(pathname, path));
  };

  const currentMenu = Boolean(matchPath(pathname, "/hooks"))
    ? hooksMenu
    : componentMenu;

  return (
    <aside className="py-6 lg:col-span-3">
      <nav>
        {currentMenu.map((menu) => {
          return (
            <Link
              key={menu.path}
              to={menu.path}
              className={classNames(
                "flex items-center px-3 py-2 text-sm font-medium border-l-4 group",
                {
                  "bg-cyan-50 border-cyan-500 text-cyan-700 hover:bg-cyan-50 hover:text-cyan-700": isMatched(
                    menu.path
                  ),
                  "border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900": !isMatched(
                    menu.path
                  ),
                }
              )}
            >
              {menu.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default AsideLayout;
