import FooterBranding from "./FooterBranding";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <FooterBranding />
        <FooterLinks />
      </footer>
    </div>
  );
};

export default Footer;
