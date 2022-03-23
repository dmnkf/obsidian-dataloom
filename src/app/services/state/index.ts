import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CELL_TYPE, ARROW } from "../../constants";

export interface Header {
	id: string;
	position: number;
	content: string;
	arrow: string;
	width: string;
	type: string;
}

export interface TableHeader extends Header {
	component: React.ReactNode;
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export interface Row {
	id: string;
	creationTime?: number;
}

export interface TableRow extends Row {
	component: React.ReactNode;
}

export interface Cell {
	id: string;
	rowId: string;
	position: number;
	content: string;
	type: string;
}

export interface Tag {
	id: string;
	content: string;
	color: string;
	selected: string[];
}

export const initialHeader = (content: string, position: number): Header => {
	return {
		id: uuidv4(),
		position,
		content,
		arrow: ARROW.NONE,
		width: "15rem",
		type: CELL_TYPE.TEXT,
	};
};

export const initialRow = (id: string): Row => {
	return {
		id,
		creationTime: Date.now(),
	};
};

export const initialCell = (
	id: string,
	rowId: string,
	position: number,
	type: string,
	content = ""
): Cell => {
	return {
		id,
		rowId,
		position,
		type,
		content,
	};
};

export const initialTag = (
	text: string,
	cellId: string,
	color: string
): Tag => {
	return {
		id: uuidv4(),
		content: text,
		color,
		selected: [cellId],
	};
};

export const initialHeaderMenuState = {
	isOpen: false,
	left: 0,
	top: 0,
	id: "",
	position: 0,
	content: "",
	type: CELL_TYPE.TEXT,
};