import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
function PrivateRoutesAdmin() {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  return (
    <>
      {currentUser ? (
        currentUser.name ? (
          <Outlet />
        ) : (
          <Navigate to={"/admin-signin"} />
        )
      ) : (
        <Navigate to={"/admin-signin"} />
      )}
    </>
  );
}

export default PrivateRoutesAdmin;
