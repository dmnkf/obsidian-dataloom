import { MarkdownRenderer, MarkdownView, WorkspaceLeaf } from "obsidian";
import DashboardsView from "src/obsidian/dashboards-view";

const renderText = async (leaf: WorkspaceLeaf, value: string) => {
	const div = document.createElement("div");
	div.style.width = "100%";
	div.style.height = "100%";

	try {
		const view = leaf.view;
		if (view instanceof MarkdownView || view instanceof DashboardsView) {
			await MarkdownRenderer.renderMarkdown(
				value,
				div,
				view.file.path,
				view
			);
		}
	} catch (e) {
		console.error(e);
	}
	return div;
};

export const renderEmbed = async (leaf: WorkspaceLeaf, value: string) => {
	return renderText(leaf, value);
};