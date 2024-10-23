import React from "react";
import { Link } from "react-router-dom";
import UserForm from "./userProfile/UserForm";

const UserProfile: React.FC = () => {
  return (
    <section className="container py-9 md:py-14">
      <div className="text-sm font-medium flex gap-2 mb-9 md:mb-14">
        <Link to={"/home"} className="text-gray-500">
          Home
        </Link>
        <span>/</span>
        <span>My Account</span>
      </div>
      <UserForm/>
    </section>
  );
};

export default UserProfile;
