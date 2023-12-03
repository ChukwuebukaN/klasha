import React from "react";
import Buttons from "../buttons/buttons";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/sidebar-panel/arrow-left-icon.svg";
import { ReactComponent as ArrowDownIcon } from "../../assets/svg/dashboard/arrow-down-icon.svg";

function SalesMobileSelectors() {
	return (
		<div className="md:hidden lg:hidden col-span-4 mb-6">
			<div className="flex items-center justify-evenly">
				<p className="font-GeneralSansMedium text-base">Sales</p>
				<div className="h-6 w-[2px] bg-klasha-border mr-3" />
				<Buttons
					title="7 days"
					text="7 days"
					textStyling="font-InterSemibold text-sm text-klasha-red"
				/>
				<Buttons
					title="30 days"
					text="30 days"
					textStyling="font-InterSemibold text-sm "
				/>
			</div>

			<div className="flex items-center justify-evenly my-4">
				<Buttons
					title="USD"
					text="USD"
					children2={<ArrowLeftIcon className="ml-2 rotate-[270deg]" />}
					textStyling="font-InterSemibold text-[12px]"
					buttonStyling="w-[90px] h-[40px]  flex items-center justify-center bg-white rounded-[8px] border border-klasha-black"
				/>

				<Buttons
					title="Download report"
					text="Download report"
					icon={<ArrowDownIcon className="mr-2" />}
					textStyling="font-InterSemibold text-[12px]"
					buttonStyling="w-[148px] h-[40px] ml-[10px] flex items-center justify-center bg-white rounded-[8px] border border-klasha-black"
				/>
			</div>
			<div className="flex items-center justify-evenly">
				<Buttons
					title="Email"
					text="Email"
					children2={<ArrowLeftIcon className="ml-2 rotate-[270deg]" />}
					textStyling="font-InterReular text-[14px] text-[#565C69]"
					buttonStyling="w-[283px] px-[14px] h-[40px] ml-[10px] flex items-center justify-between bg-white rounded-[8px] border border-[#F4F4F4]"
				/>
			</div>
		</div>
	);
}

export default SalesMobileSelectors;
