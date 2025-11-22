import WindowControls from "@components/WindowControls";
import { techStack } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { BadgeCheck, Box, Check, Flag } from "lucide-react";

function Terminal() {
  return (
    <div>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold text-[1.1rem]">~Ilia $ </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li className="flex items-center" key={category}>
              <Box className="check" size={18} />
              <h3>{category}</h3>
              <ul>
                {items.map((item, i) => (
                  <li key={i}>
                    {item}
                    {i < items.length - 1 && ","}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> {techStack.length} of {techStack.length} stacks
            loaded successfully!
          </p>

          <p className="text-white">
            <Flag size={15} /> Render time: 7ms
          </p>
        </div>
      </div>
    </div>
  );
}

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
