import { Navigate, Outlet, useOutletContext } from "react-router-dom";

export default function AdminPages() {
  const { loggedUser } = useOutletContext();

  const id = loggedUser.roles_id;

  if (id !== 1) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
