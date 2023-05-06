import { Tag as TagType } from "src/data/types";
import Tag from "src/react/shared/shared-tag";
import Wrap from "src/react/shared/shared-wrap";

import { useFocusMenuInput } from "src/shared/hooks";

import "./styles.css";

interface MenuHeaderProps {
	isDarkMode: boolean;
	cellId: string;
	isMenuVisible: boolean;
	tags: TagType[];
	inputText: string;
	onInputTextChange: (value: string) => void;
	onRemoveTag: (tagId: string) => void;
}

export default function MenuHeader({
	isDarkMode,
	isMenuVisible,
	cellId,
	tags,
	inputText,
	onInputTextChange,
	onRemoveTag,
}: MenuHeaderProps) {
	const inputRef = useFocusMenuInput(
		isMenuVisible,
		inputText,
		onInputTextChange
	);
	return (
		<div className="NLT__tag-menu-header">
			<Wrap spacingX="sm">
				{tags
					.filter((tag) => tag.cellIds.find((c) => c === cellId))
					.map((tag) => (
						<Tag
							isDarkMode={isDarkMode}
							key={tag.id}
							id={tag.id}
							color={tag.color}
							markdown={tag.markdown}
							maxWidth="150px"
							showRemove
							onRemoveClick={onRemoveTag}
						/>
					))}
				<input
					autoFocus
					ref={inputRef}
					type="text"
					value={inputText}
					onChange={(e) => onInputTextChange(e.target.value)}
				/>
			</Wrap>
		</div>
	);
}
