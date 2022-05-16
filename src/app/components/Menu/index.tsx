import React from "react";

import "./styles.css";

interface Props {
	id: string;
	isOpen: boolean;
	top: number;
	left: number;
	children: React.ReactNode;
}

export default function Menu({ id, isOpen, top, left, children }: Props) {
	//Add onMouseDown to prevent blur event being called in the FocusProvider
	//See: https://github.com/react-toolbox/react-toolbox/issues/1323#issuecomment-656778859
	return (
		<>
			{isOpen && (
				<div
					className="NLT__menu"
					id={id}
					onMouseDown={(e) => e.preventDefault()}
				>
					<div
						className="NLT__menu-container"
						style={{
							top: `${top}px`,
							left: `${left}px`,
						}}
					>
						{children}
					</div>
				</div>
			)}
		</>
	);
}
