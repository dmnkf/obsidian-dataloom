import React from "react";

import IconButton from "src/components/IconButton";
import Stack from "src/components/Stack";
import { Icon } from "src/services/icon/types";

interface Props {
	title: string;
	children: React.ReactNode;
	onBackClick: () => void;
}

export default function Submenu({ title, children, onBackClick }: Props) {
	return (
		<>
			<Stack spacing="10px">
				<IconButton
					icon={Icon.KEYBOARD_BACKSPACE}
					onClick={() => onBackClick()}
				/>
				<div className="NLT__header-menu-title">{title}</div>
			</Stack>
			<hr className="NLT__hr" />
			{children}
		</>
	);
}