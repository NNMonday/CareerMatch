import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes, CompanyRoutes } from "./router";

const MainLayout = React.lazy(() => import("../layouts/MainLayout"));
function LazyLoadingComponent({ children }) {
  return (
    <React.Suspense
      fallback={
        <div
          className="loading-center"
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100vh",
            alignItems: "center",
          }}
        >
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      {children}
    </React.Suspense>
  );
}

const RouterRender = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to={"/my-job"} />} />
        <Route>
          {CompanyRoutes.map((route, idx) => (
            <Route
              path={route.path}
              element={
                <LazyLoadingComponent>
                  <MainLayout {...route}>{route.component}</MainLayout>
                </LazyLoadingComponent>
              }
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
