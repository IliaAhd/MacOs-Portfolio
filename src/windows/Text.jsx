import { WindowControls } from "@components";
import WindowWrapper from "@hoc/WindowWrapper";
import useWindowStore from "@store/window";

function Text() {
  const data = useWindowStore((state) => state.windows.txtfile.data);

  if (!data) return null;

  const { name, image, subtitle, description } = data;

  return (
    <div>
      <div id="window-header">
        <WindowControls target="txtfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 space-y-6">
        {image && (
          <div className="w-full">
            <img className="w-full h-auto rounded" src={image} alt={name} />
          </div>
        )}

        {subtitle && <h3 className="text-lg font-semibold">{subtitle}</h3>}

        {description && Array.isArray(description) && (
          <div className="space-y-3 leading-relaxed text-base text-gray-800">
            {description.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

const TextWindow = WindowWrapper(Text, "txtfile");

export default TextWindow;
