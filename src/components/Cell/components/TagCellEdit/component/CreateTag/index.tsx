import Tag from "src/components/Tag";
import { Color } from "src/services/color/types";

import "./styles.css";

interface Props {
	isDarkMode: boolean;
	markdown: string;
	color: Color;
	onAddTag: (markdown: string, color: Color) => void;
}

export default function CreateTag({
	isDarkMode,
	markdown,
	color,
	onAddTag,
}: Props) {
	return (
		<div
			className="NLT__create-tag NLT__selectable"
			onClick={() => {
				onAddTag(markdown, color);
			}}
		>
			<div>Create&nbsp;</div>
			<Tag
				isDarkMode={isDarkMode}
				markdown={markdown}
				color={color}
				width="120px"
			/>
		</div>
	);
}
