import React from "react";

type ButtonProps = {
	title?: string;
	buttonStyling?: string;
	textStyling?: string;
	text?: string;
	onClick?: React.MouseEventHandler;
	icon?: React.ReactNode;
	children?: React.ReactNode;
	children2?: React.ReactNode;
};

const Buttons: React.FC<ButtonProps> = (props): JSX.Element => {
	const {
		title,
		buttonStyling,
		textStyling,
		text,
		onClick,
		icon,
		children,
		children2,
	} = props;

	return (
		<button
			type="button"
			title={title}
			onClick={onClick}
			className={buttonStyling}
		>
			{icon && icon}
			{children && children}
			{text && <p className={textStyling}>{text}</p>}
			{children2 && children2}
		</button>
	);
};

export default Buttons;
