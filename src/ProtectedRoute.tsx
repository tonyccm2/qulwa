import { Outlet } from 'react-router-dom';

export const ProtectedRoute = ({ children, redirectTo = "/" }) => {

    //   const login = isLoggedIn();
    //   if (!login) {
    //     return <Navigate to={redirectTo}></Navigate>
    //   }
    return (
        <>
            {
                children ? children : <Outlet />
            }
        </>
    )
}
