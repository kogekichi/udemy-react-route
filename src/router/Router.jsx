import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/Page1"
        render={({ match: { url } }) => {
          return (
            <Switch>
              {page1Routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
              page1Routes
            </Switch>
          );
        }}
      />
      <Route
        path="/Page2"
        render={({ match: { url } }) => {
          return (
            <Switch>
              {page2Routes.map((route, index) => {
                return (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={`${url}${route.path}`}
                  >
                    {route.children}
                  </Route>
                );
              })}
              page1Routes
            </Switch>
          );
        }}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
