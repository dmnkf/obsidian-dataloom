import _ from "lodash";
import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { closeTopLevelMenu, isTopLevelMenu } from "src/services/menu/menuSlice";
import { useAppDispatch, useAppSelector } from "src/services/redux/hooks";
import { numToPx } from "src/services/string/conversion";

import "./styles.css";

interface Props {
	id: string;
	isOpen: boolean;
	top?: number;
	left?: number;
	maxWidth?: number;
	minWidth?: number;
	width?: number;
	height?: number;
	children: React.ReactNode;
}

export default function Menu({
	id,
	isOpen,
	top = 0,
	left = 0,
	minWidth = 0,
	maxWidth,
	width = 0,
	height = 0,
	children,
}: Props) {
	const isTopLevel = useAppSelector((state) => isTopLevelMenu(state, id));
	const dispatch = useAppDispatch();

	function handleKeyUp(e: KeyboardEvent) {
		if (e.code === "Escape" || e.code === "Enter") {
			dispatch(closeTopLevelMenu());
		}
	}

	function handleMouseDown(e: MouseEvent) {
		e.stopPropagation();
		const target = e.target as HTMLElement;
		if (isTopLevel) {
			if (!target.closest(`#${id}`)) {
				dispatch(closeTopLevelMenu());
			}
		}
	}

	useEffect(() => {
		if (isOpen) {
			window.addEventListener("keyup", handleKeyUp);
			window.addEventListener("mousedown", handleMouseDown);
		}
		return () => {
			window.removeEventListener("keyup", handleKeyUp);
			window.removeEventListener("mousedown", handleMouseDown);
		};
	}, [isOpen, isTopLevel]);

	let maxW = "unset";
	if (maxWidth) {
		if (maxWidth === 0) {
			maxW = "maxWidth";
		} else {
			maxW = numToPx(maxWidth);
		}
	}

	return (
		<>
			{isOpen &&
				ReactDOM.createPortal(
					<div className="NLT__menu" id={id}>
						<div
							className="NLT__menu-container"
							style={{
								top: numToPx(top),
								left: numToPx(left),
								minWidth: numToPx(minWidth),
								maxWidth: maxW,
								width:
									width === 0
										? "max-content"
										: numToPx(width),
								height:
									height === 0
										? "max-content"
										: numToPx(height),
							}}
						>
							{children}
						</div>
					</div>,
					document.body
				)}
		</>
	);
}
