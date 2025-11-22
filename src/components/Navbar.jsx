import { navIcons, navLinks } from "@constants";
import dayjs from "dayjs";

function Navbar() {
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="Logo" />
        <p className="font-bold">Ilia's Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>{name}</li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img className="icon-hover" src={img} alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{dayjs().format("ddd MMM D h:mm A")}</time>
      </div>
    </nav>
  );
}

export default Navbar;
