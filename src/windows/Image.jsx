import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";
import { Download, Edit, Plus } from "lucide-react";

function Image() {
  const data = useWindowStore((state) => state.windows.imgfile.data);

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <div>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <div className="hidden md:flex">
          <Download className="icon" />
          <Plus className="icon" />
          <Edit className="icon" />
        </div>
        <h2 className="md:hidden line-clamp-1 font-georama text-black text-lg flex-[1.5]">
          Preview
        </h2>
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
