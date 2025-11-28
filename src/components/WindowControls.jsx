import useWindowStore from "@store/window";
import { ChevronLeft } from "lucide-react";

function WindowControls({ target }) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="pc">
        <div className="close" onClick={() => closeWindow(target)} />
        <div className="minimize" onClick={() => closeWindow(target)} />
        <div className="maximize" onClick={() => closeWindow(target)} />
      </div>

      <button className="mobile" onClick={() => closeWindow(target)}>
        <ChevronLeft className="size-4 text-black" />
        <span className="text-blue-500">Go Back</span>
      </button>
    </div>
  );
}

export default WindowControls;
