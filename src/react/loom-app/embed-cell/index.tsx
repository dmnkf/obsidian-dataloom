import { getEmbedCellContent } from "src/shared/cell-content/embed-cell-content";
import { AspectRatio, PaddingSize } from "src/shared/loom-state/types";

import Embed from "./embed";
import { useMountState } from "../mount-provider";

import "./styles.css";

interface Props {
	isExternalLink: boolean;
	markdown: string;
	aspectRatio: AspectRatio;
	horizontalPadding: PaddingSize;
	verticalPadding: PaddingSize;
}

export default function EmbedCell({
	isExternalLink,
	markdown,
	aspectRatio,
	horizontalPadding,
	verticalPadding,
}: Props) {
	const { app } = useMountState();
	const content = getEmbedCellContent(app, markdown, {
		shouldRenderMarkdown: true,
		isExternalLink,
	});
	return (
		<div className="dataloom-embed-cell">
			<Embed
				isExternalLink={isExternalLink}
				content={content}
				aspectRatio={aspectRatio}
				horizontalPadding={horizontalPadding}
				verticalPadding={verticalPadding}
			/>
		</div>
	);
}
