import { useUserName } from "../context/UserContext";

const FooterLinks = () => {
  const userName = useUserName();
  return (
    <div className="nav col-md-4 justify-content-end">
      <a href="/">Ask us a question {userName}</a>
    </div>
  );
};

export default FooterLinks;
