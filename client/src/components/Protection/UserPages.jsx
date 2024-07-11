import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export default function UserPages() {
  const { loggedUser, handleLogout } = useOutletContext();

  console.info(loggedUser);

  if (!loggedUser) {
    return <Navigate to="/" replace />;
  }

  return <Outlet context={{ loggedUser, handleLogout }} />;
}
