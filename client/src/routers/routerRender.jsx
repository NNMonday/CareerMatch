import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthRoutes, CompanyRoutes } from './router';

const MainLayout = React.lazy( () => import( '../layouts/MainLayout' ) )
const RouterRender = () => {
    return (
        <>
            <Routes>
                <Route>
                    {CompanyRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={<MainLayout {...route}>{route.component}</MainLayout>}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
                <Route>
                    {AuthRoutes.map((route, idx) => (
                        <Route
                            path={route.path}
                            element={route.component}
                            key={idx}
                            exact={true}
                        />
                    ))}
                </Route>
            </Routes>
        </>
    );
};

export default RouterRender;