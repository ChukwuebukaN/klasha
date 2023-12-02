import React from "react";

type InputProps = {
	label?: string;
	icon?: React.ReactNode;
	icon2?: React.ReactNode;
	button?: React.ReactNode;
	title?: string;
	placeholder?: string;
	type?: string;
	value?: string;
	styling?: string;
	titleStyling?: string;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
	onChange?: (
		e:
			| React.ChangeEvent<HTMLInputElement>
			| React.ChangeEvent<HTMLTextAreaElement>,
	) => void;
};

const Inputs: React.FC<InputProps> = (props): JSX.Element => {
	const {
		label,
		titleStyling,
		title,
		icon,
		icon2,
		type,
		value,
		placeholder,
		styling,
		button,
		onKeyDown,
		onChange,
	} = props;

	return (
		<div>
			<label htmlFor={label}>
				{title && (
					<p
						className={`${titleStyling} mb-1 font-PoppinsRegular text-[13px] leading-[19.5px] text-skatecityng-font-black`}
					>
						{title}
					</p>
				)}
				{icon && icon}
				<input
					id={label}
					type={type}
					value={value}
					placeholder={placeholder}
					onChange={onChange}
					onKeyDown={onKeyDown}
					className={`${styling} text-[14px] leading-[22px] py-3 px-5 appearance-none focus:outline-none`}
				/>
				{icon2 && icon2}
				{button && button}
			</label>
		</div>
	);
};

export default Inputs;
