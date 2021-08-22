import Branding from "./Branding";
import Menu from "./Menu";

const Header = () => {
  return (
    <div className="container">
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"'>
        <Branding />
        <Menu />
      </header>
    </div>
  );
};

export default Header;
