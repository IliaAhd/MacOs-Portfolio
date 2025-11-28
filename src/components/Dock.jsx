import { dockApps, MOBILE_BREAKPOINT } from "@constants";
import { useGSAP } from "@gsap/react";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
import gsap from "gsap";
import { useRef } from "react";
import { Tooltip } from "react-tooltip";

function Dock() {
  const { openWindow, closeWindow, windows } = useWindowStore();
  const { resetToRoot } = useLocationStore();
  const dockRef = useRef();

  useGSAP(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const icons = dock.querySelectorAll(".dock-icon");

    function animateIcons(mouseX) {
      const { left } = dock.getBoundingClientRect();

      icons.forEach((icon) => {
        const { left: iconLeft, width } = icon.getBoundingClientRect();
        const center = iconLeft - left + width / 2;
        const distance = Math.abs(mouseX - center);
        const intensity = Math.exp(-(distance ** 2.5) / 20000);

        gsap.to(icon, {
          scale: 1 + 0.25 * intensity,
          y: -15 * intensity,
          duration: 0.2,
          ease: "power1.out",
        });
      });
    }

    function handleMouseMove(e) {
      const { left } = dock.getBoundingClientRect();

      animateIcons(e.clientX - left);
    }

    function resetIcons() {
      icons.forEach((icon) =>
        gsap.to(icon, {
          scale: 1,
          y: 0,
          duration: 0.3,
          ease: "power1.out",
        })
      );
    }

    dock.addEventListener("mousemove", handleMouseMove);
    dock.addEventListener("mouseleave", resetIcons);

    return () => {
      dock.removeEventListener("mousemove", handleMouseMove);
      dock.removeEventListener("mouseleave", resetIcons);
    };
  }, []);

  function toggleApp(app) {
    if (!app.canOpen) return;

    const window = windows[app.id];

    if (!window) return;

    if (window.isOpen) {
      closeWindow(app.id);
    } else {
      // Reset to root Portfolio view on mobile when opening Finder
      const isMobile =
        document.documentElement.getBoundingClientRect().width <=
        MOBILE_BREAKPOINT;
      if (app.id === "finder" && isMobile) {
        resetToRoot();
      }
      openWindow(app.id);
    }
  }

  return (
    <section id="dock">
      <div className="dock-container" ref={dockRef}>
        {dockApps.map(({ id, name, icon, canOpen, onMobile }) => (
          <div
            className={clsx(
              "relative justify-center",
              onMobile ? "flex" : "hidden md:flex"
            )}
            key={id}
          >
            <button
              className="dock-icon"
              onClick={() => {
                toggleApp({ id, canOpen });
              }}
              aria-label={name}
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
              data-tooltip-delay-show={150}
              disabled={!canOpen}
              type="button"
            >
              <img
                className={canOpen ? "" : "opacity-60"}
                src={`/images/${icon}`}
                alt={name}
                loading="lazy"
              />
            </button>
          </div>
        ))}
        <Tooltip className="tooltip" id="dock-tooltip" place="top" />
      </div>
    </section>
  );
}

export default Dock;
