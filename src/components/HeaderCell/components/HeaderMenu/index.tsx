import { useState } from "react";

import Menu from "src/components/Menu";
import OptionSubmenu from "./components/OptionSubmenu";
import TypeSubmenu from "./components/TypeSubmenu";
import BaseMenu from "./components/BaseMenu";

import { CellType, CurrencyType, SortDir } from "src/services/tableState/types";

import "./styles.css";
import { Submenu } from "./types";
interface Props {
	isOpen: boolean;
	canDeleteColumn: boolean;
	top: number;
	left: number;
	id: string;
	currencyType: CurrencyType;
	rowId: string;
	cellId: string;
	markdown: string;
	shouldWrapOverflow: boolean;
	hasAutoWidth: boolean;
	columnSortDir: SortDir;
	columnType: CellType;
	columnId: string;
	numColumns: number;
	onTypeSelect: (columnId: string, type: CellType) => void;
	onSortClick: (columnId: string, sortDir: SortDir) => void;
	onDeleteClick: (columnId: string) => void;
	onAutoWidthToggle: (columnId: string, value: boolean) => void;
	onWrapOverflowToggle: (columnId: string, value: boolean) => void;
	onNameChange: (cellId: string, rowId: string, value: string) => void;
	onCurrencyChange: (columnId: string, value: CurrencyType) => void;
	onClose: () => void;
}

export default function HeaderMenu({
	isOpen,
	id,
	rowId,
	top,
	left,
	cellId,
	markdown,
	currencyType,
	canDeleteColumn,
	columnType,
	columnSortDir,
	columnId,
	numColumns,
	hasAutoWidth,
	shouldWrapOverflow,
	onTypeSelect,
	onSortClick,
	onDeleteClick,
	onClose,
	onWrapOverflowToggle,
	onAutoWidthToggle,
	onNameChange,
	onCurrencyChange,
}: Props) {
	const [submenu, setSubmenu] = useState<Submenu | null>(null);

	function handleSortClick(sortDir: SortDir) {
		onSortClick(columnId, sortDir);
		onClose();
	}

	function handleTypeClick(type: CellType) {
		onTypeSelect(columnId, type);
		onClose();
		setSubmenu(null);
	}

	function handleDeleteClick() {
		if (!window.confirm("Are you sure you want to delete this column?"))
			return;
		onDeleteClick(columnId);
		onClose();
		setSubmenu(null);
	}

	function handleBackClick() {
		setSubmenu(null);
	}

	function handleCurrencyChange(value: CurrencyType) {
		onCurrencyChange(columnId, value);
	}

	return (
		<Menu isOpen={isOpen} id={id} top={top} left={left} width={175}>
			<div className="NLT__header-menu">
				{submenu === null && (
					<BaseMenu
						rowId={rowId}
						cellId={cellId}
						columnName={markdown}
						columnType={columnType}
						numColumns={numColumns}
						columnSortDir={columnSortDir}
						onColumnNameChange={onNameChange}
						onSortClick={handleSortClick}
						onSubmenuChange={setSubmenu}
					/>
				)}
				{submenu === Submenu.OPTIONS && (
					<OptionSubmenu
						canDeleteColumn={canDeleteColumn}
						title="Options"
						columnType={columnType}
						columnId={columnId}
						columnCurrencyType={currencyType}
						hasAutoWidth={hasAutoWidth}
						shouldWrapOverflow={shouldWrapOverflow}
						onBackClick={handleBackClick}
						onAutoWidthToggle={onAutoWidthToggle}
						onWrapOverflowToggle={onWrapOverflowToggle}
						onCurrencyChange={handleCurrencyChange}
						onDeleteClick={handleDeleteClick}
					/>
				)}
				{submenu === Submenu.TYPE && (
					<TypeSubmenu
						title="Type"
						columnType={columnType}
						onTypeClick={handleTypeClick}
						onBackClick={handleBackClick}
					/>
				)}
			</div>
		</Menu>
	);
}
