import { useLocation, Navigate, Outlet } from "react-router-dom";

import { RootState } from "../../../store/store";
import { useAppSelector } from "../../../hooks/hooks";

const RequireAuth: React.FC = () => {
  const token = useAppSelector((state: RootState) => state.auth.token);
  const location = useLocation();

  return (
    token ? <Outlet /> : <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAuth;

