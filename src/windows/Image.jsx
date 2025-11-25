import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

function Image() {
  const data = useWindowStore((state) => state.windows.imgfile.data);

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 flex-center">
        {imageUrl && (
          <img
            className="max-w-full max-h-[70vh] rounded"
            src={imageUrl}
            alt={name}
          />
        )}
      </div>
    </div>
  );
}

const ImageWindow = WindowWrapper(Image, "imgfile");

export default ImageWindow;
