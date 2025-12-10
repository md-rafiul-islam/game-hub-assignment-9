import React from "react";
import { Outlet } from "react-router";

const AccountLayout = () => {
  return (
    <div>
      <p>this is auth page</p>
      <Outlet></Outlet>
    </div>
  );
};

export default AccountLayout;
