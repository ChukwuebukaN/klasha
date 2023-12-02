// @ts-nocheck
import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
import { ReactComponent as LoadingIcon } from "../assets/svg/general/klasha-icon-round.svg";

const HomePage = React.lazy(() => import("../pages/home-page/home-page"));
const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));
const Transactions = React.lazy(
	() => import("../pages/transactions/transactions"),
);

function Routers() {
	return (
		<Suspense
			fallback={
				<div className="flex justify-center mt-60">
					<LoadingIcon className="loading" />
				</div>
			}
		>
			<Routes>
				<Route path={NonAuthRoutes.homePage} element={<HomePage />} />
				<Route
					path={`${NonAuthRoutes.dashboard}/:myParam`}
					element={<Dashboard />}
				/>
				<Route
					path={`${NonAuthRoutes.transactions}/:myParam`}
					element={<Transactions />}
				/>

				{/* path={`${NonAuthRoutes.homePage}/:myParam`} */}
			</Routes>
		</Suspense>
	);
}
export default Routers;
