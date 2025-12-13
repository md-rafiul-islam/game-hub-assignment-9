import React, { use } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const UserInfo = () => {
  const { user, logOut } = use(AuthContext);

  if (!user) {
    return (
      <div className="text-center py-14 text-gray-400 text-lg">
        No user logged in
      </div>
    );
  }

  const handleLogOut = () => {
    logOut();
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-[#1e1e1e] text-white rounded-2xl p-6 shadow-lg">
      <title>GameHub - User</title>
      <div className="flex items-center gap-4">
        <img
          src={
            user.photoURL ||
            "https://ui-avatars.com/api/?name=" + user.displayName
          }
          alt="User Avatar"
          className="w-20 h-20 rounded-full object-cover border border-gray-700"
        />

        <div>
          <h2 className="text-2xl font-bold">
            {user.displayName || "No Name"}
          </h2>
          <p className="text-gray-400 text-sm">{user.email}</p>
        </div>
      </div>

      <div className="mt-6 text-gray-300 space-y-2">
        {user.phoneNumber && <p>📞 Phone: {user.phoneNumber}</p>}

        {/* Joined Date */}
        <p>
          🗓 Joined:{" "}
          {user.metadata?.creationTime
            ? new Date(user.metadata.creationTime).toDateString()
            : "Unknown"}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6">
        <button
          onClick={handleLogOut}
          className="w-full bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserInfo;
