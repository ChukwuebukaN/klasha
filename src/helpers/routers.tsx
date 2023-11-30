import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { NonAuthRoutes } from "./urls";
import { ReactComponent as LoadingIcon } from "../assets/svg/klasha-icon-round.svg";

const Dashboard = React.lazy(() => import("../pages/dashboard/dashboard"));

// <img src={LoadingIconBlack} alt="The-Frenzy Icon" />

function Routers() {
	return (
		<Suspense
			fallback={
				<div className="flex justify-center mt-60">
					<LoadingIcon className="App-logo" />
				</div>
			}
		>
			<Routes>
				<Route path={NonAuthRoutes.dashboard} element={<Dashboard />} />
			</Routes>
		</Suspense>
	);
}
export default Routers;
