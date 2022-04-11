import { LazyExoticComponent } from "react";
import { AdminPage } from "../pages/AdminPage";
import { DevPage } from "../pages/DevPage";
import { HomePage } from "../pages/HomePage";

type JSXComponent = () => JSX.Element

interface AppRoute {
    path: string;
    component: LazyExoticComponent<JSXComponent> | JSXComponent; //() => JSX.Element;
    name: string;
    children?: AppRoute[];
}

export const routes: AppRoute[] = [
    {
        name: 'Home',
        path: '/',
        component: HomePage
    },
    {
        name: 'Developers',
        path: '/developers',
        component: DevPage
    },
    {
        name: 'Administrators',
        path: '/admins',
        component: AdminPage
    }
]