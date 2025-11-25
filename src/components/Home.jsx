import { locations } from "@constants";
import { useGSAP } from "@gsap/react";
import useLocationStore from "@store/location";
import useWindowStore from "@store/window";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";

const projects = locations.work?.children ?? [];

function Home() {
  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  useGSAP(() => {
    Draggable.create(".folder");
  }, []);

  function handleOpenProject(project) {
    setActiveLocation(project);
    openWindow("finder", project);
  }

  return (
    <section id="home">
      <ul>
        {projects.map((project) => (
          <li
            className={clsx("group folder", project.windowPosition)}
            onClick={() => handleOpenProject(project)}
            key={project.id}
          >
            <img src="/images/folder.png" alt={project.name} />
            <p>{project.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Home;
