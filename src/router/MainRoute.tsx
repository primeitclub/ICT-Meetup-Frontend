import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const MainRoute = () => {
 // check for auth status if user is logged in and show private/public routes accordingly
 const isAuth = false;

 return (
  <div>
   {/* make conditionals for private and public routing according to the auth status */}
   {isAuth && <PrivateRoutes />}
   {!isAuth && <PublicRoutes />}
  </div>
 );
};

export default MainRoute;
