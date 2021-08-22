import Branding from "./Branding";
import Menu from "./Menu";

const Header = ({ userName }) => {
  return (
    <div className="container">
      <header className='d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"'>
        <Branding />
        <Menu userName={userName} />
      </header>
    </div>
  );
};

export default Header;
