import Contact from "./Contact";
import Intro from "./Intro";
import Menu from "./Menu";

const Navbar = () => {
  return (
    <div>
      <div>
        <Intro />
      </div>
      <div className="hidden md:block">
        <Menu />
      </div>
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default Navbar;
