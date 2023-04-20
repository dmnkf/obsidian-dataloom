import { useMemo } from "react";

import { SortDir, Column, HeaderCell } from "src/services/tableState/types";

import { useAppSelector } from "src/services/redux/hooks";
import Stack from "../Stack";

import {
	CellNotFoundError,
	ColumnIdError,
} from "src/services/tableState/error";
import SearchBar from "./components/SearchBar";
import SortBubble from "./components/SortBubble";

import "./styles.css";
import Flex from "../Flex";
import ToggleColumn from "./components/ToggleColumn";

interface SortButtonListProps {
	bubbles: { sortDir: SortDir; markdown: string; columnId: string }[];
	onRemoveClick: (columnId: string) => void;
}

const SortBubbleList = ({ bubbles, onRemoveClick }: SortButtonListProps) => {
	const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
	return (
		<Stack spacing="sm">
			{bubbles.map((bubble, i) => (
				<SortBubble
					key={i}
					isDarkMode={isDarkMode}
					sortDir={bubble.sortDir}
					markdown={bubble.markdown}
					onRemoveClick={() => onRemoveClick(bubble.columnId)}
				/>
			))}
		</Stack>
	);
};

interface Props {
	headerCells: HeaderCell[];
	columns: Column[];
	onSortRemoveClick: (columnId: string) => void;
	onColumnToggle: (columnId: string) => void;
}
export default function OptionBar({
	headerCells,
	columns,
	onSortRemoveClick,
	onColumnToggle,
}: Props) {
	const bubbles = useMemo(() => {
		return headerCells
			.filter((cell) => {
				const columnId = cell.columnId;
				const column = columns.find((c) => c.id == columnId);
				if (!column) throw new ColumnIdError(columnId);
				return column.sortDir !== SortDir.NONE;
			})
			.map((cell) => {
				const columnId = cell.columnId;
				const column = columns.find((c) => c.id == columnId);
				if (!column) throw new ColumnIdError(columnId);
				return {
					columnId: cell.columnId,
					markdown: cell.markdown,
					sortDir: column.sortDir,
				};
			});
	}, [headerCells, columns]);

	const toggleColumns = useMemo(() => {
		return columns.map((column) => {
			const cell = headerCells.find((cell) => cell.columnId == column.id);
			if (!cell) throw new CellNotFoundError();
			return {
				id: column.id,
				name: cell.markdown,
				isVisible: column.isVisible,
			};
		});
	}, [headerCells, columns]);

	return (
		<div className="NLT__option-bar">
			<Stack spacing="lg" isVertical>
				<Flex justify="space-between" align="flex-end">
					<SortBubbleList
						bubbles={bubbles}
						onRemoveClick={onSortRemoveClick}
					/>
					<Stack spacing="sm" justify="flex-end">
						<SearchBar />
						<ToggleColumn
							columns={toggleColumns}
							onToggle={onColumnToggle}
						/>
					</Stack>
				</Flex>
			</Stack>
		</div>
	);
}
