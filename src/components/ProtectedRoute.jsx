import { Outlet } from 'react-router-dom';

export default function ProtectedRoute({ fallback = null, unauthenticatedElement = null }) {
  return <Outlet />;
}
