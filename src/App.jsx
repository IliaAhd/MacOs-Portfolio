import { Dock, Navbar, Welcome } from "@components";
import { TerminalWindow } from "@windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <TerminalWindow />
    </main>
  );
}

export default App;
