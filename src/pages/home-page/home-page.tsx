// @ts-nocheck
import React, { useState } from "react";
import { useWindowResize } from "../../helpers/useWindowResize";
import SidebarPanel from "../../components/sidebar-panel/sidebar-panel";
import Dashboard from "../dashboard/dashboard";
import Transactions from "../transactions/transactions";

function HomePage() {
	const { width } = useWindowResize();
	const [showMobileMenu, setShowMobileMenu] = useState(false);
	const [hidePanel, setHidePanel] = useState(false);
	const [updateShowCurrentRoute, setUpdateShowCurrentRoute] = useState(false);

	/** Updates state to show current route on the view side  */
	function UpdateToShowCurrentRoute(value) {
		setUpdateShowCurrentRoute(value);
	}

	/** Shows Current Route based on the text value passed below  */
	function currentRoute() {
		switch (updateShowCurrentRoute) {
			case "dashboard":
				return <Dashboard setShowMobileMenu={setShowMobileMenu} />;
			case "transactions":
				return <Transactions setShowMobileMenu={setShowMobileMenu} />;
			default:
				return <Dashboard setShowMobileMenu={setShowMobileMenu} />;
		}
	}

	const desktop = () => {
		return (
			<div className="w-full h-full flex">
				<div
					className={`hidden md:block lg:block
					${hidePanel ? "w-[5%]" : "w-[290px]"}`}
				>
					<SidebarPanel
						hidePanel={hidePanel}
						setHidePanel={setHidePanel}
						updateToShowCurrentRoute={UpdateToShowCurrentRoute}
					/>
				</div>
				<div className={`${hidePanel ? "w-[95%]" : "w-[80%]"}`}>
					{currentRoute()}
				</div>
			</div>
		);
	};

	const mobile = () => {
		return (
			<div className="w-full h-full flex">
				{showMobileMenu && (
					<div
						className={`absolute z-30 ${
							hidePanel ? "w-[15%] md:w-[10%]" : "w-[50%] md:w-[25%]"
						}`}
					>
						<SidebarPanel
							hidePanel={hidePanel}
							setHidePanel={setHidePanel}
							showMobileMenu={showMobileMenu}
							setShowMobileMenu={setShowMobileMenu}
							updateToShowCurrentRoute={UpdateToShowCurrentRoute}
						/>
					</div>
				)}
				<div className="w-full">{currentRoute()}</div>
			</div>
		);
	};

	return <>{width > 1060 ? desktop() : mobile()}</>;
}

export default HomePage;
