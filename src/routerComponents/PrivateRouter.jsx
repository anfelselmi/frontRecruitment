import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
function PrivateRoute({ component: Component,roles ,...rest }) {

    const { isAuth, user,role } = useContext(AuthContext)

    console.log("...private route..")

    return (
        <Route {...rest} render={props => {
            if (!isAuth)
                return <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location }
                }} />

            if (!roles?.includes(role))

                return <Redirect to={{
                    pathname: '/index',
                    state: { from: props.location } 
                }} />
            return <Component {...props} />    
        }} />
    )

}

export default PrivateRoute

 