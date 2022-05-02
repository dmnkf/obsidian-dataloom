import {
	AppData,
	Tag,
	initialCell,
	initialTag,
	initialRow,
	initialHeader,
} from "../state";
import { v4 as uuidv4 } from "uuid";
import {
	CELL_TYPE,
	TabbableElementType,
	TABBABLE_ELEMENT_TYPE,
} from "src/app/constants";

export const addRow = (data: AppData): AppData => {
	const rowId = uuidv4();
	const tags: Tag[] = [];
	const cells = data.headers.map((header, i) => {
		const cellId = uuidv4();
		if (header.type === CELL_TYPE.TAG)
			tags.push(initialTag(header.id, cellId, "", ""));
		return initialCell(cellId, rowId, header.id, header.type, "");
	});
	return {
		...data,
		updateTime: Date.now(),
		rows: [...data.rows, initialRow(rowId, Date.now())],
		cells: [...data.cells, ...cells],
		tags: [...data.tags, ...tags],
	};
};

export const addColumn = (data: AppData): AppData => {
	const header = initialHeader(`Column ${data.headers.length}`);
	const cells = [...data.cells];
	data.rows.forEach((row) => {
		cells.push(
			initialCell(uuidv4(), row.id, header.id, CELL_TYPE.TEXT, "")
		);
	});
	return {
		...data,
		updateTime: Date.now(),
		headers: [...data.headers, header],
		cells,
	};
};

export const findTabbableElement = (
	data: AppData,
	id: string
): TabbableElement => {
	const matrix = findTabbableElementMatrix(data);
	const index = matrix.findIndex((obj) => obj.id === id);
	return matrix[index];
};

export const findNextTabbableElement = (
	data: AppData,
	id: string
): TabbableElement => {
	const matrix = findTabbableElementMatrix(data);
	const index = matrix.findIndex((obj) => obj.id === id);
	return matrix[(index + 1) % matrix.length];
};

export interface TabbableElement {
	[id: string]: string;
}

export const findTabbableElementMatrix = (data: AppData): TabbableElement[] => {
	const tabbableElementMatrix: TabbableElement[] = [];
	// data.headers.forEach((header) => {
	// 	tabbableElementMatrix.push({
	// 		[header.id]: TABBABLE_ELEMENT_TYPE.HEADER,
	// 	});
	// });
	//tabbableElementMatrix.push({ [`button-0`]: TABBABLE_ELEMENT_TYPE.BUTTON });

	data.rows.forEach((row, i) => {
		data.headers.forEach((header) => {
			const cell = data.cells.find(
				(cell) => cell.rowId === row.id && cell.headerId === header.id
			);
			tabbableElementMatrix.push({
				id: cell.id,
				type: TABBABLE_ELEMENT_TYPE.CELL,
			});
		});
		// tabbableElementMatrix.push({
		// 	[`button-${i + 1}`]: TABBABLE_ELEMENT_TYPE.BUTTON,
		// });
	});
	// tabbableElementMatrix.push({
	// 	[`button-${data.rows.length + 1}`]: TABBABLE_ELEMENT_TYPE.BUTTON,
	// });
	return tabbableElementMatrix;
};
