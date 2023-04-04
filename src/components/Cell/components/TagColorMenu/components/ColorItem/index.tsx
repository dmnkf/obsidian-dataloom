import { findColorClassName } from "src/services/color";
import { Color } from "src/services/color/types";
import { uppercaseFirst } from "src/services/string/utils";
import "./styles.css";

interface Props {
	isDarkMode: boolean;
	color: Color;
	isSelected: boolean;
	onColorClick: (color: Color) => void;
}

export default function ColorItem({
	isDarkMode,
	color,
	isSelected,
	onColorClick,
}: Props) {
	let containerClass = "NLT__color-item NLT__selectable";
	if (isSelected) containerClass += " NLT__selected";

	const colorClass = findColorClassName(isDarkMode, color);
	let squareClass = "NLT__color-item-square";
	squareClass += " " + colorClass;

	return (
		<div
			className={containerClass}
			onClick={(e) => {
				onColorClick(color);
			}}
		>
			<div className={squareClass}></div>
			<div>{uppercaseFirst(color)}</div>
		</div>
	);
}
