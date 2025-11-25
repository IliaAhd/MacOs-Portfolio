import { Dock, Home, Navbar, Welcome } from "@components";
import {
  Finder,
  Resume,
  Safari,
  Terminal,
  Text,
  Image,
  Contact,
} from "@windows";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

function App() {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />

      <Home />
    </main>
  );
}

export default App;
