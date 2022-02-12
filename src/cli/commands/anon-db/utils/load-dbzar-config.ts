import {cosmiconfig} from 'cosmiconfig';
import {Config} from '../../../../config/types';
import {validateConfig} from '../../../../config/utils/validate-config';
import {createLogger} from '../../../../services/loggers/debug-logger';

const moduleName = 'dbzar';
const explorer = cosmiconfig(moduleName);

const logger = createLogger(__filename);

export async function loadDbzarConfig(): Promise<Config> {
	const configResult = await explorer.search();

	if (configResult) {
		const {isEmpty} = configResult;

		if (!isEmpty) {
			const configData: Record<string, unknown> = configResult.config as Record<
				string,
				unknown
			>;

			if (configData) {
				logger(`processing ${JSON.stringify(configData, null, 2)}`);
				validateConfig(configData);
				return configData as Config;
			}
		}
	}

	throw new Error('no config file found');
}
