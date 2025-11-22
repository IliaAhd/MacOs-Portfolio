import useWindowStore from "@store/window";

function WindowControls({ target }) {
  const { closeWindow } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div className="minimize" onClick={() => closeWindow(target)} />
      <div className="maximize" onClick={() => closeWindow(target)} />
    </div>
  );
}

export default WindowControls;
