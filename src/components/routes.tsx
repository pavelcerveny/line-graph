import * as React from "react";
import { RouteConfig } from "react-router-config";
import { Route, Switch } from "react-router-dom";
import { TodoPage } from "./pages/TodoPage";
import AboutPage from "./pages/AboutPage";
import PageLayout from "./layouts/PageLayout";
import EmptyPage from "./pages/Empty";

export const routes: RouteConfig[] = [
    {
        path: "/home",
        exact: true,
        component: () => (<EmptyPage />),
    },
    {
        path: "/todo",
        component: () => (<TodoPage />),
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
