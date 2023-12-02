// @ts-nocheck
import React from "react";
import Buttons from "../buttons/buttons";
import { useWindowResize } from "../../helpers/useWindowResize";
import { ReactComponent as MenuIcon } from "../../assets/svg/general/menu-icon.svg";
import { ReactComponent as UserIcon } from "../../assets/svg/general/user-icon.svg";
import { ReactComponent as ArrowLeftIcon } from "../../assets/svg/sidebar-panel/arrow-left-icon.svg";

function Header({ setShowMobileMenu }) {
	const { width } = useWindowResize();

	const desktop = () => {
		return (
			<div className="h-[65px] border-b border-b-klasha-border flex items-center justify-end pr-[30px]">
				<Buttons title="Account" buttonStyling="flex items-center mr-4">
					<UserIcon />
					<ArrowLeftIcon className="rotate-[270deg] ml-1" />
				</Buttons>
				<Buttons title="Language" buttonStyling="flex items-center">
					<p className="font-InterSemibold text-sm">En</p>
					<ArrowLeftIcon className="rotate-[270deg] ml-1" />
				</Buttons>
			</div>
		);
	};

	const mobile = () => {
		return (
			<div className="h-[65px] border-b border-b-klasha-border flex items-center justify-between px-[10px]">
				<div>
					<Buttons
						title="Menu"
						onClick={() => setShowMobileMenu(true)}
						buttonStyling="flex items-center mr-4"
					>
						<MenuIcon />
					</Buttons>
				</div>
				<div className="flex items-center">
					<Buttons title="Account" buttonStyling="flex items-center mr-4">
						<UserIcon />
						<ArrowLeftIcon className="rotate-[270deg] ml-1" />
					</Buttons>
					<Buttons title="Language" buttonStyling="flex items-center">
						<p className="font-InterSemibold text-sm">En</p>
						<ArrowLeftIcon className="rotate-[270deg] ml-1" />
					</Buttons>
				</div>
			</div>
		);
	};

	return (
		<div className="sticky top-0 z-10 bg-white">
			{width > 1060 ? desktop() : mobile()}
		</div>
	);
}

export default Header;
