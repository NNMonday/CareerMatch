import React from "react";
import { setNameSystem } from "../utils/helper";
import FindCandidatePage from "../pages/FindCandidatePage";
import DemoBase from "../components/DemoBase";


export const Routers = [

	//find job

	//single job 

	//find company

	//single company


	// --------------------------------------------------------------------


	//profile Section(User Profile)

	// { path: "/room", title: 'Room', component: <RoomPage /> },
	// {
	// 	path: "/room/:id",
	// 	parents: [
	// 		{
	// 			title: 'Room',
	// 			path: '/room'
	// 		}
	// 	],
	// 	title: 'Chi tiết phòng',
	// 	component: <RoomDetailPage />
	// },
	// // menu
	// {
	// 	path: "/menu/:id",
	// 	title: 'Menu',
	// 	component: <BlogsPage />
	// },

	// {
	// 	path: "/menu",
	// 	title: 'Menu',
	// 	component: <BlogsPage />
	// },

	// {
	// 	path: "/menu/show/:id/",
	// 	title: 'Chi tiết',
	// 	parents: [
	// 		{
	// 			title: 'Menu',
	// 			path: '/menu'
	// 		}
	// 	],
	// 	component: <BlogDetail />
	// },
	// //booking
	// {
	// 	path: "/booking/create",

	// 	title: "Đặt phòng",
	// 	component: <FormBooking />
	// },

	// {
	// 	path: "/booking/create/:id",

	// 	title: "Đặt phòng",
	// 	component: <FormBooking />
	// },
	// {
	// 	path: "/payment/:id",
	// 	title: "payment",
	// 	component: <PaymentPage />
	// },
	// {
	// 	path: "/booking",
	// 	title: "Lịch sử đặt phòng",
	// 	component: <BookingPage />
	// },

	// {
	// 	path: "/payment/:type",
	// 	title: "Thanh toán",
	// 	component: <PaymentStatus />
	// },

	// {
	// 	path: "/service",
	// 	title: 'Dịch vụ',
	// 	component: <ServicePage />
	// },

	// {
	// 	path: "/service/:id",
	// 	title: 'Chi tiết dịch vụ',
	// 	parents: [
	// 		{
	// 			title: 'Dịch vụ',
	// 			path: '/service'
	// 		}
	// 	],
	// 	component: <ServiceDetail />
	// },

	// // other
	// {
	// 	path: "/home",
	// 	component: <Home />
	// },
	// {
	// 	path: "/account",
	// 	title: 'Thông tin tài khoản',
	// 	component: <ProfilePage />
	// },
	// {
	// 	path: "/contact",
	// 	title: 'Liên hệ',
	// 	component: <ContactPage />
	// },
	// { path: "/", component: <Home /> },
	// { path: "/error", component: <ErrorPage /> },

	// ---------------------------------------------------------
];
//Role: Company 
// Browser Candidate (list jobSeeker on System JobSearching)
// Post a job
// My Job (list post)
//Application (list JobSeeker apply Job)
//Single-Application
export const CompanyRoutes = [
	{ path: "/find-candidate", component: <FindCandidatePage />, title: setNameSystem('Browser candidate') },
	{ path: "/post-a-job", component: <>Post a job</>, title: setNameSystem('Post a job') },
	{ path: "/my-job", component: <>List post</>, title: setNameSystem('My Job') },
	{ path: "/applications", component: <>Applications</>, title: setNameSystem('Applications') },
	{ path: "/demobase", component: <DemoBase />, title: 'demobase' }
]

export const AuthRoutes = [
	//sign up, sign in, forgot password, reset password
	{ path: "/sign-up", component: <>Sign up page</>, title: setNameSystem('Sign-up') },
	{ path: "/sign-in", component: <>Sign in page</>, title: setNameSystem('Sign-in') },
	{ path: "/forgot-password", component: <>Forgot password page</>, title: setNameSystem('Forgot-password') },
]