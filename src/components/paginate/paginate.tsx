import React from "react";
import { ReactComponent as ArrowGreyIcon } from "../../assets/svg/transactions/arrow-grey-icon.svg";
import Buttons from "../buttons/buttons";

function Paginate() {
	return (
		<div className="text-klasha-black font-InterRegular text-sm h-[36px] w-[374px] px-[12px] flex items-center justify-between border border-klasha-border rounded-lg">
			<Buttons title="Previous">
				<ArrowGreyIcon />
			</Buttons>
			<Buttons
				title="Page 1"
				text="1"
				textStyling="font-InterSemibold text-base text-klasha-black"
				buttonStyling="h-[25px] w-[25px] rounded-full bg-klasha-border flex items-center justify-center"
			/>
			<Buttons
				title="Page 2"
				text="2"
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons
				title="Page 3"
				text="3"
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons
				title="..."
				text="..."
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons
				title="Page 8"
				text="8"
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons
				title="Page 9"
				text="9"
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons
				title="Page 10"
				text="10"
				textStyling="font-InterSemibold text-base text-[#A39D9E]"
				buttonStyling="h-[25px] w-[25px] flex items-center justify-center"
			/>
			<Buttons title="Next">
				<ArrowGreyIcon className="rotate-180" />
			</Buttons>
		</div>
	);
}

export default Paginate;
