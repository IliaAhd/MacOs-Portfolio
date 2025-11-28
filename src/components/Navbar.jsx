import { navIcons, navLinks } from "@constants";
import useWindowStore from "@store/window";
import clsx from "clsx";
import dayjs from "dayjs";

function Navbar() {
  const { openWindow, navWhiteBg } = useWindowStore();

  return (
    <nav>
      <div className="pc">
        <div>
          <img src="/images/logo.svg" alt="Logo" />
          <p className="font-bold">Ilia's Portfolio</p>

          <ul>
            {navLinks.map(({ id, name, type }) => (
              <li onClick={() => openWindow(type)} key={id}>
                <p>{name}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <ul>
            {navIcons.map(({ id, img }) => (
              <li key={id}>
                <img className="icon" src={img} alt={`icon-${id}`} />
              </li>
            ))}
          </ul>

          <time className="text-sm font-medium text-black">
            {dayjs().format("ddd MMM D h:mm A")}
          </time>
        </div>
      </div>

      <div
        className={clsx("mobile", navWhiteBg ? "bg-white" : "bg-transparent")}
      >
        <time className={clsx(navWhiteBg ? "text-black" : "text-white")}>
          {dayjs().format("h:mm A")}
        </time>

        <div className="bg-black flex-1 rounded-full px-2 py-5"></div>

        <div className="gap-3">
          <img
            className="size-5"
            src={!navWhiteBg ? "/icons/wifi-light.svg" : "/icons/wifi-dark.svg"}
            alt="Logo"
          />
          <img
            className="size-5"
            src={!navWhiteBg ? "/icons/battery.svg" : "/icons/battery-dark.svg"}
            alt="Logo"
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
