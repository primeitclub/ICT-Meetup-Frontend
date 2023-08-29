import PublicRoutes from "./PublicRoutes";

const MainRoute = () => {
  return (
    <div>
      {/* make conditionals for private and public routing according to the auth status */}
      <PublicRoutes />
    </div>
  );
};

export default MainRoute;
