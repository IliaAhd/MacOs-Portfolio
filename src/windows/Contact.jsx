import { WindowControls } from "@components";
import { socials } from "@constants";
import WindowWrapper from "@hoc/WindowWrapper";

function Contact() {
  return (
    <div>
      <div id="window-header">
        <WindowControls target="contact" />

        <h2 className="hidden md:block">Contact Me</h2>
        <p className="md:hidden line-clamp-1 font-georama text-black text-lg flex-[1.5]">
          Contact
        </p>
      </div>

      <div className="p-5 space-y-5">
        <div className="space-y-5 flex flex-col items-center md:items-start">
          <img
            className="w-20 rounded-full"
            src="/images/ilia.jpg"
            alt="Ilia"
          />

          <h3>Let's Connect</h3>
          <p>
            Got a question or want to work together? Feel free to reach out!
          </p>
        </div>
        <ul>
          {socials.map(({ id, bg, link, icon, text }) => (
            <li style={{ backgroundColor: bg }} key={id}>
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img className="size-5" src={icon} alt={text} />
                <p>{text}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const ContactWindow = WindowWrapper(Contact, "contact");

export default ContactWindow;
