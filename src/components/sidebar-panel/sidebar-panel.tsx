// @ts-nocheck
import React, { useEffect, useState } from "react";
import Buttons from "../buttons/buttons";
import {
	MainPagesRoutes,
	AcceptPaymentsRoutes,
	SendPaymentsRoutes,
} from "./sidebar-data";
import { ReactComponent as KlashaLogo } from "../../assets/svg/general/klasha-logo.svg";
import { ReactComponent as KlashaKIcon } from "../../assets/svg/general/klasha-k-icon.svg";
import { ReactComponent as QuestionMarkIcon } from "../../assets/svg/sidebar-panel/question-mark-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/sidebar-panel/arrow-left-icon.svg";

function SidebarPanel({
	hidePanel,
	setHidePanel,
	showMobileMenu,
	setShowMobileMenu,
	updateToShowCurrentRoute,
}) {
	const [route1IsActive, setRoute1IsActive] = useState({});
	const [route2IsActive, setRoute2IsActive] = useState({});
	const [route3IsActive, setRoute3IsActive] = useState({});

	useEffect(() => {
		const ac = new AbortController();
		setRoute1IsActive((state) => ({
			...state[0], //  <-- copy previous state
			0: state, // <-- update value by index key
		}));
		return function cleanup() {
			ac.abort();
		};
	}, []);

	/** Handles route clicks and their states */
	const route1IsClicked = (index, route) => () => {
		setRoute2IsActive({});
		setRoute3IsActive({});
		setRoute1IsActive((state) => ({
			...state[index], // <-- copy previous state
			[index]: !state[index], // <-- update value by index key
		}));
		updateToShowCurrentRoute(route);
	};

	/** Handles route clicks and their states */
	const route2IsClicked = (index, route) => () => {
		setRoute1IsActive({});
		setRoute3IsActive({});
		setRoute2IsActive((state) => ({
			...state[index], // <-- copy previous state
			[index]: !state[index], // <-- update value by index key
		}));
		updateToShowCurrentRoute(route);
	};

	/** Handles route clicks and their states */
	const route3IsClicked = (index, route) => () => {
		setRoute1IsActive({});
		setRoute2IsActive({});
		setRoute3IsActive((state) => ({
			...state[index], // <-- copy previous state
			[index]: !state[index], // <-- update value by index key
		}));
		updateToShowCurrentRoute(route);
	};

	/** Displays Hidden Panel */
	const hiddenPanel = () => {
		return (
			<div className="h-screen fixed w-[50px] flex justify-center bg-[#FFFBF7] pt-[30px]">
				<div>
					<KlashaKIcon className="cursor-pointer mb-[50px]" />

					{MainPagesRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route1IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route1IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route1IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}

					{AcceptPaymentsRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route2IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route2IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route2IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}

					{SendPaymentsRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route3IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route3IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route3IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}
					<div className="absolute bottom-0 mt-[145px] h-[150px] bg-[#FFFBF7]  flex justify-center">
						<div className="absolute bottom-[30px] w-[30px] ml-[30px]">
							<div>
								<Buttons
									title="Support"
									textStyling="text-white font-InterSemibold text-[12px]"
									buttonStyling="w-[30px] h-[30px] flex items-center justify-center w-full bg-klasha-red rounded-[100px] mb-4"
								>
									<QuestionMarkIcon />
								</Buttons>
							</div>

							<div>
								<Buttons
									title="Show panel"
									onClick={() => setHidePanel(false)}
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-[30px] h-[30px] flex items-center justify-center w-full bg-white rounded-[8px] border border-klasha-black"
								>
									<ArrowLeftIcon className="rotate-180" />
								</Buttons>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	/** Displays Full Panel */
	const fullPanel = () => {
		return (
			<div>
				<div className="h-screen w-[280px] fixed  bg-[#FFFBF7] pl-[47px] pt-[30px]">
					<KlashaLogo className="cursor-pointer" />
					<p className="text-base text-klasha-grey font-GeneralSansMedium mt-[20px] md:mt-[50px] lg:mt-[50px]  mb-4 ">
						Main pages
					</p>
					{MainPagesRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									text={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route1IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route1IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route1IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}

					<p className="text-base text-klasha-grey font-GeneralSansMedium mt-[34px] mb-4 ">
						Accept Payments
					</p>
					{AcceptPaymentsRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									text={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route2IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route2IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route2IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}

					<p className="text-base text-klasha-grey font-GeneralSansMedium mt-[34px] mb-4 ">
						Send Payments
					</p>
					{SendPaymentsRoutes.map((mappedRoutes, index) => {
						const Icon = mappedRoutes.icon;
						return (
							<div key={index}>
								<Buttons
									title={mappedRoutes.name}
									text={mappedRoutes.name}
									onClick={
										mappedRoutes.route &&
										route3IsClicked(index, mappedRoutes.route)
									}
									buttonStyling={
										route3IsActive[index]
											? "font-InterSemibold text-base text-klasha-red mb-4 flex items-center"
											: "font-InterRegular text-base text-klasha-black mb-4 flex items-center"
									}
								>
									<Icon
										className="mr-2"
										stroke={route3IsActive[index] ? "#EF2C5A" : "#000000"}
									/>
								</Buttons>
							</div>
						);
					})}
					<div className="absolute bottom-0 mt-[145px] h-[150px]">
						<div className="absolute bottom-[30px]  w-[120px]">
							<div>
								<Buttons
									title="Support"
									text="Support"
									textStyling="text-white font-InterSemibold text-[12px]"
									buttonStyling="w-[120px] h-[40px] flex items-center w-full bg-klasha-red rounded-[39px] mb-4"
								>
									<QuestionMarkIcon className="ml-[10px] mr-4" />
								</Buttons>
							</div>

							<div>
								<Buttons
									title="Hide panel"
									text="Hide panel"
									onClick={() => {
										if (showMobileMenu) {
											setShowMobileMenu(false);
										} else {
											setHidePanel(true);
										}
									}}
									textStyling="font-InterSemibold text-[12px]"
									buttonStyling="w-[120px] h-[40px] flex items-center justify-center w-full bg-white rounded-[8px] border border-klasha-black"
								>
									<ArrowLeftIcon className=" mr-[10px]" />
								</Buttons>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	return <>{hidePanel ? <>{hiddenPanel()}</> : <>{fullPanel()}</>}</>;
}

export default SidebarPanel;
