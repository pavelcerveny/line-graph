import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
// import { TodoPage } from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import PageLayout from "./layouts/PageLayout";
import EmptyPage from "./pages/Empty";

export const routes: RouteConfig[] = [
    {
        path: "/",
        exact: true,
        component: () => (<AboutPage />),
    },
    {
        path: "/todo",
        component: () => (<EmptyPage />),
    },
    {
        path: "/about",
        component: () => (<AboutPage />),
    },
];

export const route = (
    <Switch>
        <Route path="/" component={PageLayout} />
    </Switch>
);
