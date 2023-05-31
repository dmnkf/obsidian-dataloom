import {
	rowLastEditedTime,
	rowLastEditedTimeUpdate,
} from "../table-state/row-state-operations";
import TableStateCommand from "../table-state/table-state-command";
import { TableState } from "../types/types";

export default class TagCellRemoveCommand extends TableStateCommand {
	private cellId: string;
	private rowId: string;
	private tagId: string;

	private previousEditedTime: number;

	/**
	 * The index of the tag id in the tag ids array before the command is executed
	 */
	private previousTagIdIndex: number;

	constructor(cellId: string, rowId: string, tagId: string) {
		super();
		this.cellId = cellId;
		this.rowId = rowId;
		this.tagId = tagId;
	}

	execute(prevState: TableState): TableState {
		super.onExecute();

		const { bodyCells, bodyRows } = prevState.model;

		const newBodyCells = bodyCells.map((cell) => {
			if (cell.id === this.cellId) {
				this.previousTagIdIndex = cell.tagIds.indexOf(this.tagId);

				const { tagIds } = cell;
				return {
					...cell,
					tagIds: tagIds.filter((id) => id !== this.tagId),
				};
			}
			return cell;
		});

		this.previousEditedTime = rowLastEditedTime(bodyRows, this.rowId);

		return {
			...prevState,
			model: {
				...prevState.model,
				bodyCells: newBodyCells,
				bodyRows: rowLastEditedTimeUpdate(bodyRows, this.rowId),
			},
		};
	}

	redo(prevState: TableState): TableState {
		super.onRedo();
		return this.execute(prevState);
	}

	undo(prevState: TableState): TableState {
		super.onUndo();
		const { bodyCells, bodyRows } = prevState.model;

		const newBodyCells = bodyCells.map((cell) => {
			if (cell.id === this.cellId) {
				const newTagIds = [...cell.tagIds];
				newTagIds.splice(this.previousTagIdIndex, 0, this.tagId);

				return {
					...cell,
					tagIds: newTagIds,
				};
			}
			return cell;
		});

		return {
			...prevState,
			model: {
				...prevState.model,
				bodyCells: newBodyCells,
				bodyRows: rowLastEditedTimeUpdate(
					bodyRows,
					this.rowId,
					this.previousEditedTime
				),
			},
		};
	}
}