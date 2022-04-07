import { useUserData } from "hooks";

export const Profile = () => {
  const {
    userData: {
      user: { wishlist, cart },
    },
  } = useUserData();

  return (
    <div className="flex-center">
      <div>
        <img
          src="/assets/images/profile.svg"
          alt="profile img"
          style={{ height: "15rem" }}
        />
        <h3 className="flex-center">Your Profile</h3>
        <h4> Wishlisted Items : {wishlist.length}</h4>
        <h4> Items in Cart : {cart.length}</h4>
      </div>
    </div>
  );
};
