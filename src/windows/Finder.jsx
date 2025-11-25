import { WindowControls } from "@components";
import { locations } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
import { Search } from "lucide-react";

function Finder() {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useLocationStore();

  function openItem(item) {
    if (item.fileType === "pdf") return openWindow("resume");

    if (item.kind === "folder") return setActiveLocation(item);

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
            onClick={() => setActiveLocation(item)}
            key={item.id}
          >
            <img className="w-4" src={item.icon} alt={item.name} />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>

      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList(Object.values(locations), "Favorites")}
          {renderList(locations.work.children, "My Projects")}
        </div>

        <ul className="content">
          {activeLocation.children.map((item) => (
            <li
              className={item.position}
              onClick={() => openItem(item)}
              key={item.id}
            >
              <img src={item.icon} alt="" />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
