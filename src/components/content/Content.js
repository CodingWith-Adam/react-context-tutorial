import PromoAd from "./PromoAd";
import UpdateProfileName from "./UpdateProfileName";

const Content = ({ userName, onUpdateUserName }) => {
  return (
    <>
      <PromoAd />
      <UpdateProfileName
        userName={userName}
        onUpdateUserName={onUpdateUserName}
      />
    </>
  );
};

export default Content;
