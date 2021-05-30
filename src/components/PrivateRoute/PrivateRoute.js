import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../App';
// import { UserContext } from '../Home/Home';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
            (loggedInUser.userName || sessionStorage.getItem('token')) ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default PrivateRoute;