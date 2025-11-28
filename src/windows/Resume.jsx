import { WindowControls } from "@components";
import { MOBILE_BREAKPOINT } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";
import { DownloadIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc =
  `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`.toString();

function Resume() {
  const [width, setWidth] = useState(
    document.documentElement.getBoundingClientRect().width
  );

  useEffect(() => {
    const handleResize = () =>
      setWidth(document.documentElement.getBoundingClientRect().width);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <div id="window-header">
        <WindowControls target="resume" />

        <h2 className="hidden md:block">Resume.pdf</h2>
        <p className="md:hidden line-clamp-1 font-georama text-black text-lg flex-[1.5]">
          Resume
        </p>

        <a
          className="cursor-pointer hidden md:inline-block"
          title="Download resume"
          href="/files/resume.pdf"
          download
        >
          <DownloadIcon className="icon" />
        </a>
      </div>

      <Document file="/files/resume.pdf">
        <Page width={width > MOBILE_BREAKPOINT ? 600 : width} pageNumber={1} />
      </Document>
    </div>
  );
}

const ResumeWindow = WindowWrapper(Resume, "resume");

export default ResumeWindow;
