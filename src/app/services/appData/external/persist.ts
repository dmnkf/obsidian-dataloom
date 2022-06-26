import { AppData } from "../state/appData";
import { NltSettings } from "../../settings";
import NltPlugin from "../../../../../main";
import { ViewType } from "../state/saveState";

export const persistAppData = async (
	plugin: NltPlugin,
	settings: NltSettings,
	appData: AppData,
	sourcePath: string,
	tableIndex: string,
	viewType: ViewType
) => {
	if (!settings.state[sourcePath]) settings.state[sourcePath] = {};
	settings.state[sourcePath][tableIndex] = {
		data: appData,
		viewType,
		shouldUpdate: true,
	};
	await plugin.saveData(settings);
};
