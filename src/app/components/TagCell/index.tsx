import React from "react";

import { CELL_COLOR } from "../../constants";
import CloseIcon from "@mui/icons-material/Close";

import "./styles.css";

interface Props {
	cellId?: string;
	id?: string;
	content: string;
	hide?: boolean;
	color?: string;
	showRemove?: boolean;
	selectable?: boolean;
	isCreate?: boolean;
	onRemoveClick?: (cellId: string, tagId: string) => void;
	onClick?: (tagId: string) => void;
}

export default function TagCell({
	cellId,
	id,
	content,
	hide,
	color,
	showRemove,
	selectable,
	isCreate,
	onRemoveClick,
	onClick,
}: Props) {
	let tagClass = "NLT__tag";
	if (color === CELL_COLOR.RED) {
		tagClass += " NLT__tag--red";
	} else if (color === CELL_COLOR.YELLOW) {
		tagClass += " NLT__tag--yellow";
	} else if (color === CELL_COLOR.ORANGE) {
		tagClass += " NLT__tag--orange";
	} else if (color === CELL_COLOR.PINK) {
		tagClass += " NLT__tag--pink";
	} else if (color === CELL_COLOR.PURPLE) {
		tagClass += " NLT__tag--purple";
	} else if (color === CELL_COLOR.GRAY) {
		tagClass += " NLT__tag--gray";
	}

	let cellClass = "NLT__tag-cell";
	if (selectable) cellClass += " NLT__selectable";

	if (hide) return <></>;

	return (
		<div className={cellClass} onClick={() => onClick(id)}>
			{isCreate && <div>Create</div>}
			<div className={tagClass}>
				<div>{content}</div>
				{showRemove && (
					<CloseIcon
						className="NLT__icon--md NLT__margin-left"
						onClick={() => onRemoveClick(cellId, id)}
					/>
				)}
			</div>
		</div>
	);
}