import Menu from "src/react/shared/menu";
import Padding from "src/react/shared/padding";
import Stack from "src/react/shared/stack";
import Icon from "src/react/shared/icon";
import FilterRow from "./filter-row";
import Text from "src/react/shared/text";
import Button from "src/react/shared/button";

import ColumNotFoundError from "src/shared/error/column-not-found-error";
import { FilterRule, FilterType } from "src/shared/loom-state/types";
import { ColumnWithMarkdown } from "../types";
import { isSmallScreenSize } from "src/shared/render/utils";
import {
	LoomMenuCloseRequestType,
	Position,
} from "src/react/shared/menu/types";

interface Props {
	id: string;
	triggerPosition: Position;
	isOpen: boolean;
	columns: ColumnWithMarkdown[];
	filterRules: FilterRule[];
	onAddClick: (columnId: string) => void;
	onToggle: (id: string) => void;
	onColumnChange: (id: string, columnId: string) => void;
	onFilterTypeChange: (id: string, value: FilterType) => void;
	onTextChange: (id: string, value: string) => void;
	onDeleteClick: (id: string) => void;
	onTagsChange: (id: string, value: string[]) => void;
	onRequestClose: (type: LoomMenuCloseRequestType) => void;
	onClose: () => void;
}

export default function FilterMenu({
	id,
	triggerPosition,
	isOpen,
	columns,
	filterRules,
	onAddClick,
	onToggle,
	onColumnChange,
	onFilterTypeChange,
	onTextChange,
	onDeleteClick,
	onTagsChange,
	onRequestClose,
	onClose,
}: Props) {
	return (
		<Menu
			id={id}
			isOpen={isOpen}
			triggerPosition={triggerPosition}
			openDirection="bottom-left"
			maxHeight={255}
			onRequestClose={onRequestClose}
			onClose={onClose}
		>
			<div
				className="dataloom-filter-menu"
				style={{
					width: isSmallScreenSize()
						? "calc(100vw - 30px)"
						: undefined,
				}}
			>
				<Padding p="md">
					<Stack spacing="lg">
						{filterRules.map((rule) => {
							const {
								id,
								text,
								columnId,
								isEnabled,
								type: filterType,
								tagIds,
							} = rule;

							const column = columns.find(
								(column) => column.id === columnId
							);
							if (!column) throw new ColumNotFoundError(columnId);
							const { tags, type: cellType } = column;

							return (
								<FilterRow
									key={id}
									id={id}
									columns={columns}
									text={text}
									columnTags={tags}
									cellType={cellType}
									tagIds={tagIds}
									filterType={filterType}
									columnId={columnId}
									isEnabled={isEnabled}
									onTextChange={onTextChange}
									onColumnChange={onColumnChange}
									onFilterTypeChange={onFilterTypeChange}
									onToggle={onToggle}
									onDeleteClick={onDeleteClick}
									onTagsChange={onTagsChange}
								/>
							);
						})}
						<Stack isHorizontal>
							<Button
								icon={<Icon lucideId="plus" />}
								ariaLabel="Add filter rule"
								onClick={() => onAddClick(columns[0].id)}
							/>
							{filterRules.length === 0 && (
								<Text value="No rules to display" />
							)}
						</Stack>
					</Stack>
				</Padding>
			</div>
		</Menu>
	);
}
