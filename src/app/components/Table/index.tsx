import React from "react";
import "./styles.css";

import { HeaderComposition, Row } from "../../services/utils";

interface Props {
	headers: HeaderComposition[];
	rows: Row[];
	onAddColumn: () => void;
	onAddRow: () => void;
}

export default function Table({ headers, rows, onAddColumn, onAddRow }: Props) {
	return (
		<div className="NLT__table">
			<div className="NLT__thead">
				<div className="NLT__tr">
					<div className="NLT__th NLT__hidden-column"></div>
					{headers.map((header) => (
						<div
							className="NLT__th"
							style={{ maxWidth: header.width }}
							key={header.id}
							onClick={(e) => header.onClick(e)}
						>
							{header.content}
						</div>
					))}
					<div className="NLT__th">
						<button
							className="NLT__button"
							onClick={() => onAddColumn()}
						>
							New
						</button>
					</div>
				</div>
			</div>
			<div className="NLT__tbody">
				{rows.map((row) => (
					<div className="NLT__tr" key={row.id}>
						{row.content}
					</div>
				))}
			</div>
			<div className="NLT__tfoot">
				<div className="NLT__tr">
					<div className="NLT__td NLT__hidden-column"></div>
					<div className="NLT__td">
						<button
							className="NLT__button"
							onClick={() => onAddRow()}
						>
							New
						</button>
					</div>
					{headers.map((header) => (
						<div className="NLT__td" key={header.id}></div>
					))}
				</div>
			</div>
		</div>
	);
}