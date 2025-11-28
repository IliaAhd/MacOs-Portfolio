import { WindowControls } from "@components";
import { locations, MOBILE_BREAKPOINT } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
import { ArrowLeft, ChevronRight, Search } from "lucide-react";
import { useEffect, useState } from "react";

function Finder() {
  const { openWindow } = useWindowStore();
  const {
    activeLocation,
    navigateTo,
    navigateToIndex,
    navigationPath,
    goBack,
  } = useLocationStore();
  const [width, setWidth] = useState(
    document.documentElement.getBoundingClientRect().width
  );

  useEffect(() => {
    const handleResize = () =>
      setWidth(document.documentElement.getBoundingClientRect().width);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function openItem(item) {
    if (item.fileType === "pdf") return openWindow("resume");

    if (item.kind === "folder") return navigateTo(item);

    if (["fig", "url"].includes(item.fileType) && item.href)
      return window.open(item.href, "_blank");

    openWindow(`${item.fileType}${item.kind}`, item);
  }

  const renderList = (items, name) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            className={clsx(
              item.id === activeLocation.id ? "active" : "not-active"
            )}
            onClick={() => navigateTo(item)}
            key={item.id}
          >
            <img className="w-4" src={item.icon} alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
        <li className="h-6"></li>
      </ul>
    </div>
  );

  const isMobile = width <= MOBILE_BREAKPOINT;

  return (
    <div>
      <div id="window-header" className="p-4 gap-0">
        {isMobile && navigationPath.length > 1 ? (
          <div className="flex-1">
            <button
              onClick={() => goBack()}
              className="flex items-center gap-1 px-2 py-1 hover:bg-gray-200 rounded transition-colors"
              title="Go back"
            >
              <ArrowLeft size={16} />
            </button>
          </div>
        ) : (
          <WindowControls target="finder" />
        )}

        <p className="md:hidden line-clamp-1 font-georama text-black text-lg flex-[1.5]">
          Portfolio
        </p>

        <Search className="hidden md:inline icon" />
      </div>

      {isMobile && navigationPath.length > 1 && (
        <div className="flex items-center gap-2 text-[13px] overflow-x-auto bg-gray-50 text-blue-500 px-5 py-4 border-b border-blue-100">
          {navigationPath.map((crumb, idx) => (
            <div
              key={crumb.id}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <button
                onClick={() => navigateToIndex(idx)}
                className="hover:underline truncate max-w-[120px]"
              >
                {crumb.name}
              </button>
              {idx < navigationPath.length - 1 && (
                <ChevronRight className="text-gray-400" size={14} />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="bg-white flex h-[calc(100%-48px)] min-h-0 overflow-hidden">
        {!isMobile && (
          <div className="sidebar overflow-auto min-h-0">
            {renderList(Object.values(locations), "Favorites")}
            {renderList(locations.work.children, "My Projects")}
          </div>
        )}

        {isMobile ? (
          <ul className="flex-1 overflow-auto min-h-0 w-full grid grid-cols-3 gap-4 p-4 content-start">
            {(navigationPath.length === 1 || !activeLocation
              ? Object.values(locations)
              : activeLocation.children || []
            )?.map((item) => (
              <li
                key={item.id}
                onClick={() => openItem(item)}
                className="flex flex-col items-center gap-2 p-3 hover:bg-gray-100 cursor-pointer active:bg-gray-200 rounded transition-colors"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="w-12 h-12 object-contain"
                />
                <p className="text-xs font-medium text-gray-800 text-center line-clamp-2">
                  {item.name}
                </p>
              </li>
            )) || (
              <li className="col-span-3 p-4 text-gray-500 text-center">
                No items
              </li>
            )}
          </ul>
        ) : (
          <ul className="content flex-1 overflow-auto min-h-0 relative">
            {activeLocation.children?.map((item) => (
              <li
                className={clsx("absolute", item.position)}
                onClick={() => openItem(item)}
                key={item.id}
              >
                <img src={item.icon} alt="" />
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
