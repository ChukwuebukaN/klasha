/* eslint-disable no-nested-ternary */
// @ts-nocheck
import React, { useEffect } from "react";
import Buttons from "../../components/buttons/buttons";
import Header from "../../components/header/header";
import { SalesOverviewData } from "../../components/sales-cards/sales-data";
import { useWindowResize } from "../../helpers/useWindowResize";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/sidebar-panel/arrow-left-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/dashboard/arrow-down-icon.svg";
import { ReactComponent as KlashaWireLines } from "../../assets/svg/dashboard/klasha-wire-lines.svg";
import SalesOverviewCard from "../../components/sales-cards/sales-overview-card";
import SalesCard from "../../components/sales-cards/sales-card";

function Dashboard({ setShowMobileMenu }) {
	const { width } = useWindowResize();

	useEffect(() => {
		const ac = new AbortController();
		document.title = "Klasha | Dashboard";
		return function cleanup() {
			ac.abort();
		};
	}, []);

	/** Displays Desktop View */
	const desktop = () => {
		return (
			<div className="">
				<Header setShowMobileMenu={setShowMobileMenu} />
				<div className="px-[32px] mt-[100px]">
					<p className="font-GeneralSansMedium text-base">Sales overview</p>
					<div
						className={`${
							width > 1400
								? "grid-cols-4"
								: width > 1200
								  ? "grid-cols-3"
								  : width > 1000
								    ? "grid-cols-2"
								    : "grid-cols-1"
						}
						grid gap-6 w-full place-items-center mt-[24px] `}
					>
						{SalesOverviewData.map((fetchedSalesData, index) => (
							<div
								key={index}
								className={` ${"w-[256px] h-[240px] overflow-hidden p-6 rounded-lg border border-black"} ${
									index === 1 ? "bg-black text-white" : ""
								} `}
							>
								<div className="mb-[26px]">
									<p className="font-InterRegular text-sm ">
										{fetchedSalesData.date}
									</p>
									<p className="font-GeneralSansMedium text-xl ">
										{fetchedSalesData.todaysAmount}
									</p>
								</div>
								{fetchedSalesData.periodAmount && <SalesOverviewCard />}
								<div className="mt-[19px]">
									<p className="font-InterRegular text-sm ">
										{fetchedSalesData.period}
									</p>
									<p className="font-GeneralSansMedium text-xl ">
										{fetchedSalesData.periodAmount}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="px-[32px] my-[32px]">
					<div className="grid gap-x-6 grid-cols-1 md:grid-cols-5 lg:grid-cols-6 ">
						<div className="flex items-center justify-between mb-[5px] col-span-1 md:col-span-2 lg:col-span-4 w-full">
							<p className="font-GeneralSansMedium text-base mr-[10px]">
								Sales
							</p>
							<div className="h-6 w-[2px] bg-klasha-border mr-3" />
							<div className="w-[160px] flex items-center justify-between">
								<p className="font-InterSemibold text-sm mr-6 text-klasha-red">
									7 days
								</p>
								<p className="font-InterSemibold text-sm mr-6">30 days</p>
							</div>
							<Buttons
								title="USD"
								text="USD"
								children2={<ArrowLeftIcon className="ml-2 rotate-[270deg]" />}
								textStyling="font-InterSemibold text-[12px]"
								buttonStyling="w-[90px] h-[40px]  flex items-center justify-center bg-white rounded-[8px] border border-klasha-black"
							/>
							<Buttons
								title="Email"
								text="Email"
								children2={<ArrowLeftIcon className="ml-2 rotate-[270deg]" />}
								textStyling="font-InterReular text-[14px] text-[#565C69]"
								buttonStyling="w-[283px] px-[14px] h-[40px] ml-[10px] flex items-center justify-between bg-white rounded-[8px] border border-[#F4F4F4]"
							/>
							<Buttons
								title="Download report"
								text="Download report"
								icon={<ArrowDownIcon className="mr-2" />}
								textStyling="font-InterSemibold text-[12px]"
								buttonStyling="w-[148px] h-[40px] ml-[10px] flex items-center justify-center bg-white rounded-[8px] border border-klasha-black"
							/>
						</div>
						<div className="col-span-1 md:col-span-2 lg:col-span-4 h-[284px] rounded-lg border border-black overflow-hidden">
							<SalesCard />
						</div>
						<div className="col-span-1 md:col-span-2 lg:col-span-2 h-[284px] p-6 rounded-lg bg-klasha-red overflow-hidden">
							<KlashaWireLines className="absolute" />
							<div className="absolute">
								<div className="mb-[92px]">
									<p className="font-GeneralSansMedium text-xl text-white w-[200px] h-[96px]">
										KlashaWire - send money to businesses globally from Africa
									</p>
								</div>
								<Buttons
									title="Send a Wire"
									text="Send a Wire"
									textStyling="font-InterSemibold text-[14px] text-white"
									buttonStyling="w-[130px] h-[48px] flex items-center justify-center rounded-[8px] bg-klasha-black"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	};

	/** Displays Mobile View */
	const mobile = () => {
		return (
			<div>
				<p>d</p>
			</div>
		);
	};

	return <>{width > 1060 ? desktop() : mobile()}</>;
}

export default Dashboard;
