import React from "react";
import { setNameSystem } from "../utils/helper";
import FindCandidatePage from "../pages/company/FindCandidatePage";
import CreatePostJob from "../pages/company/CreatePostJob";
import ListPostJob from "../pages/company/ListPostJob";
import DemoBase from "../components/DemoBase";
import UpdatePostJob from "../pages/company/UpdatePostJob";

export const Routers = [


];




export const CompanyRoutes = [
	{ path: "/find-candidate", component: <FindCandidatePage />, title: setNameSystem('Browser candidate') },
	{ path: "/post-a-job", component: <CreatePostJob />, title: setNameSystem('Post a job'), showSidebar: true },
	{ path: "/update-a-job", component: <UpdatePostJob />, title: setNameSystem('Post a job'), showSidebar: true },
	{ path: "/my-job", component: <ListPostJob />, title: setNameSystem('My Job'), showSidebar: true },
	// { path: "/applications", component: <>Applications</>, title: setNameSystem('Applications') },
	{ path: "/demobase", component: <DemoBase />, title: 'demobase' }
]

export const AuthRoutes = [
	//sign up, sign in, forgot password, reset password
	{ path: "/sign-up", component: <>Sign up page</>, title: setNameSystem('Sign-up') },
	{ path: "/sign-in", component: <>Sign in page</>, title: setNameSystem('Sign-in') },
	{ path: "/forgot-password", component: <>Forgot password page</>, title: setNameSystem('Forgot-password') },
]