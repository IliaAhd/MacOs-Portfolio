import { MOBILE_BREAKPOINT } from "@constants";
import { useGSAP } from "@gsap/react";
import useWindowStore from "@store/window";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { useLayoutEffect, useRef } from "react";

function WindowWrapper(Component, windowKey) {
  function Wrapped(props) {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    const ref = useRef();
    const width = document.documentElement.getBoundingClientRect().width;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen || width < MOBILE_BREAKPOINT) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        {
          scale: 1,
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el || width < MOBILE_BREAKPOINT) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section
        className="absolute window-root rounded-none md:rounded-xl h-screen md:h-auto overflow-auto pb-40 md:pb-0"
        id={windowKey}
        ref={ref}
        style={{ zIndex }}
      >
        <Component {...props} />
      </section>
    );
  }

  Wrapped.displayName = `WindowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
}

export default WindowWrapper;
