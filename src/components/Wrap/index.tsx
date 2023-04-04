import { getSpacing } from "src/services/spacing";
import { SpacingSize } from "src/services/spacing/types";

interface Props {
	spacingX?: SpacingSize;
	spacingY?: SpacingSize;
	style?: Record<string, string | number>;
	children: React.ReactNode;
}

export default function Stack({
	spacingX = "md",
	spacingY = "md",
	style,
	children,
}: Props) {
	return (
		<div
			style={{
				...style,
				display: "flex",
				flexWrap: "wrap",
				rowGap: getSpacing(spacingX),
				columnGap: getSpacing(spacingY),
			}}
		>
			{children}
		</div>
	);
}