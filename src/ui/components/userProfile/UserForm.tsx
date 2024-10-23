import React from "react";
import { useAppSelector } from "../../../hooks/hooks";

const UserForm: React.FC = () => {
  const { user } = useAppSelector((state) => state.auth);
  return (
    <div className="shadow py-10 px-16">
      <h6 className="text-red-600 font-medium mb-6">Edit Your Profile</h6>
      <form className="flex flex-col">
        <div className="flex flex-col md:flex-row md:gap-8">
          <div className="flex flex-col mb-4 md:flex-grow">
            <label htmlFor="name" className="mb-2">
              Name
            </label>
            <input
              value={user?.name}
              type="text"
              id="name"
              className="bg-neutral-100 p-2 rounded"
            />
          </div>
          <div className="flex flex-col mb-4 md:flex-grow">
            <label htmlFor="email" className="mb-2">
              Email
            </label>
            <input
              value={user?.email}
              type="text"
              id="email"
              className="bg-neutral-100 p-2 rounded"
            />
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="address" className="mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            className="bg-neutral-100 p-2 rounded"
          />
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="currentPassword">Password Changes</label>
          <input
            type="password"
            id="currentPassword"
            className="bg-neutral-100 p-2 rounded mb-3"
            placeholder="Current Password"
          />
          <input
            type="password"
            id="newPassword"
            className="bg-neutral-100 p-2 rounded mb-3"
            placeholder="New Password"
          />
          <input
            type="password"
            id="confirmPassword"
            className="bg-neutral-100 p-2 rounded mb-3"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="flex gap-2 self-end">
          <button className="p-3 px-8 text-sm rounded hover:bg-black hover:text-white">Cancel</button>
          <button className="bg-red-500 text-white p-3 px-8 text-sm rounded hover:bg-red-400">Save Changes</button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
