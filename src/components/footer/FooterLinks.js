const FooterLinks = ({ userName }) => {
  return (
    <div className="nav col-md-4 justify-content-end">
      <a href="/">Ask us a question {userName}</a>
    </div>
  );
};

export default FooterLinks;
