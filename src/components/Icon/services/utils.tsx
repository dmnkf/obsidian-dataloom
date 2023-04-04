import {
	ArrowUpward,
	ArrowDownward,
	MoreVert,
	MoreHoriz,
	Delete,
	Sort,
	KeyboardArrowDown,
	KeyboardArrowUp,
	KeyboardDoubleArrowDown,
	KeyboardDoubleArrowUp,
	KeyboardArrowLeft,
	KeyboardArrowRight,
	KeyboardDoubleArrowLeft,
	KeyboardDoubleArrowRight,
	KeyboardBackspace,
	Close,
	Numbers,
	DescriptionOutlined,
	CalendarTodayOutlined,
	LabelOutlined,
	CheckBoxOutlined,
	EditOutlined,
	TextSnippetOutlined,
	MoveUpOutlined,
	Search,
	MoveDownOutlined,
	ScheduleOutlined,
} from "@mui/icons-material";

import { IconType } from "src/services/icon/types";

export const findIcon = (
	type: IconType,
	className: string
): React.ReactNode => {
	switch (type) {
		case IconType.ARROW_UPWARD:
			return <ArrowUpward className={className} />;
		case IconType.ARROW_DOWNWARD:
			return <ArrowDownward className={className} />;
		case IconType.KEYBOARD_ARROW_UP:
			return <KeyboardArrowUp className={className} />;
		case IconType.KEYBOARD_ARROW_DOWN:
			return <KeyboardArrowDown className={className} />;
		case IconType.KEYBOARD_DOUBLE_ARROW_UP:
			return <KeyboardDoubleArrowUp className={className} />;
		case IconType.KEYBOARD_DOUBLE_ARROW_DOWN:
			return <KeyboardDoubleArrowDown className={className} />;
		case IconType.KEYBOARD_ARROW_LEFT:
			return <KeyboardArrowLeft className={className} />;
		case IconType.KEYBOARD_ARROW_RIGHT:
			return <KeyboardArrowRight className={className} />;
		case IconType.KEYBOARD_DOUBLE_ARROW_LEFT:
			return <KeyboardDoubleArrowLeft className={className} />;
		case IconType.KEYBOARD_DOUBLE_ARROW_RIGHT:
			return <KeyboardDoubleArrowRight className={className} />;
		case IconType.DELETE:
			return <Delete className={className} />;
		case IconType.MORE_VERT:
			return <MoreVert className={className} />;
		case IconType.SORT:
			return <Sort className={className} />;
		case IconType.KEYBOARD_BACKSPACE:
			return <KeyboardBackspace className={className} />;
		case IconType.MOVE_UP:
			return <MoveUpOutlined className={className} />;
		case IconType.MOVE_DOWN:
			return <MoveDownOutlined className={className} />;
		case IconType.TEXT_SNIPPET:
			return <TextSnippetOutlined className={className} />;
		case IconType.EDIT:
			return <EditOutlined className={className} />;
		case IconType.MORE_HORIZ:
			return <MoreHoriz className={className} />;
		case IconType.CLOSE:
			return <Close className={className} />;
		case IconType.DESCRIPTION:
			return <DescriptionOutlined className={className} />;
		case IconType.NUMBERS:
			return <Numbers className={className} />;
		case IconType.CHECK:
			return <CheckBoxOutlined className={className} />;
		case IconType.LABEL:
			return <LabelOutlined className={className} />;
		case IconType.CALENDAR_TODAY:
			return <CalendarTodayOutlined className={className} />;
		case IconType.SCHEDULE:
			return <ScheduleOutlined className={className} />;
		case IconType.SEARCH:
			return <Search className={className} />;
		default:
			return "";
	}
};